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