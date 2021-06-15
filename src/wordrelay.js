// ******************************
// 끝말잇기
// ******************************

(() => {
  const createOnKeyDown = (word, label) => (ev) => {
    if (ev.key !== 'Enter') return;
    const inputValue = ev.target.value;
    ev.target.value = ''; // 초기화
    if (inputValue && inputValue.length > 1 && word[word.length - 1] === inputValue[0]) {
      // 올바른 입력
      word = inputValue;
      label.textContent = word;
    }
  };

  const contructElements = () => {
    const label = document.getElementById('wordrelay__label');
    const input = document.getElementById('wordrelay__input');

    const word = '바나나';
    label.textContent = word;
    input.addEventListener('keydown', createOnKeyDown(word, label));
  };

  const usingPrompt = () => {
    let count = 0;
    let word = '바나나';

    while (true) {
      const input = prompt(`count:${count}\n${word}`); // null, ''
      if (input === null) {
        // 취소
        break;
      } else if (input.length === 1 && input[0] === word.slice(-1)[0]) {
        // 한글자 입력 + 올바른 끝말
        continue;
      } else if (input[0] === word.slice(-1)[0]) {
        // 올바른 끝말
        count++;
        word = input;
      } else {
        alert(`땡! count: ${count}`);
        break;
      }
    }
  };

  // ******************************
  // ******************************

  contructElements();
  // usingPrompt();
})();
