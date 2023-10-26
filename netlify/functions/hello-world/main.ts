import { Bootstrap } from '@midwayjs/bootstrap';
import { createApp, close } from '@midwayjs/mock';

let app;

export const handler = async (event, context) => {
  if (!app) {
    // Créez l'application Midway
    app = await createApp();
    // Configurez l'application
    await Bootstrap.configure({
      app,
    }).run(); // Utilisez listen() au lieu de start()
  }

  // Utilisez l'application Midway comme middleware avec les données d'événement AWS Lambda
  return await app.callback()(event, context);
};

// Fermez l'application lorsque le script se termine
export const stop = async () => {
  if (app) {
    await close(app);
  }
};
