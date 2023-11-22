                // PROGRAMACION ORIENTADA A OBJETOS (POO)

// class Animal {
//     constructor(especie, edad, color){
//         this.especie = especie;
//         this.edad = edad;
//         this.color = color;
//         this.info = `el animal es de color ${this.color} es un ${this.especie} y tiene una edad de ${this.edad} años`;
//     }
//     verInfo(){
//         document.write(this.info + "<br>");
//     }
// }
//         // herencia el extens es para la heredacion
// class Perro extends Animal{
//     constructor(especie,edad,color,raza){
//         super(especie,edad,color);
//         this.raza = null;
//     }
//    set modificarRaza(newName){
//     this.raza = newName;
//    }


// }


// const perro = new Perro("perro", 10 , "blanco","doberman");
// const gato = new Animal("gato", 5 , "negro");
// const loro = new Animal("loro", 2 , "verde y azul");

// perro.modificarRaza = "Pedro";
// document.write(perro.raza);


                            // HISTORIA DE COFLA #3
// problema A
// 1. sistema para mostrarle a cofla las particularidades de los 3 telefonos 
// 2. cada uno debe tener color peso resolucion de pantalla, resolucion de camara y memoria ram  
// 3. deben de poder prender, reiniciar, tomar fotos y grabar

class Celular {
    constructor(color,peso,tamaño,camara,ram){
        this.color = color;
        this.peso = peso;
        this.resolucionPantalla = tamaño;
        this.resolucionCamara = camara;
        this.memoriaRam = ram;
        this.encendido = false;
    }
    // metodos los metodos son como funciones pero se le dice asi en el orientado a objetos
    presionarBotonEncendido (){
        if (this.encendido == false){
            alert("celular prendido");
            this.encendido = true ;
        }else{
            alert("Celular apagado");
            this.encendido = false
        }
    }
    reiniciar(){
        if (this.encendido == true){
            alert("Reiniciando celular");
        }else{
            alert("Celular esta apagado");
        }
    }
    tomarFoto(){
        alert(`foto tomada en una resolucion de ${this.resolucionCamara}`)
    }
    grabarVideo(){
        alert(`grabando video en ${this.resolucionCamara}`)
    }
    mobileInfo(){
        return `
        Color: <b>${this.color}</b>
        Peso: <b>${this.peso}</b>
        Tamaño: <b>${this.tamaño}</b>
        Memoria ram: <b>${this.memoriaRam}</b>
        Resolucion de video: <b>${this.resolucionCamara}</b>
        Resolucion de camara: <b>${this.resolucionCamara}</b>
        `;
    }
}
// aca se agrega otra clase que tenga herencia
// recuerda agregar el extens y la clase que se va a heredar
class celularAltaGama extends Celular{
    // la herencia se agrega con el constructor + algo nuevo que se quiera agregar
    constructor(color,peso,tamaño,camara,ram,camaraExtra){
        // super ni idea para que es pero se manejan las variables anteriores y luego 
        // con el this. se le da propiedad o variable a la nueva propiedad 
        super(color,peso,tamaño,camara,ram)
        this.camaraExtra = camaraExtra;
    }
    videoLento(){
        alert("estas grabando videos en camara lenta");
    }
    reconocimientoFacial(){
        alert("Iniciando reconocimiento facial");
    }
    infoAltaGama(){
        return this.mobileInfo() + `resolucion de camara trasera: ${this.camaraExtra}`
    }
}
// lote de celular normal
// const celular1 = new Celular("rojo", "150 gramos", "5 pulgadas", "HD", "2GB");
// const celular2 = new Celular("negro", "250 gramos", "6 pulgadas", "full FHD", "3GB");
// const celular3 = new Celular("blanco", "300 gramos", "6.5 pulgadas", "full 4k", "4GB");

// lote de celular de alta gama

const celular1 = new celularAltaGama("rojo", "130gr","5.2","2k Ultra","4GB")
const celular2 = new celularAltaGama("negro", "200gr","6","4k Ultra","8GB")


//                                  llamada de accion al metodo
// celular1.presionarBotonEncendido();
// celular1.tomarFoto();
// celular1.grabarVideo();
// celular1.reiniciar();
// celular1.presionarBotonEncendido();

document.write(`
    ${celular1.infoAltaGama()} <br>
    ${celular2.infoAltaGama()} <br>
    `)

// problema B
// 1.Implementar todas las cualidades pero en celulares de alta gama (SE AGREGO EN LA HERENCIA)


                                         // problema C
// 1. crear un sistema que ayude a cofla para saber que aplicacion descargar
// 2. debe contener la cantidad de descargas puntuacion y peso 
// 3. se deben poder instalar, abrir, cerrar y desintalar

class App{
    constructor(descargas,puntuacion,peso){
        this.descargas = descargas;
        this.puntuacion = puntuacion;
        this.peso = peso;
        this.iniciada = false
        this.instalada = false
    }

    instalar(){
        if(this.instalada == false){
            this.instalada = true;
            alert("app instalada correctamente");
        }
     }
        desinstalar(){
            if(this.instalada == true){
                this.instalada = false;
                alert("app desinstalada correctamente");
            }    
        }
        abrir(){
            if(this.iniciada == false && this.instalada == true){
                this.iniciada = true;
                alert("APP INICIADA")
            }
        }
        cerrar(){
            if(this.iniciada == true && this.instalada == true){
                this.iniciada = false;
                alert("APP cerrada")
            }
        }
        appinfo(){
            return `
            descargas: ${this.descargas} <b></b>
            puntuacion: ${this.puntuacion} <b></b>
            peso: ${this.peso}<b></b>
            `
        }
    }

const app = new App("16.000","5 estrellas ","900 MB");


app.instalar();
app.abrir();
document.write(app.appinfo());
app.cerrar();

