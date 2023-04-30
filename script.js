const form = document.getElementById("chat-form");
const input = document.getElementById("chat-input");
const messages = document.getElementById("chat-messages");

form.addEventListener("submit", function(event) {
	event.preventDefault();

	// Cria um novo elemento de mensagem
	const message = document.createElement("div");
	message.className = "message";
	message.innerHTML = input.value;
	messages.appendChild(message);

	// Limpa o campo de entrada de mensagem
	input.value = "";
});

// Função para rolar a tela para baixo quando uma nova mensagem é adicionada
function scrollDown() {
	messages.scrollTop = messages.scrollHeight;
}

// Chama a função de rolagem para baixo sempre que uma nova mensagem é adicionada
messages.addEventListener("DOMNodeInserted", scrollDown);

