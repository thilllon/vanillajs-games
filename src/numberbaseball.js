(() => {
  const idPrefix = 'numberbaseball';
  let digits;
  let ansArr;
  const initialize = (inputdigits = 4) => {
    digits = inputdigits;
    const ans = Math.floor(Math.random() * 10 ** digits) + 1;
    ansArr = [...String(ans)];
  };

  const onKeyDown = (label) => (ev) => {
    if (ev.key !== 'Enter') return;
    const inputValue = ev.target.value;
    const inputArr = [...String(inputValue)];
    if (inputArr.length !== 4) return;
    ev.target.value = '';
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

    if (result.strike === digits) {
      label.textContent = `Homerun!`;
    } else {
      label.textContent = `${result.strike} strike, ${result.ball} ball`;
    }
  };
  const onClick = (label) => (ev) => {
    //
  };
  const onClickNew = (ev) => {
    initialize();
  };

  const contructElements = () => {
    const label = document.getElementById(`${idPrefix}__label`);
    const input = document.getElementById(`${idPrefix}__input`);
    label.textContent = `${digits}자리` + ans;
    // input.setAttribute('value', digits);
    input.setAttribute('max', '9999');
    input.setAttribute('min', 1000);
    input.addEventListener('keydown', onKeyDown(label));
    input.addEventListener('click', onClick(label));
    document.getElementById('numberbaseball__new').addEventListener('click', onClickNew);
  };
  // ******************************
  // ******************************

  contructElements();
})();
