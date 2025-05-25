document.addEventListener('DOMContentLoaded', () => {
  const inputs = document.querySelectorAll('.code');

  inputs[0].focus();

  inputs.forEach((input, index) => {
    input.addEventListener('input', () => {
      const value = input.value;
      if (value.length > 1) {
        input.value = value.slice(0, 1); // enforce single digit
      }

      if (value && index < inputs.length - 1) {
        inputs[index + 1].focus();
      }
    });

    input.addEventListener('keydown', (e) => {
      if (e.key === 'Backspace') {
        if (input.value === '' && index > 0) {
          inputs[index - 1].focus();
          inputs[index - 1].value = '';
        }
      } else if (e.key >= 0 && e.key <= 9) {
        input.value = ''; // clear before typing a digit
      }
    });
  });
});

