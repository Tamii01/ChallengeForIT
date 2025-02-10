# Challenge ForIT

Esta es una aplicación React que consume datos de una API REST y permite gestionar usuarios de forma interactiva.

## Características
- Obtiene y muestra datos de usuarios desde `https://jsonplaceholder.typicode.com/users`.
- Filtro en tiempo real por nombre, email o ciudad.
- Permite agregar nuevos usuarios (guardados en memoria temporalmente).

## Requisitos previos
Para ejecutar esta aplicación, necesitas tener instalado:
- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

## Instalación y ejecución
Sigue los  pasos para correr la aplicación en tu entorno local:

1. Clona este repositorio o descarga los archivos.
   ```sh
   git clone https://github.com/tu-repo.git
   cd nombre-del-proyecto
   ```

2. Instala las dependencias.
   ```sh
   npm install
   ```

3. Inicia el servidor de desarrollo.
   ```sh
   npm start
   ```

4. Abre tu navegador y accede a `http://localhost:5173/`.

## Uso de la aplicación
- La página principal obtiene la lista de usuarios desde la API y los presenta en tarjetas.

Puedes:
- Usar la barra de búsqueda para filtrar por nombre, email o ciudad.
- Hacer clic en una tarjeta para expandir la información del usuario.
- Hacer clic en "Add Users +" para agregar un nuevo usuario. (Los usuarios agregados se almacenan en memoria.)

## Estructura del proyecto
```
/src
  ├── components
  │   ├── AddUser.js  # Formulario para agregar usuarios
  │   ├── UserCard.js  # Componente de tarjeta para mostrar usuarios
  ├── App.js         # Componente principal de la aplicación
  ├── index.js       # Punto de entrada de la aplicación
  ├── styles.css     # Estilos de la aplicación
```

## Tecnologías utilizadas
- React.js
- JavaScript
- CSS
- Fetch API
- Node.js
- Vite

---

