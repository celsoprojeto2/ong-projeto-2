document.addEventListener('DOMContentLoaded', function () {
  const ano = document.getElementById('ano');
  if (ano) ano.textContent = new Date().getFullYear();

  const form = document.querySelector('.form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      let valid = true;
      form.querySelectorAll('[required]').forEach((el) => {
        const error = el.closest('label').querySelector('.form-error');
        if (!el.value.trim()) {
          valid = false;
          if (error) error.textContent = 'Campo obrigatório';
          el.classList.add('invalid');
        } else {
          if (error) error.textContent = '';
          el.classList.remove('invalid');
        }
      });
      if (valid) {
        showToast('Mensagem enviada com sucesso!');
        form.reset();
      }
    });
  }

  function showToast(msg) {
    let t = document.querySelector('.toast');
    if (!t) {
      t = document.createElement('div');
      t.className = 'toast';
      document.body.appendChild(t);
    }
    t.textContent = msg;
    t.classList.add('show');
    setTimeout(() => t.classList.remove('show'), 3500);
  }
});