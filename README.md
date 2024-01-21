# Backend Test Project for Bubbo

Este proyecto backend ha sido generado utilizando Node.js y Express para crear un API REST de libros, como parte de la prueba técnica para la empresa Bubbo.

## Configuración

Antes de ejecutar el proyecto, asegúrate de realizar los siguientes pasos:

1. Ejecuta `npm install` para instalar las dependencias del proyecto.

2. Crea un archivo llamado `.env` en la raíz del proyecto.

3. Agrega la siguiente línea al archivo `.env` y sustituye "RUTA_FIREBASEKEY" con la ruta correcta de tu archivo de credenciales de Firebase:

   ```plaintext
   GOOGLE_APPLICATION_CREDENTIALS=RUTA_FIREBASEKEY
   ```

## Estructura del Proyecto

- **src/index.js:** Punto de entrada del servidor.

## Scripts

- **npm start:** Inicia el servidor en modo de producción.
- **npm run dev:** Inicia el servidor en modo de desarrollo utilizando nodemon.

## Dependencias Principales

- **express:** Framework web para Node.js.
- **body-parser:** Middleware para parsear datos JSON en las solicitudes.
- **cookie-parser:** Middleware para manejar cookies en Express.
- **dotenv:** Carga variables de entorno desde un archivo `.env`.
- **firebase-admin:** Cliente para interactuar con Firebase desde Node.js.
- **nodemon:** Herramienta que reinicia automáticamente la aplicación cuando se detectan cambios durante el desarrollo.

## Notas Adicionales

Asegúrate de tener la ruta correcta para el archivo de credenciales de Firebase en el archivo `.env`. Sin este archivo, la aplicación puede no funcionar correctamente.

Este proyecto está configurado para utilizar Firebase para ciertas operaciones. Asegúrate de tener una cuenta de Firebase y configurar adecuadamente tu proyecto.

¡Disfruta explorando y desarrollando en este proyecto! Si tienes alguna pregunta o problema, no dudes en ponerte en contacto.
