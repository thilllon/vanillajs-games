// ******************************
// 끝말잇기
// ******************************

(() => {
  const initialWord = '자동차';
  const createOnKeyDown = (word, label) => (ev) => {
    if (ev.key !== 'Enter') return;
    const inputValue = ev.target.value;
    ev.target.value = ''; // cleanup input
    // right input
    if (inputValue && inputValue.length > 1 && word[word.length - 1] === inputValue[0]) {
      word = inputValue;
      label.textContent = word;
    }
  };

  const contructElements = () => {
    const label = document.getElementById('wordrelay__label');
    const input = document.getElementById('wordrelay__input');

    const word = initialWord;
    label.textContent = word;
    input.addEventListener('keydown', createOnKeyDown(word, label));
  };

  const contructElementsUsingPrompt = () => {
    let count = 0;
    let word = initialWord;

    while (true) {
      const input = prompt(`count:${count}\n${word}`); // empty string or null
      if (input === null) {
        break; // cancel
      } else if (input.length === 1 && input[0] === word.slice(-1)[0]) {
        continue; // right but one syllable
      } else if (input[0] === word.slice(-1)[0]) {
        count++; // right input
        word = input;
      } else {
        alert(`Wrong! count: ${count}`);
        break;
      }
    }
  };

  contructElements();
  // contructElementsUsingPrompt();
})();
