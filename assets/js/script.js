//Dividir el código en módulos (2 Puntos)
import {
    Leon,
    Lobo,
    Oso,
    Serpiente,
    Aguila
} from './Animales.js';

const animal = document.getElementById('animal');
const preview = document.getElementById('preview');

//Realizar una consulta asíncrona utilizando una función async/await para obtener las imágenes correspondientes a los animales. (1 Punto)
animal.addEventListener('change', async function buscarIMG (animal){
    try {
        const respData = await fetch("../../animales.json");
        const dataAnimal = await respData.json();
        let animalObj = dataAnimal.animales
        let selectElement = animal.target
        let value = selectElement.value
        if (value == animalObj[0].name) {
            preview.innerHTML = `<img src="assets/imgs/${animalObj[0].imagen}" alt="${animalObj[0].name}" class='mx-auto d-block' style='height: inherit'>`
        }
        if (value == animalObj[1].name) {
            preview.innerHTML = `<img src="assets/imgs/${animalObj[1].imagen}" alt="${animalObj[1].name}" class='mx-auto d-block' style='height: inherit'>`
        }
        if (value == animalObj[2].name) {
            preview.innerHTML = `<img src="assets/imgs/${animalObj[2].imagen}" alt="${animalObj[2].name}" class='mx-auto d-block' style='height: inherit'>`
        }
        if (value == animalObj[3].name) {
            preview.innerHTML = `<img src="assets/imgs/${animalObj[3].imagen}" alt="${animalObj[3].name}" class='mx-auto d-block' style='height: inherit'>`
        }
        if (value == animalObj[4].name) {
            preview.innerHTML = `<img src="assets/imgs/${animalObj[4].imagen}" alt="${animalObj[4].name}" class='mx-auto d-block' style='height: inherit'>`
        }
        console.log(animalObj)
    } catch (err){
        console.log(err)
    }
});

//Crear las instancias de las clases utilizando los datos del formulario.(2 Puntos)
const registrando = () => {
    let nombreAnimal = document.getElementById('animal').value;
    if(nombreAnimal == 0){
        alert('Favor seleccione un animal')
        return nombreAnimal = null
    }
    let edadAnimal = document.getElementById('edad').value;
    let imagenAnimal = document.querySelector("#preview img").getAttribute("src")
    let comentariosAnimal = document.getElementById('comentarios').value;

//Validar que el usuario haya asignado todos los datos del animal antes de que éste sea agregado a la tabla. (Opcional)
    if(edadAnimal == 0 || comentariosAnimal == ""){
        alert('Favor rellenar todos los campos')
        comentariosAnimal = null
        edadAnimal = null
        return [edadAnimal,comentariosAnimal,]
    }
    
//Realizar por lo menos una función autoejecutable IIFE. (1 Punto)
    var IdSonido = (function (){
            if (nombreAnimal == 'Leon'){
            let sonidoAnimal = 'Rugido';
            return sonidoAnimal;
        }else if(nombreAnimal == 'Lobo'){
            let sonidoAnimal = 'Aullido';
            return sonidoAnimal;
        }else if(nombreAnimal == 'Oso'){
            let sonidoAnimal = 'Gruñido';
            return sonidoAnimal;
        }else if(nombreAnimal == 'Serpiente'){
            let sonidoAnimal = 'Siseo';
            return sonidoAnimal;
        }else if(nombreAnimal == 'Aguila'){
            let sonidoAnimal = 'Chillido';
            return sonidoAnimal;
        }
    })();

    var animalReg = () =>{
        if (nombreAnimal == 'Leon'){
            var animalReady = new Leon(nombreAnimal,edadAnimal,imagenAnimal,comentariosAnimal,IdSonido);
            return animalReady;
        }else if(nombreAnimal == 'Lobo'){
            var animalReady = new Lobo(nombreAnimal,edadAnimal,imagenAnimal,comentariosAnimal,IdSonido);
            return animalReady;
        }else if(nombreAnimal == 'Oso'){
            var animalReady = new Oso(nombreAnimal,edadAnimal,imagenAnimal,comentariosAnimal,IdSonido);
            return animalReady;
        }else if(nombreAnimal == 'Serpiente'){
            var animalReady = new Serpiente(nombreAnimal,edadAnimal,imagenAnimal,comentariosAnimal,IdSonido);
            return animalReady;
        }else if(nombreAnimal == 'Aguila'){
            var animalReady = new Aguila(nombreAnimal,edadAnimal,imagenAnimal,comentariosAnimal,IdSonido);
            return animalReady;
        }
    };

//Utilizar la manipulación del DOM para mostrar en la tabla los animales registrados con el formulario.(2 Puntos)
//Mostrar el detalle de cada animal en una ventana modal al ser presionada su imagen. (Opcional)
//Programar la interacción del botón de audio, en donde deberás reproducir el sonido del animal en el sitio web. (Opcional)
    const tarjetasAnimal = document.getElementById('Animales');
    tarjetasAnimal.innerHTML += `<div class="card" style="width: 18rem;">
            <img src="${imagenAnimal}" data-toggle="modal" data-target="#${nombreAnimal}" class="card-img-top" alt="${nombreAnimal}" id="AnimalCard">
            <div class="card-body bg-secondary">
                <button type="button" class="btn btn-secondary" onclick="document.getElementById('${IdSonido}').play()"><img src="/assets/imgs/audio.svg" height='20'><audio id="${IdSonido}" src="assets/sounds/${IdSonido}.mp3"></audio></button>                   
            </div>
            </div> 
            <div class="modal fade" id="${nombreAnimal}" tabindex="-1">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content bg-dark text-white">
                        <div class="modal-body">
                            <img src="${imagenAnimal}" class="card-img-top">
                            <h5 class="modal-title"> ${nombreAnimal}</h5>
                            <p>Edad: ${edadAnimal}</p>
                            <p>Comentario: ${comentariosAnimal}</p>
                        </div>
                    </div>
                </div>
            </div>`;
};

const registrar = document.getElementById('btnRegistrar');
registrar.addEventListener('click', registrando);

//Devolver el formulario en un estado inicial luego de registrar a cada animal.(Opcional)
const limpieza = () => {
    document.getElementById('animal').options[0].selected = 'selected';
    document.getElementById('edad').options[0].selected = 'selected';
    document.getElementById('comentarios').value = '';
    preview.innerHTML = ` `;
};

registrar.addEventListener('click', limpieza);