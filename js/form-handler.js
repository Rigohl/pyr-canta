form.addEventListener('submit', function (e) {
  let valid = true;

  this.querySelectorAll('input[required], textarea[required], select[required]').forEach(el => {
    if (!el.value.trim()) {
      el.classList.add('input-error');
      valid = false;
    } else {
      el.classList.remove('input-error');
    }
  });

  const terms = this.querySelector('input[type="checkbox"][required]');
  if (!terms.checked) {
    alert("Debes aceptar los Términos y Condiciones");
    valid = false;
  }

  if (!valid) {
    e.preventDefault(); // cancela el envío si algo falla
  }
});
