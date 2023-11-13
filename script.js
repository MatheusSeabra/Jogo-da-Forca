const palavras = ["BANANA", " CAJU ", "MANGA", "MORANGO", "KIWI", "TAMARINDO", "VIAJEM", "PARALELEPIPEDO", "FRUTA", "AMOR", "PYTHON", "FEIJOADA"];
var desenhaLosangulo = "";
var quantidadeErros = 0;
var acertos = 0;
var tentativas = " ";
palavraSecreta = palavras[Math.floor(Math.random() * 12)];

var c = document.getElementById("canvas");
var ctx = c.getContext("2d");


desenhaPoste();
desenhaBarraSuperior();
desenhaApoio();
desenhaTracos();

window.onkeypress = teclaPrecionada;

function teclaPrecionada() {

	if (!tentativas.includes(event.key) && palavraSecreta.includes((event.key).toUpperCase())) {

		adicionaTentativa();

		for (var i = 0; i < palavraSecreta.length; i++) {
			if (palavraSecreta[i] == (event.key).toUpperCase()) {

				ctx.font = " 35px Arial";
				ctx.fillText((event.key).toUpperCase(), 20 + (35 * i), 200);
				acertos++;
			}

		}

	} else {
		adicionaTentativa();
		quantidadeErros++;
		desenhaBoneco(quantidadeErros);

	}
	verificaFimJogo();
}

function adicionaTentativa() {

	if (!tentativas.includes(event.key)) {
		tentativas = tentativas + event.key;
		ctx.font = "30px Arial";
		ctx.fillText("Tentativas:" + tentativas.toUpperCase(), 20, 280);

	}
}

function verificaFimJogo() {
	if (quantidadeErros >= 6) {
		ctx.font = "20px Arial";
		ctx.fillText(" Perdeu cabaço a palavra certa era: " + palavraSecreta, 200, 100);
		window.onkeypress = null;
		return;
	}


	if (acertos == palavraSecreta.length) {

		ctx.font = "20px Arial";
		ctx.fillText(" Parabens amiguinho você conseguiu terminar esse jogo dificil merito seu <3 ", 200, 100);
		window.onkeypress = null;
		return;

	}
}
function desenhaPoste() {

	ctx.moveTo(20, 10);
	ctx.lineTo(20, 200);
	ctx.stroke();



}

function desenhaBarraSuperior() {

	ctx.moveTo(20, 10);
	ctx.lineTo(80, 10);
	ctx.stroke();

}

function desenhaApoio() {

	ctx.moveTo(60, 10);
	ctx.lineTo(60, 30);
	ctx.stroke();

}

function desenhaTracos() {
	for (var i = 0; i < palavraSecreta.length; i++) {
		ctx.moveTo(20 + (35 * i), 200);
		ctx.lineTo(50 + (35 * i), 200);
		ctx.stroke();
	}
}

function desenhaBoneco(quantidadeErros) {
	switch (quantidadeErros) {

		case 1:
			desenhaCabeca();
			break;
		case 2:
			desenhaTronco();
			break;
		case 3:
			desenhaBracoEsquerdo();
			break;
		case 4:
			desenhaBracoDireito();
			break;
		case 5:
			desenhaPernaEsquerda();
			break;
		case 6:
			desenhaPernaDireita();
			break;
	}

}
function desenhaCabeca() {
	ctx.beginPath();
	ctx.arc(60, 40, 10, 0, 2 * Math.PI);
	ctx.stroke();

}

function desenhaTronco() {
	ctx.moveTo(60, 50);
	ctx.lineTo(60, 80);
	ctx.stroke();

}

function desenhaBracoEsquerdo() {
	ctx.moveTo(60, 60);
	ctx.lineTo(50, 70);
	ctx.stroke();

}

function desenhaBracoDireito() {
	ctx.moveTo(60, 60);
	ctx.lineTo(70, 70);
	ctx.stroke();

}

function desenhaPernaEsquerda() {
	ctx.moveTo(60, 80);
	ctx.lineTo(50, 90);
	ctx.stroke();

}

function desenhaPernaDireita() {
	ctx.moveTo(60, 80);
	ctx.lineTo(70, 90);
	ctx.stroke();

}

function resetCanvas() {
	location.reload();
}