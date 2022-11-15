# 💻 MongoDB-Mongoose Project 
Este proyecto consiste en el desarrollo del backend de una Red Social, combinando los conocimientos adquiridos en las tecnologías node + express, además de MongoDB/mongoose.

## 🚧 Desarrollo de API REST capaz de lo siguiente: 
- Registro de usuarios usando Bcrypt.
- Login de usuarios + token + middleware.
- CRUD de endpoints.
- Dar/quitar Like a un post.
- Backend disponible en producción con Railway.

## 🦾 Tecnologías usadas.
- MongoDB
- Mongoose
- Express
- Nodemon (Dev Dependency)
- Bcrypt
- JWT
- Dotenv
- Railway
- Postman
- VsCode
- Git / GitHub

# 📋 Requerimientos previos

1 - Para iniciar el proyecto primero haz un clon:

> git clone https://github.com/Fede-Arevalo/MongoDB-Mongoose.git

2 - Una vez clonado el proyecto, debe instalar los módulos necesarios con npm:
> npm install

3 - Debe cambiar el nombre del archivo ".env.example" a ".env"
> Luego edite el campo de "PORT" con su puerto local preferido y el campo de "JWT_SECRET" con su palabra secreta. 
Para agregar la ruta en "MONGO_URI" previamente deberá crear una base de datos en "MongoDB Atlas".

4 - Para utilizar los endpoints de manera "local" en POSTMAN debe importar la colección desde el siguiente enlace.
> https://www.getpostman.com/collections/36ca725681b39b8a07b4

5 - En POSTMAN deberá actualizar el TOKEN que devuelve al hacer LOGIN, para utilizar los endpoints que requieren autenticación. 
> HEADERS => KEY = Authorization, VALLUE = "TOKEN"

6 - El proyecto está listo para comenzar!
> npm start

# 📷 Preview 

## 👤 Registro de usuario
![image](https://user-images.githubusercontent.com/105200893/201909668-07aea3f1-a8a5-4559-9552-5917e4dd2e02.png)

## 💻✅ Login de usuario
![image](https://user-images.githubusercontent.com/105200893/201909645-aefe479e-476a-4ee2-99b1-2822d3e7d89a.png)

## ⚠️ Edición del TOKEN según usuario logeado 
![image](https://user-images.githubusercontent.com/105200893/201909591-f69ef981-01a2-491e-bf14-3aa69ae8e47a.png)
