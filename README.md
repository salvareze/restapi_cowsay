# API Rest para WebDevs (express, cowsay)

La aplicación consiste en un ejercicio sencillo de una API Rest con Nodejs utilizando librerías express, cowsay, morgan y nodemon.
El ejercicio consta de una petición `GET`, la cual devolverá un mensaje y pequeño diseño con cowsay.

## 1. Ejecutar localmente.
### 1.1. Clonar el repositorio.
Colocate en la carpeta donde desees clonar el repositorio.
```bash
git clone https://github.com/cassilup/express-cowsay
```
### 1.2. Instalar dependencias de npm.
Por medio de la terminal en lel path del proyecto procedemos a instalar las dependencias:
```bash
npm install
```
Si todo se encuentra correcto, deberá tener una nueva carpeta con las librerías descargadas de manera local `node_modules/`.
### 1.3. Ejecutar aplicación
El ejemplo esta configurado para ejecutar de dos maneras:
#### 1.3.1  Utilizando el comando genérico de Nodejs
El comando generico es `node` seguido de la ruta y/o nombre del archivo JS:
```bash
node src/index.js
```
#### 1.3.2  Utilizando "nodemon" el cual ejecuta npm por medio de un alías configurado en el package.json. 
Comando `npm` seguido de `run` y el alías, en este ejemplo `'dev'`.
```bash
npm run dev
```
Nota: Se suele utilizar cuando se tiene una estructura amplia.
#### 1.4. Abre tu navegador o el Postman en http://localhost:3000/
Deberás visualizar:

#### 1.4. Detener la aplicación.
Para detener el servidor teclea: `CTRL`+`C`.






