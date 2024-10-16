
function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("active");
}

 // Marca o item ativo no menu lateral com base na URL atual
document.querySelectorAll('#sidebar a').forEach(link => {
    if (link.href === window.location.href) {
        link.classList.add('active'); // Adiciona a classe 'active' ao item correspondente
    }
});
