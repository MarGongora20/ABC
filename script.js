let colores = ["red", "blue", "green", "purple", "orange", "pink", "yellow", "black"];
let girar = document.querySelector('#card');
let contador = 0;

function colorRandom(letra){

    let colorAleatorio = Math.floor(Math.random() * colores.length);

    letra.style.color = colores[colorAleatorio];
}

function voltear(card){

    if(!card.classList.contains("vista")){

        contador++;

        document.getElementById("contador").textContent = "Letras vistas: " + contador;

        card.classList.add("vista");
    }

    card.classList.toggle("voltear");
}

function filtrar(tipo){

    let tarjetas = document.querySelectorAll(".card");

    for(let i = 0; i < tarjetas.length; i++){

        if(tipo === "todas"){

            tarjetas[i].style.display = "block";

        }else{

            if(tarjetas[i].dataset.tipo === tipo){

                tarjetas[i].style.display = "block";

            }else{

                tarjetas[i].style.display = "none";
            }
        }
    }
}