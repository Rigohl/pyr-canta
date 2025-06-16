document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');
  form.addEventListener('submit', function(e) {
    const nombre = form.querySelector('[name="nombre"]');
    if (!nombre.value.trim()) {
      alert('El nombre es obligatorio');
      e.preventDefault();
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    const inputs = form.querySelectorAll("input[required], textarea[required]");
    let valid = true;

    inputs.forEach(input => {
      if (!input.value.trim()) {
        input.classList.add("error");
        valid = false;
      } else {
        input.classList.remove("error");
      }
    });

    if (!valid) {
      e.preventDefault();
      alert("Por favor completa todos los campos requeridos.");
    }
  });
});
