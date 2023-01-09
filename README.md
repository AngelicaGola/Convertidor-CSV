# Proyecto-MERN-

## Ejecución de la aplicación
•	Al ingresar a la página encontrará en el NavBar dos botones - “Ver archivos” y “Agregar archivo”. 
![](https://github.com/AngelicaGola/Proyecto-MERN-/blob/main/assets/navbar.JPG)

•	Para ingresar por primera vez un archivo csv diríjase al botón “Agregar archivo”, acá podrá subir el archivo luego de oprimir el botón “Subir Archivo”
![](https://github.com/AngelicaGola/Proyecto-MERN-/blob/main/assets/agregarArchivo.JPG)

•	Le aparecerá un alert avisando que el archivo se subió correctamente, ademas lo dirigirá a la página de inicio automáticamente 
![](https://github.com/AngelicaGola/Proyecto-MERN-/blob/main/assets/agregarArchivoExitosa.JPG)

•	Una vez subido el archivo diríjase al botón “Ver archivos”, acá aparecerá automáticamente el nombre del archivo registrado. Dándole click sobre este podrá consultar y visualizar en pantalla los datos que tiene el archivo csv.
![](https://github.com/AngelicaGola/Proyecto-MERN-/blob/main/assets/verArchivo.JPG)


•	Podrá subir todos los archivos que desee, todos estos se podrán visualizar en la pantalla “Ver Archivos”. 
![](https://github.com/AngelicaGola/Proyecto-MERN-/blob/main/assets/verArchivoTabla.JPG)

## Como se desarrolló la aplicación: 
•	El Front de la aplicación se realizó en React.js
•	El Back se utilizo Node.js con el servidor Express Js
•	Base de datos Mongo DB
•	El Front está contenido en la carpeta cliente, acá están dispuestas todas las carpetas generadas por React.js. En la carpeta src están los archivos “AgregarArchivos.js” y “ListaArchivos.js” desarrollados para este proyecto.
•	Las peticiones HTTP se hacen dentro de la carpeta rutas/usuario.js, de esta manera se está comunicando la parte Back con el Front. 
•	En el archivo conexión.js se crea y se hace la conexión a la base de datos no relaciona MongoDB, se utiliza la biblioteca Mongoose para crea la conexión entre MongoDB y el entorno de JavaScript de Node.js.
•	En el archivo server.js se configura el puerto del servidor, y se importa las conexiones y rutas necesarias para el funcionamiento de la aplicación.  

## Despliegue de la aplicación 
Para desplegar esta aplicación se deberán seguir los siguientes pasos:
Requisitos necesarios para desplegar aplicación en Vercel 
•	Tener los proyectos de backend y frontend en ejecución en localhost: NodeJS 18.12, MongoDB 6.0.17+, Git 2.37+.
•	Tener cuenta en Mongo Atlas
•	Tener cuenta en Vercel
•	Servicio de Mongo Atlas, con acceso público desde internet.
•	Verificar la conexión al servicio de bases de datos.

Pasos a seguir:
1.	Verificar datos en Mongo Atlas
2.	Agregar el archivo vercel.json a la raíz del proyecto con la configuración para su despliegue y hacer commit al repositorio en github
3.	Realizar login en Vercel.com, dar clic en nuevo proyecto y seleccionar github para importar el repositorio.
4.	En el “project Name”, escribir nombre del proyecto, y seleccionar la carpeta del proyecto backend del repositorio, luego oprimir botón “Deploy”.
5.	Verificar que el deployment se completó y ejecuta.
6.	Despliegue del proyecto font end. Igual al proceso anterior.
7.	Verifique el despliegue es el navegador. 
