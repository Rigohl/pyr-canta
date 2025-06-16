document.querySelectorAll('.paquete').forEach(pkg => {
  pkg.addEventListener('click', () => {
    document.querySelectorAll('.paquete').forEach(p => p.classList.remove('activo'));
    pkg.classList.add('activo');
  });
});
