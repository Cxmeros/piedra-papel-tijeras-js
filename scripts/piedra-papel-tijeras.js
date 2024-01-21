let puntuacion = JSON.parse(localStorage.getItem(`puntuacion`)) || {
    Victorias: 0,
    Derrotas: 0,
    Empates: 0,
  };

  let resultado = "";
  actualizarPuntuacionElemento();

  function elegirMovimientoCPU() {
    let movimientoCPU = "";
    const numeroRandom = Math.random();
    if (numeroRandom >= 0 && numeroRandom < 1 / 3) {
      movimientoCPU = "Piedra";
    } else if (numeroRandom >= 1 / 3 && numeroRandom < 2 / 3) {
      movimientoCPU = "Papel";
    } else if (numeroRandom >= 2 / 3 && numeroRandom < 1) {
      movimientoCPU = "Tijeras";
    }
    return movimientoCPU;
  }

  function jugar(movimientoJugador) {
    const movimientoCPU = elegirMovimientoCPU();
    if (movimientoJugador === movimientoCPU) {
      resultado = "Empate";
    } else if (
      movimientoJugador === "Piedra" &&
      movimientoCPU === "Papel"
    ) {
      resultado = "Perdiste";
    } else if (
      movimientoJugador === "Piedra" &&
      movimientoCPU === "Tijeras"
    ) {
      resultado = "Ganaste";
    } else if (
      movimientoJugador === "Papel" &&
      movimientoCPU === "Piedra"
    ) {
      resultado = "Ganaste";
    } else if (
      movimientoJugador === "Papel" &&
      movimientoCPU === "Tijeras"
    ) {
      resultado = "Perdiste";
    } else if (
      movimientoJugador === "Tijeras" &&
      movimientoCPU === "Piedra"
    ) {
      resultado = "Perdiste";
    } else if (
      movimientoJugador === "Tijeras" &&
      movimientoCPU === "Papel"
    ) {
      resultado = "Ganaste";
    }

    if (resultado === "Ganaste") {
      puntuacion.Victorias++;
    } else if (resultado === "Perdiste") {
      puntuacion.Derrotas++;
    } else if (resultado === "Empate") {
      puntuacion.Empates++;
    }

    document.querySelector(".js-resultado").innerHTML = resultado;

    document.querySelector(
      ".js-movimientos"
    ).innerHTML = `Tu <img src="img/${movimientoJugador}-emoji.png" class="icono-movimiento">
        <img src="img/${movimientoCPU}-emoji.png"class="icono-movimiento"> Computadora`;

    localStorage.setItem(`puntuacion`, JSON.stringify(puntuacion));

    actualizarPuntuacionElemento();
  }

  function actualizarPuntuacionElemento() {
    document.querySelector(
      ".js-puntuacion"
    ).innerHTML = `Victorias: ${puntuacion.Victorias}, Derrotas: ${puntuacion.Derrotas}, Empates: ${puntuacion.Empates}`;
  }