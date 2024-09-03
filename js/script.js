// Mensagem de boas-vindas ao carregar a página
window.onload = function() {
    alert("Bem-vindo ao meu portfólio pessoal!");
};

// Efeito de rolagem suave ao clicar nos links de navegação
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        } else {
            window.location.href = this.getAttribute('href');
        }
    });
});
