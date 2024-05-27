let fila, columna, factual, cactual
let preguntaRepe = []
let vidas = 2

const preguntas = {
    "acertijos": [
        {
            "enunciado": "¿En qué año ganó España el mundial?",
            "respuesta": "2010"
        },
        {
            "enunciado": "¿Cuál es el río más largo del mundo?",
            "respuesta": "nilo"
        },
        {
            "enunciado": "Famoso Pokémon de tipo eléctrico, cara principal de esta franquicia:",
            "respuesta": "pikachu"
        },
        {
            "enunciado": "¿En qué banda británica de rock participaba Freddie Mercury?",
            "respuesta": "queen"
        },
        {
            "enunciado": "Quinto mes del año:",
            "respuesta": "mayo"
        },
        {
            "enunciado": "¿Cuál fue la fruta prohibida que mordió Eva en la Biblia?",
            "respuesta": "manzana"
        },
        {
            "enunciado": "¿Quién es el protagonista de la serie Dragon Ball?",
            "respuesta": "goku"
        },
        {
            "enunciado": "Palabra reservada para condicionales en programación:",
            "respuesta": "if"
        },
        {
            "enunciado": "¿Cuál es la capital de Italia?",
            "respuesta": "roma"
        },
        {
            "enunciado": "Cuarto planeta del sistema solar, conocido como <<el planeta rojo>>:",
            "respuesta": "marte"
        },
        {
            "enunciado": "¿Cuál es el nombre de la lengua oficial de Rusia?",
            "respuesta": "ruso"
        },
        {
            "enunciado": "Animal con el cuello más largo del planeta:",
            "respuesta": "jirafa"
        },
        {
            "enunciado": "¿Cuál es el primer apellido del futbolista con más balones de oro ganados?",
            "respuesta": "messi"
        },
        {
            "enunciado": "Nombre de la escudería con la que Fernando Alonso ganó sus dos mundiales:",
            "respuesta": "renault"
        },
        {
            "enunciado": "Empresa de electónica fundada por Steve Jobs:",
            "respuesta": "apple"
        },
        {
            "enunciado": "¿De qué color es el cielo despejado de día?",
            "respuesta": "azul"
        },
        {
            "enunciado": "Parte del cuerpo humano usada para oler:",
            "respuesta": "nariz"
        },
        {
            "enunciado": "¿Quién es el protagonista de El Señor de los Anillos?",
            "respuesta": "frodo"
        },
        {
            "enunciado": "¿En qué país se encuentra la Torre Eiffel?",
            "respuesta": "francia"
        },
        {
            "enunciado": "Nombre del dulce líquido producido por las abejas:",
            "respuesta": "miel"
        },
        {
            "enunciado": "¿Cómo se llama la línea imaginaria que divide los dos hemisferios de la Tierra?",
            "respuesta": "ecuador"
        },
        {
            "enunciado": "Elemento químico con símbolo Fe:",
            "respuesta": "hierro"
        },
        {
            "enunciado": "¿Cuál es la moneda de la mayoría de paises europeos?",
            "respuesta": "euro"
        },
        {
            "enunciado": "¿Qué fruta se usa para hacer vino?",
            "respuesta": "uva"
        },
        {
            "enunciado": "¿En que país se encuentra la famosa Pirámide de Guiza?",
            "respuesta": "egipto"
        }
    ]
}

document.addEventListener("DOMContentLoaded", function () {

    fila = Math.floor(Math.random() * 4) + 1
    columna = Math.floor(Math.random() * 4) + 1
    console.log(fila + "," + columna)

})

function pulsar(fpulsada, cpulsada) {

    factual = fpulsada
    cactual = cpulsada

    for (let i = 1; i <= 4; i++) {
        for (let j = 1; j <= 4; j++) {
            let boton = document.getElementById("but" + i + j)
            if (Math.abs(fpulsada - i) + Math.abs(cpulsada - j) !== 1 || boton.style.backgroundColor === "red" || boton.style.backgroundColor === "green") {
                boton.disabled = true
            } else {
                boton.disabled = false
            }
        }
    }

    preguntar(factual, cactual)

}

function preguntar(factual, cactual) {
    let repe
    do {
        repe = Math.floor(Math.random() * preguntas.acertijos.length)
    } while (preguntaRepe.includes(repe))

    preguntaRepe.push(repe)

    const pregunta = preguntas.acertijos[repe]
    const respuestaUsu = prompt(pregunta.enunciado)

    let actual = document.getElementById("but" + factual + cactual)

    if (respuestaUsu && respuestaUsu.toLocaleLowerCase() === pregunta.respuesta.toLocaleLowerCase()) {
        if (("but" + factual + cactual) === ("but" + fila + columna)) {
            document.getElementById("victoria").style.display = "block"
            document.getElementById("tablero").style.display = "none"
            document.getElementById("normas").style.display = "none"
        } else {
            actual.style.backgroundColor = "green"
            alert("¡Respuesta correcta!")
        }
    } else {
        if (vidas != 0) {
            if (("but" + factual + cactual) === ("but" + fila + columna)) {
                document.getElementById("derrotaCasillaVictoria").style.display = "block"
                document.getElementById("tablero").style.display = "none"
                document.getElementById("normas").style.display = "none"
            } else {
                vidas--
                alert("¡Respuesta incorrecta! Vidas restantes: " + (vidas + 1))
                actual.style.backgroundColor = "red"
            }
        } else {
            document.getElementById("derrota0vidas").style.display = "block"
            document.getElementById("tablero").style.display = "none"
            document.getElementById("normas").style.display = "none"
        }
    }
    sinSalida()
}

function normas() {
    alert("Normas:\n Empiezas clicando en una casilla, por cada casilla que cliques tendrás que responder una pregunta.\n Si fallas 3 preguntas estás eliminado.\n El objetivo es llegar a la casilla oculta y responder correctamente la pregunta, si fallas en esta casilla estás eliminado.")
}

function reiniciar() {
    location.reload()
    console.log("Pagina recargada")
}

function sinSalida() {
    let sinSalida = true
    for (i = 1; i <= 4; i++) {
        for (j = 1; j <= 4; j++) {
            let boton = document.getElementById("but"+i+j)
            if (boton && !boton.disabled) {
                sinSalida = false
                break
            }
        }
        if (!sinSalida) {
            break
        }
    }
    if (sinSalida) {
        document.getElementById("derrotaEncerrado").style.display = "block"
        document.getElementById("tablero").style.display = "none"
        document.getElementById("normas").style.display = "none"
    }
}