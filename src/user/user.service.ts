import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { ObjectId } from 'mongoose';
import { User } from './schemas/user.shema';
import { CreateUserDto } from './dto/create-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private userModel: mongoose.Model<User>,
  ) {}

  async createUser(user: CreateUserDto): Promise<User> {
    const salt = bcrypt.genSaltSync(10);
    try {
      // Hacher le mot de passe avant de l'enregistrer dans la base de données
      const hashedPassword = await bcrypt.hash(user.password, salt);

      // Créer un nouvel utilisateur avec le mot de passe haché
      const createdUser = new this.userModel({
        name: user.name,
        email: user.email,
        password: hashedPassword,
      });

      return createdUser.save();
    } catch (error) {
      // Gérez l'erreur ici, par exemple, en la journalisant ou en renvoyant une réponse d'erreur appropriée
      console.error("Erreur lors de la création de l'utilisateur :", error);

      // Vous pouvez personnaliser le message d'erreur à renvoyer au client
      throw new Error("Erreur lors de la création de l'utilisateur.");
    }
  }
  async findAll(): Promise<User[]> {
    return this.userModel.find();
  }
  async findOneById(id: string): Promise<User> {
    const user = this.userModel.findById(id);
    if (!user) {
      throw new NotFoundException('User not found.');
    }
    return user;
  }
  async updateOneById(id: ObjectId, user: User): Promise<User> {
    return this.userModel.findByIdAndUpdate(id, user);
  }
  async deleteOneById(id: ObjectId): Promise<User> {
    return this.userModel.findByIdAndRemove(id);
  }
}
