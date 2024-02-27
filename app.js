let numeroSecreto = 0;
let intentos = 1;
let listaNumerosSorteados =[];
let numeroMaximo = 10 ;


function asignarTextoElemento(elemento, texto){
    let elementoHtml = document.querySelector(elemento);
    elementoHtml.innerHTML = texto;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

      if(numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p',`Acertaste el numero en  ${intentos} ${(intentos === 1 ? 'vez' : 'veces' )} `);
        document.getElementById('reiniciar').removeAttribute('disabled');
        limpiarCaja();
      }else{
        if (numeroDeUsuario > numeroSecreto)
            asignarTextoElemento('p','El numero Secreto es menor ');
        else {
            asignarTextoElemento('p','El numero Secreto es mayor ');
        }
        intentos++;
        limpiarCaja();
      }
    return;
}

function limpiarCaja(){
let valorCaja = document.querySelector('#valorUsuario').value = '';
}

function reiniciarJuego(){
  //limpiar Caja
  limpiarCaja();
  //Reiniciar mensaje de inicio 
  condicionesIniciales();
  
  //Desabilitar el boton de nuevo juego
document.querySelector('#reiniciar').setAttribute('disabled',true);
 
}


function condicionesIniciales(){
  asignarTextoElemento('h1', 'Juego del numero Secreto ');
  asignarTextoElemento('p',`Elija un numero de 1 al ${numeroMaximo}`);
  numeroSecreto = generarNumeroSecreto();
  intentos = 1;
}

condicionesIniciales();

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados)
  //si ya sorteamos todos los numeros
  if(listaNumerosSorteados.length == numeroMaximo){
  }else{
    // si el numero generado esta inclido en la lista
    if (listaNumerosSorteados.includes(numeroGenerado)){
        return generarNumeroSecreto();
    }else{
      listaNumerosSorteados.push(numeroGenerado)
      return(numeroGenerado)
    }
  }
}


let promedioLista = [5,6,7,8,9,4];

function encontrarPosicion(lista, elemento) {
  // Recorremos la lista
  for (let i = 0; i < promedioLista.length; i++) {
      // Comparamos cada elemento con el elemento buscado
      if (lista[i] === elemento) {
          // Si encontramos el elemento, devolvemos su posición
          return i;
      }
  }
  // Si el elemento no se encuentra en la lista, devolvemos -1
  return -1;
}



encontrarPosicion(promedioLista, 8)



