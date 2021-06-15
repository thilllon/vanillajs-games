(() => {
  const createTwoNumbers = () => [Math.ceil(Math.random() * 9), Math.ceil(Math.random() * 9)];

  const commonLogic = (answer, label, input) => {
    const inputValue = Number(input.value);
    if (isNaN(inputValue)) return;
    input.value = '';
    if (answer.value === inputValue) {
      const [a, b] = createTwoNumbers();
      answer.value = a * b;
      label.textContent = `${a} x ${b} = `;
      label.setAttribute('value', answer.value);
    }
  };

  const createOnClick = (answer, label, input) => () => commonLogic(answer, label, input);

  const createOnKeyDown =
    (answer, label) =>
    ({ key, target: input }) => {
      if (key !== 'Enter') return;
      commonLogic(answer, label, input);
    };

  const contructElements = () => {
    const label = document.getElementById('gugudan__label');
    const input = document.getElementById('gugudan__input');
    const button = document.getElementById('gugudan__button');

    const [a, b] = createTwoNumbers();
    const answer = { value: a * b };
    label.textContent = `${a} x ${b} = `;
    label.setAttribute('value', answer.value);

    input.addEventListener('keydown', createOnKeyDown(answer, label));
    button.addEventListener('click', createOnClick(answer, label, input));
  };

  contructElements();
})();
