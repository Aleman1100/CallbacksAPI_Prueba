//Crear las clases representadas en el diagrama implementando la herencia indicada.(2 Puntos)
//Dividir el código en módulos (2 Puntos)
import Animal from "./animal.js";

class Leon extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido)
    }
    rugir(){
        animalPlayer.innerHTML = `<audio src="assets/sounds/Rugido.mp3" autoplay></audio>`;
    }
};
class Lobo extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido)
    }
    aullar(){
        animalPlayer.innerHTML = `<audio src="assets/sounds/Aullido.mp3" autoplay></audio>`;
    }
};
class Oso extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido)
    }
    grunir(){
        animalPlayer.innerHTML = `<audio src="assets/sounds/Gruñido.mp3" autoplay></audio>`;
    }
};
class Serpiente extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido)
    }
    sisear(){
        animalPlayer.innerHTML = `<audio src="assets/sounds/Siseo.mp3" autoplay></audio>`;
    }
};
class Aguila extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido)
    }
    chillar(){
        animalPlayer.innerHTML = `<audio src="assets/sounds/Chillido.mp3" autoplay></audio>`;
    }
};

export {
    Leon,
    Lobo,
    Oso,
    Serpiente,
    Aguila
 }