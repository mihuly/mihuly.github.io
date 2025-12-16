console.log('mistyland-patch.js loaded');

(function () {
  function patchPersonalData() {
    const unit = document.getElementById('personalDataUnit');
    if (!unit) return;

    const textBlock = unit.querySelector('div span');
    if (!textBlock) return;

    textBlock.innerHTML = `
      Ставя отметку, я принимаю
      <a href="http://mistyland.ru/rules" target="_blank">Правила проживания</a>
      и
      <a href="http://mistyland.ru/agreement" target="_blank">Пользовательское соглашение</a>.
    `;
  }

  // ждём, пока виджет реально построит DOM
  const timer = setInterval(() => {
    if (document.getElementById('personalDataUnit')) {
      patchPersonalData();
      clearInterval(timer);
    }
  }, 200);
})();
