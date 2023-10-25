import {
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class JwtAuthAdminGuard extends AuthGuard('jwt') {
  constructor(private readonly jwtService: JwtService) {
    super();
  }

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const token = this.extractTokenFromHeader(request);
    if (!token) {
      throw new UnauthorizedException('Token JWT manquant');
    }
    try {
      const payload = await this.jwtService.verifyAsync(token, {
        secret: process.env.JWT_SECRET,
      });
      const userRole = payload.role; // Supposons que le rôle est stocké dans le champ "role" du jeton
      if (userRole !== 'admin') { 
      throw new UnauthorizedException('Accès non autorisé pour les administrateurs uniquement');
            }
      request['user'] = payload;
    } catch (error) {
      throw new UnauthorizedException('Token JWT invalide');
    }
    return true;
  }
  private extractTokenFromHeader(request: any): string | undefined {
    const authorizationHeader = request.headers.authorization;

    if (!authorizationHeader) {
      return undefined;
    }

    const [type, token] = authorizationHeader.split(' ') || [];

    if (type === 'Bearer' && token) {
      return token;
    }

    return undefined;
  }
}
