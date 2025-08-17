 document.querySelectorAll('.dropbtn').forEach(btn => {
    btn.addEventListener('click', function () {
      let menu = this.nextElementSibling;
      menu.classList.toggle("show");
    });
  });

  // Cerrar si hago click fuera
  window.addEventListener('click', function(e) {
    if (!e.target.matches('.dropbtn')) {
      document.querySelectorAll(".dropdown-content").forEach(menu => {
        menu.classList.remove("show");
      });
    }
  });

