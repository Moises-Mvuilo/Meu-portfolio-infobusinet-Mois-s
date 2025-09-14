document
  .getElementById("formulario")
  .addEventListener("submit", function (event) {
    var form = event.target;
    var nome = form.nome.value.trim();
    var email = form.email.value.trim();
    var textarea = textarea.value.trim();

    if (nome === "") {
      alert("O campo Nome é obrigatório.");
      event.preventDefault();
    } else if (!email.includes("@")) {
      alert("Por favor, insira um email válido.");
      event.preventDefault();
    } else if (textarea === "") {
      alert("Partilha o que tu pensas para melhoramos");
      event.preventDefault();
    }
  });
