//MENU MOBILE

const btnMobile = document.getElementById("btn-mobile");

function toggleMenu(event) {
  if (event.type === "touchstart") event.preventDefault();
  const nav = document.getElementById("nav");
  nav.classList.toggle("active");
  const active = nav.classList.contains("active");
  event.currentTarget.setAttribute("aria-expended", "active");
}

btnMobile.addEventListener("click", toggleMenu);
btnMobile.addEventListener("touchstart", toggleMenu);

//VALIDAÇÃO DE FORMULÁRIO HOMEPAGE

document.getElementById("formulario").addEventListener('submit', function (event) {
    var form = event.target;
    var nome = form.nome.value.trim();
    var email = form.email.value.trim();
    var textarea = message.value.trim();

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



