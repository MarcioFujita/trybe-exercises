  function createBackgroundButton(buttonName) {
    let botao = document.querySelector('.buttons-container');
    let newButton = document.createElement('button');
    let newButtonID = 'btn-CorDeFundo';
  
    newButton.innerHTML = buttonName;
    newButton.id = newButtonID;
    botao.appendChild(newButton);
  };
  createBackgroundButton('Cor de Fundo');

  function createBackgroundButton(buttonName) {
    let botao = document.querySelector('.buttons-container');
    let newButton = document.createElement('button');
    let newButtonID = 'btn-CorDoTexto';
  
    newButton.innerHTML = buttonName;
    newButton.id = newButtonID;
    botao.appendChild(newButton);
  };
  createBackgroundButton('Cor do Texto');
  
  function createBackgroundButton(buttonName) {
    let botao = document.querySelector('.buttons-container');
    let newButton = document.createElement('button');
    let newButtonID = 'btn-TamanhoDaFonte';
  
    newButton.innerHTML = buttonName;
    newButton.id = newButtonID;
    botao.appendChild(newButton);
  };
  createBackgroundButton('Tamanho da Fonte');

  function createBackgroundButton(buttonName) {
    let botao = document.querySelector('.buttons-container');
    let newButton = document.createElement('button');
    let newButtonID = 'btn-EspacoEntreLinhas';
  
    newButton.innerHTML = buttonName;
    newButton.id = newButtonID;
    botao.appendChild(newButton);
  };
  createBackgroundButton('Espaço entre Linhas');

  function createBackgroundButton(buttonName) {
    let botao = document.querySelector('.buttons-container');
    let newButton = document.createElement('button');
    let newButtonID = 'btn-TipoFonte';
  
    newButton.innerHTML = buttonName;
    newButton.id = newButtonID;
    botao.appendChild(newButton);
  };
  createBackgroundButton('Tipo da Fonte');
