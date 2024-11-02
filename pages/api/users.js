//EJEMPLO USANDO UNA CONEXION A BASE DE DATOS MONGO EN LIB/db.js
// pages/api/users.js
import connectDB from '../../lib/db';
import UserModel from '../../lib/models/user';

export default async function handler(req, res) {
  await connectDB(); // Solo se conectará si no está conectado

  switch (req.method) {
    case 'GET':
      const users = await UserModel.find({});
      res.status(200).json(users);
      break;
    case 'POST':
      const newUser = new UserModel(req.body);
      await newUser.save();
      res.status(201).json(newUser);
      break;
    default:
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
      break;
  }
}
