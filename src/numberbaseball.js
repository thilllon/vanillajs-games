(() => {
  const idPrefix = 'numberbaseball';

  const initialize = (digits) => {
    const max = 10 ** digits;
    const min = 10 ** (digits - 1);
    return [...String(Math.floor(Math.random() * (max - min)) + min)];
  };

  const commonLogic = (ansArr, label, input) => {
    const inputValue = input.value;
    const inputArr = [...String(inputValue)];
    if (inputArr.length !== ansArr.length) return;
    input.value = '';
    const result = ansArr.reduce(
      (prv, num, idx) => {
        const newPrv = { ...prv };
        if (num === inputArr[idx]) {
          newPrv.strike++;
        } else if (inputArr.includes(num)) {
          newPrv.ball++;
        }
        return newPrv;
      },
      { strike: 0, ball: 0 }
    );

    if (result.strike === ansArr.length) {
      label.textContent = `${ansArr.join('')} Homerun!`;
    } else {
      label.textContent = `${ansArr.join('')} ${result.strike} strike, ${result.ball} ball`;
    }
  };
  const createOnKeyDown = (ansArr, label) => (ev) => {
    if (ev.key !== 'Enter') return;
    commonLogic(ansArr, label, ev.target);
  };
  const createOnClick = (ansArr, label, input) => () => {
    commonLogic(ansArr, label, input);
  };

  const contructElements = () => {
    const digits = 4;

    const label = document.getElementById(`${idPrefix}__label`);
    const input = document.getElementById(`${idPrefix}__input`);
    const button = document.getElementById('numberbaseball__button');
    const ansArr = initialize(digits);
    label.textContent = `${ansArr.join('')} ${digits} 자리`;

    input.setAttribute('max', 10 ** digits - 1);
    input.setAttribute('min', 10 ** (digits - 1));
    input.addEventListener('keydown', createOnKeyDown(ansArr, label));
    button.addEventListener('click', createOnClick(ansArr, label, input));
  };
  // ******************************
  // ******************************

  contructElements();
})();
