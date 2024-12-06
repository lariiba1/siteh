// Adiciona a funcionalidade ao botão "Começar Jornada"
document.getElementById("comecarJornada").addEventListener("click", function() {
  alert("Sua jornada começou! Vamos explorar os mistérios de 'O Nome da Rosa'!");
  // Aqui você pode redirecionar o usuário para outra página ou seção
  // Exemplo: window.location.href = "#sinopse"; // Redireciona para a seção "Sinopse"
});

// Marca o link ativo na navegação para indicar a seção atual
const navLinks = document.querySelectorAll("nav a");

// Função para atualizar o link ativo conforme o usuário rola a página
window.addEventListener("scroll", () => {
  let currentSection = "";

  navLinks.forEach(link => {
      const section = document.querySelector(link.getAttribute("href"));
      if (section.offsetTop <= window.scrollY + 100 && section.offsetTop + section.offsetHeight > window.scrollY + 100) {
          currentSection = link.getAttribute("href");
      }
  });

  navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === currentSection) {
          link.classList.add("active");
      }
  });
});
