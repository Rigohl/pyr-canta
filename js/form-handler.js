document.addEventListener('DOMContentLoaded', () => {
  ['giftSongForm', 'corridoForm'].forEach(formId => {
    const form = document.getElementById(formId);

    if (form) {
      form.addEventListener('submit', function (e) {
        let valid = true;

        // Validar todos los campos obligatorios
        this.querySelectorAll('input[required], textarea[required], select[required]').forEach(el => {
          if (!el.value.trim()) {
            el.classList.add('input-error');
            valid = false;
          } else {
            el.classList.remove('input-error');
          }
        });

        // Validar aceptación de TyC
        const terms = this.querySelector('input[type="checkbox"][required]');
        if (terms && !terms.checked) {
          alert("Debes aceptar los Términos y Condiciones.");
          valid = false;
        }

        // Detener envío si hay errores
        if (!valid) {
          e.preventDefault();
        }
      });
    }
  });
});
