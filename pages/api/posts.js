// pages/api/posts.js
//EJEMPLO USANDO UN ARRAY
const postsArray = [
  {
    id: 1,
    title: "Primer Post",
    content: "Este es el contenido del primer post.",
    author: "Autor Uno",
  },
  {
    id: 2,
    title: "Segundo Post",
    content: "Aquí se encuentra el contenido del segundo post.",
    author: "Autor Dos",
  },
  {
    id: 3,
    title: "Tercer Post",
    content: "Contenido del tercer post, muy interesante.",
    author: "Autor Tres",
  },
  {
    id: 4,
    title: "Cuarto Post",
    content: "El cuarto post es sobre Next.js y sus características.",
    author: "Autor Cuatro",
  },
  {
    id: 5,
    title: "Quinto Post",
    content: "Este es el último post de nuestra lista de ejemplo.",
    author: "Autor Cinco",
  },
];




export default function handler(req, res) {
  switch (req.method) {
    case 'GET':
      // Lógica para manejar GET
      res.status(200).json({ posts: postsArray });
      break;
    case 'POST':
      // Lógica para manejar POST
      const newPost = req.body; // Asegúrate de tener el body parser configurado
      postsArray.push(newPost)
      res.status(201).json({ posts: 'Post creado', post: newPost });
      break;
    case 'PUT':
      // Lógica para manejar PUT
      const updatedPost = req.body; // Supón que tienes un post a actualizar
      res.status(200).json({ posts: 'Post actualizado', post: updatedPost });
      break;
    case 'DELETE':
      // Lógica para manejar DELETE
      const { id } = req.query; // Obtener el ID del post a eliminar
      res.status(200).json({ posts: `Post con ID ${id} eliminado` });
      break;
    default:
      res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
      break;
  }
}
