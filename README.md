#  Desafío - FBI System 🕵️‍♂️🕵️‍♀️


Este repositorio contiene el código fuente de la aplicación web desarrollada para el desafío en el que validaremos nuestros conocimientos acerca de  programar un servidor con Express que
utilice JWT para la autorización de agentes que visiten las páginas restringidas.


## Descripción de la solución 💻

El FBI está abriendo un departamento de informática y te ha contratado para crear el sistema
online que gestione misiones secretas, necesitarás programar un servidor con Express que
utilice JWT para la autorización de agentes que visiten las páginas restringidas. 

En este desafío contarás con un Apoyo Desafío - FBI System en donde encontrarás un
documento JavaScript que exporta un arreglo de objetos correspondiente a las credenciales
de los agentes secretos, además de una interfaz hecha con HTML y Bootstrap


Siguiendo esta gráfica: 

![image](https://github.com/CamiSerantoni/FBI_System_Agents/assets/152921799/28f68134-2a26-4dd6-a2a3-1d05707212f3)




## Requerimientos: 📊📎🧮

1. Crear una ruta que autentique a un agente basado en sus credenciales y genere un
token con sus datos.
(3 Puntos)
2. Al autenticar un agente, devolver un HTML que:
a. Muestre el email del agente autorizado.
b. Guarde un token en SessionStorage con un tiempo de expiración de 2 minutos.
c. Disponibiliza un hiperenlace para redirigir al agente a una ruta restringida.
(4 Puntos)
3. Crear una ruta restringida que devuelva un mensaje de Bienvenida con el correo del
agente autorizado, en caso contrario devolver un estado HTTP que indique que el
usuario no está autorizado y un mensaje que menciona la descripción del error.
(3 Puntos)


## Estructura del Proyecto 🩻

El proyecto está estructurado de la siguiente manera:




En busca de seguir los lineamientoes de la arquitectura MVC

## Dependencias 🪢

El proyecto utiliza las siguientes dependencias principales:

- **Express**: Para la creación del servidor web.
- **JWT**
- **Dotenv**

  tal como se aprecia en la siguiente imagen:
  
  ![image](https://github.com/CamiSerantoni/FBI_System_Agents/assets/152921799/706b9312-dc0d-447e-83b3-5acef35f4996)


## Requisitos y Configuración 🔩🛠️🧰

Para ejecutar el proyecto localmente, asegúrate de tener instalado Node.js y npm. Luego, sigue estos pasos:

1. Clona este repositorio: `git clone <URL_del_repositorio>`
2. Accede al directorio del proyecto: `cd <nombre_del_directorio>`
3. Instala las dependencias del proyecto: `npm install`
4. Inicia el servidor local: `npm run dev`
5. Abre tu navegador web y accede a `http://localhost:3000` para ver la aplicación en funcionamiento.

