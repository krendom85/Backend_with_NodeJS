![Alt text](image/image.png)

# Curso de Backend con Node.js: Base de Datos con PostgreSQL

---
## Indice

---

## Descripcion

---

## Comandos

#### Instalar las dependencias de un proyecto realizado

- npm i

#### Ejecutar un contenedor de docker

- docker-composer up -d <name_service> 

#### Verificar que procesos de docker esta corriendo

- docker-composer ps

#### Bajar un proceso corriendo en el docker

- docker-composer down

--- 

## Instalación de Docker

Según el sistema operativo que utilices puede variar la instalación, así que a continuación te daré las indicaciones base para la instalación según tu sistema operativo:

### Instalación en Windows con WSL (Recomendada) 🐧

Debes descargar el instalador desde la página de Docker for Windows.

Cuando ya tienes instalado Docker Desktop dentro de tus programas debes abrirlo y debes asegurarte que la opción **“Use the WSL 2 based engine”** está habilitada:

![Alt text](image/image-4.png)

Luego en la sección “Resources > WSL Integration”, asegurarate que la opcion “Enable integration with my default WSL distro”, este habilitada:

![Alt text](image/image-1.png)

Puedes ver más detalles de Docker con WLS 👉[Docker Desktop WSL 2 backend](https://docs.docker.com/desktop/wsl/)

### Instalación en Windows 🪟

Debes descargar el instalador desde la página de [Docker for Windows](https://docs.docker.com/desktop/install/windows-install/).

Cuando ya tienes instalado **Docker Desktop** dentro de tus programas, una de las cosas que debes tener en cuenta en la instalación con Windows es que debes contar con **Windows 10 de 64 Bits** o superior y debes habilitar el [Hyper-V](https://docs.docker.com/desktop/install/windows-install/#system-requirements) de Windows.

Si quieres conocer los detalles, aquí te dejo el detalle como [habilitar Hyper-V desde la Interfaz de Windows](https://learn.microsoft.com/en-us/virtualization/hyper-v-on-windows/quick-start/enable-hyper-v)

![Alt text](image/image-2.png)

### Instalación en macOS 🍎

En Mac tienes dos opciones. Todo dependerá si tienes los nuevos chips M1 o Intel, ya que hay un instalable apropiado para ambas arquitecturas de chip. Puedes escoger el instalable desde [Install Docker Desktop on Mac](https://docs.docker.com/desktop/install/mac-install/).

Adicionalmente, si cuentas con los nuevos chips M1, debes ejecutar la siguiente instrucción en tu terminal softwareupdate --install-rosetta

Una vez descargues el instalador adecuado, solo debes seguir los pasos y pasar Docker Desktop a tus aplicaciones.

![Alt text](image/image-3.png)

### Instalación en Ubuntu 🐧

Estos son los pasos para instalarlo dentro de Ubuntu, sin embargo, también puedes ver directamente [Install Docker Engine on Ubuntu](https://docs.docker.com/engine/install/ubuntu/)

```
sudo apt-get update
```

```
sudo apt-get install \
    ca-certificates \
    curl \
    gnupg \
    lsb-release
```

```
sudo mkdir -p /etc/apt/keyrings
```

```
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
```

```
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \
  $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
```

```
sudo apt-get update
```

```
sudo apt-get install docker-ce docker-ce-cli containerd.io docker-compose-plugin
```

```
sudo docker run hello-world
```

Para otras distribuciones de Linux:
- [Install Docker Engine on CentOS](https://docs.docker.com/engine/install/centos/)
- [Install Docker Engine on Debian](https://docs.docker.com/engine/install/debian/)
- [Install Docker Engine on Fedora](https://docs.docker.com/engine/install/fedora/)

---

## Instalación de Postman o Insomia

Para poder probar nuestra API de forma más productiva vamos a tener que usar algún cliente de APIs que nos permita hacer las pruebas de funcionamiento de lo que estás construyendo, los dos clientes más famosos son **Insomnia** y **Postman** y vas a necesitar de alguno de ellos para ir probando cada característica que vamos a ir construyendo en nuestro servicio de Platzi Store.

### Insomnia


Como cliente para probar APIs tiene grandes características, destaca principalmente por una interfaz limpia y sencilla, pero a la vez potente, en donde puede configurar ambientes, exportar e importar, gran soporte con GraphQL, etc. Insomnia será el que vamos a usar en este curso 🙂

![Alt text](img/image.png)

#### Instalación

La instalación es sencilla, solo tienes que ingresar a https://insomnia.rest/download y descargar el instalador. Una vez esté descargado lo ejecutas y sigues los pasos de la instalación; en caso de Windows descarga un archivo .exe, en caso de Mac descarga un .dmg, y finalmente, en caso de Ubuntu descargas el .deb.

### Postman

Es uno de los más usados y legendariamente nos ha acompañado por mucho tiempo, además cuenta con características similares a Insomnia como: exportar e importar, ambientes, entornos, y provee una API para hacer testing muy potente.

#### Instalación Windows y Mac

La instalación es sencilla solo tienes que ingresar a https://www.postman.com/downloads/
y descargar el instalador, una vez esté descargado lo ejecutas y sigues los pasos de la instalación, en caso de Windows descarga un archivo .exe y en caso de Mac descargas un archivo comprimido lo descomprimes y ahí sigues el proceso.

#### Instalación Linux

```
# Debian, Ubuntu y derivados
sudo apt install postman
# Arh, Manjaro
sudo pacman -S postman
# Fedora
sudo yam install postman
```
---

## Prueba

> **1. ¿Cuál es propósito de instalar nodemon?**
>      - Nos funciona para hacer livereload cada que hagamos cambios en archivos js

> **2. Nos funciona para hacer livereload cada que hagamos cambios en archivos js**
>     - app.listen(8000)

> **3. ¿Cuál método de express nos sirve para retornar un formato json como respuesta?**
>     - app.json({...})

> **4. ¿Cuál es la manera correcta de declarar una ruta que reciba un parámetro llamado productId?**
>     - app.get('/products/:productId',  ...)

> **5. ¿Cuál es la manera correcta para obtener el parámetro productId enviado desde una ruta con GET?**
>     - const { productId } = req.params;

> **6. ¿Cuál es la manera correcta de obtener parámetros tipo query de una ruta con GET?**
>     - const { limit, offset } = req.query;

> **7. ¿Cuál es la definición más adecuada para el principio de Single Resposability?**
>     - Cada módulo, clase o función debería tener una sola responsabilidad.

> **8. Cada módulo, clase o función debería tener una sola responsabilidad.**
>     - app.use(express.json())

> **9. ¿Cuál es la forma correcta para definir una ruta de tipo patch para actualizar una entidad?**
>     - router.patch('/tasks/:id', ...)

> **10. ¿Cuál es la forma correcta de enviar un error de tipo 404 con una respuesta tipo JSON?**
>     - res.status(404).json({ message })

> **11. ¿Cuál es la responsabilidad principal de los servicios?**
>     - Usualmente está toda la lógica de negocio y resuelve los casos de uso

> **12. ¿Qué parámetros debemos recibir para tener un middleware que lea errores?**
>     - error, req, res y next

> **13. ¿Cuál es el objetivo de la librería Boom?**
>     - Manejo de errores http

> **14. ¿Cuál es el objetivo de la librería Joi?**
>     - Validación de datos por medio de un schema

> **15. ¿Si una solicitud sale desde el mismo origen, hay problema de CORS?**
>     - Falso

> **16. ¿Cuál es el objetivo del archivo Procfile de Heroku?**
>     - Es este archivo ejecutamos un script para correr la app en prod.
