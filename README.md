ACTIVIDADES POR DESARROLLAR
1.	Identificar gráficamente la arquitectura web de la aplicación a desarrollar.
Es un tipo de arquitectura de desarrollo web que se apoya totalmente en el estándar HTTP.

REST se compone de una lista de reglas que se deben cumplir en el diseño de la arquitectura de una API.

Hablaremos de servicios web restful si cumplen la arquitectura REST.
Restful = adjetivo, Rest = Nombre

 ![Imagen1](https://user-images.githubusercontent.com/56567621/114504353-5c6e7380-9bf4-11eb-9266-45a3b67d9b99.png)


2.	Generar una llave para consumir los servicios web de la API (opcional, depende de la API seleccionada).
Para esta práctica no fue necesario una llave para consumir la API puesto que utilizamos una API publica con la que podemos obtener diferentes nombres, apellidos y correos todo esto será consumido por la siguiente API:  https://randomuser.me/api/



3.	Crear un repositorio en GitHub con el nombre “Practica01 – Consumo de APIs en la nube”


![Imagen4](https://user-images.githubusercontent.com/56567621/114504678-ddc60600-9bf4-11eb-80ec-e07ddad54380.png)






4.	Desarrollar una aplicación con HTML + CSS + Javascript + Web Services para buscar información y visualizar toda la información disponible a través de la API.

Para la practica vamos a crear nuestro archivo de index.html el cual contiene el siguiente código:

<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Buscador</title>
    <link rel="stylesheet" href="css/styles.css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css">

</head>

<body>
    <script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
    <div id="app">
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="container-fluid">
                <a class="navbar-brand text-center" href="#"> Nombres</a>
                <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
                    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li class="nav-item">
                            <a class="nav-link" href="#"></a>
                        </li>
                    </ul>
                        <button class="btn btn-outline-success my-2 my-sm-0" onclick=traer()
                            type="submit">Buscar</button>
                </div>
            </div>
        </nav>

        <header>
            <div class="hero">
                <div class="container-info">
                    <h1 class="text-center">Resultados:</h1>
                </div>
                <div class="resultado">
                    <div class="mt-5" id="contenido"></div>
                </div>
        </header>

    </div>
    <script src="js/scripts.js"></script>
</body>

</html>

En el archivo scripts.js vamos a colocar el siguiente código que es en donde vamos a hacer el consumo de la API y obtener diferentes datos de ella de la siguiente forma.

var contenido = document.querySelector('#contenido')
function traer() {
  fetch('https://randomuser.me/api/')
    .then(res => res.json())
    .then(data => {

      console.log(data.results['0'])
      contenido.innerHTML = `
                <div class="foto">
                <img src="${data.results['0'].picture.large}" width="100px" class="img-fluid rounded-circle" name> 
                </div>
                <div class"row">
                <p>Nombre: ${data.results['0'].name.first}</p>
                <p>Apellido: ${data.results['0'].name.last}</p>
                <p>email: ${data.results['0'].email}</p>
                </div>
                `
    });

}

Por último, en el archivo styles.css es en donde vamos a darle cirto estilo a nuestra pagina para que no se vea tan simple nuestra aplicación.

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
    font-size: 1.3em;
  }
  
  .hero {
    background-color: rgb(45, 158, 73);
  }
  
  .container-info {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 80px;
    color: #fff;
  }
  .resultado{
    display: flex;
    justify-content: center;
    align-items: center;
    color: rgb(113, 193, 218);
    font-style: oblique;
    font-size: large;

  }
  .foto{
    display: flex;
    justify-content: center;
    align-items: center;
  }

5.	Realizar varios commits en la herramienta GitHub que demuestren el desarrollo de la aplicación.

 ![Imagen2](https://user-images.githubusercontent.com/56567621/114504412-7445f780-9bf4-11eb-85a6-86007e86cf08.png)

RESULTADO(S) OBTENIDO(S):
•	Al finalizar esta práctica se obtuvo el siguiente resultado ya consumiendo la API que se encontró 

 ![Imagen3](https://user-images.githubusercontent.com/56567621/114504746-f46c5d00-9bf4-11eb-839e-11562bc45f91.png)

En esta aplicación lo que se debe hacer es dar click en el botón de buscar y se empezará a hacer uso de la API que estamos utilizando y de esta API obtenemos una foto, nombre, apellido y el email de una persona que está en esa API.


CONCLUSIONES:
El consumo de una API tiene su complejidad ya que no todas se utilizan de la misma forma es decir el código de implementación varia dependiendo de la API que pretendamos usar.
Con esta practica se puede dar cuente que para poder llevar una buena aplicación con el consumo de APIS debemos de apoyarnos mucho en la información que podamos obtener de la API que queramos utilizar.



RECOMENDACIONES: Se recomienda tener una buena pagina que contenga APIS que se puedan consumir ya que no todas están funcionando.
Desarrollar una aplicación que consuma una API es fácil si se cuenta con una buena documentación.
