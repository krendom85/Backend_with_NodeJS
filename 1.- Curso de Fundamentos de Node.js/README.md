![Alt text](image/image.png)

# Curso de Fundamentos de Node.js

---

# Indice

# Descripcion

La logica de cada uno de los programas y su funcionamiento se la encuentra descrito acontinuacion.

Dentro de la carpeta source se encuentra diversas carpetas las cuales cada una contiene una serie de programas para explicar el funcionamiento basico de framework de node js,en cada uno de los topicos.

### Estructura del programa 

---
#### async

- asyncAwait.js : Utiliza la palabra reservada await para esperar la respuesta de una funcion asincrona, con esto nos permite crear un dialogo y que las funciones asincronar funcionen secuencialmente
- callback.js : Muestra un ejemplo de como enviar una funcion como parametro para ejecutarla dentro de otra funcion dependiendo de las condiciones necesarias.
- callbackHell.js : Contiene un ejemplo para realizar un llamado de un funcion dentro del llamado de otra funcion, practicamente son callbacks anidados dentro de varia funciones.
- promises.js : Muestra un ejemplo para crear una promesa y manejar las respuestas a recibir como los errores que se pueden generar.

#### Conceptos

- entorno.js : Muestra ejemplo para manejar las variables de entorno que se reciben como parametros al ejecutar el programa.
- monohilo.js : Demuestra el manejo de sistema de framework node js y muestra la asincronia que existe al manejar los hilos.

#### Herramientas

- automatization: Utiliza la libreria gulp.js el cual nos permite  realizar una construcción (build system) en JavaScript que se utiliza para automatizar tareas comunes en el desarrollo web, para el ejemplo la accion a ejecutar es la cracion de un servidor.
- electronApp: Es una herramienta que nos permite realizar una aplicacion de escritorio, mediante el etiquetado html.
- scrapping: Es la herramienta mas popular para realizar testing en paginas web mediante el manejo del navegador como bot.
  
#### Memoria

- buffer.js : Muestra el manejo de la memerio y el almacenamiento de byte dentro de la direccion de memoria
- streams.js : Demuestra como se realiza la lectura y escritura sobre un archivo con formato txt

#### Modulos

- nativos : Contiene un ejemplo de como realizar un libreria en c que se pueda utilizar en node.js
- consola.js : Muestra los diferentes manejo de la libreria console y su uso en cada caso.
- errores.js : Muestra un ejemplo del uso del try y catch para atrapar errores inesperados.
- fs.js Desmuestra como utilizar la libreria de file system de node.js
- http.js: Muestra la funcionalidad para crear un servidor y administrar rutas con la libreria http.
- os.js: Contiene los metodos que maneja la libreria os para utilizar el funciones relacionadas con el sistema operativo.
- procesoHijo.js : Ejecuta un comando dentro del promp y maneja sus resultados dentro del proceso.
- process.js : Utiliza las diferentes opciones de un proceso y los eventos que estos generan para manejar sus acciones.
  
#### Paquetes

- modulo : Muestra la creacion un modulo propio y la utilizacion en otros archivos para su uso como una libreria.
- npm : Contiene la utitlizacion del gestor de paquetes npm
- utiles : Contiene el manejo de tres librerias importante que son las siguientes
  - Imagenes (sharp)
  - Encriptacion (bcrypt)
  - Tiempo (moment)

#### Trucos

- benchmaking.js : Utiliza la funcion time de la libreria console para contar el tiempo que se demora en ejecutar un bloque de codigo definido por el usuario. 
- errorFirst : Manejo del error en las funciones en caso de que suceda un error capturado en el sistema.

#### Gloables

![Alt text](image.png)

--- 
## Instalación de Node.js

Si vas a trabajar con Node.js, lo primero que tienes que hacer, es instalarlo en tu máquina. Ya sea con Windows, Linux o Mac, si vas a la web de Node.js (https://nodejs.org), la web detectará tu sistema operativo, y te ofrecerá un paquete con el que instalarlo.

Simplemente pulsa en el botón verde de la versión que quieras (mi recomendación es siempre usar las versiones LTS) y completar el proceso de instalación. Dependiendo del sistema operativo, te hará más o menos preguntas, pero con las opciones por defecto se instalará bien.

Como consejo, asegúrate de tener una buena conexión a internet cuando lo instales, para que tarde poco tiempo.

Una vez lo hayas instalado, para comprobar que todo funciona correctamente, abre una terminal (en windows, CMD o PowerShell valen perfectamente) y escribe:

```
node -v
```

Ese comando te devolverá la versión de Node.js que se ha instalado.

También nos habrá instalado NPM, el gestor de paquetes. Para asegurarte de que está instalado, puedes ejecutar:

```
npm -v
```

Y te devolverá la versión de NPM que hay instalada.

Con esto, ya tenemos instalado Node.js y NPM, que es todo lo que necesitamos para empezar con nuestro curso de Fundamentos de Node.js.

---
## Comandos

#### Paquete para visualizcion de cambios en tiempo real
	npm install -g nodemon

#### Instalar libreria para instalar encriptacion
	npm i bcrypt

#### Instalar libreria para manejo de fechas
	npm i moment

#### Instalar libreria para trabajr con imagenes 
	npm i sharp

#### Instalar libreria para hacer web scrapping
        npm i puppeteer

#### Instalar libreria para realizar aplicaciones de escritorio
	npm i electron

#### Instalar depedencia para trabajar con procesos y trabajar con un pequeno servidor
	npm i gulp gulp-server-livereload

#### Correr la tarea (gulp)
	npm run tarea --> nombre de la tarea creada

#### Correr un script con modulos en el archivo principal es6
	node --experimental-modules archivo.js

#### Correr un script para debugarle
	node --inspect archivo.js


