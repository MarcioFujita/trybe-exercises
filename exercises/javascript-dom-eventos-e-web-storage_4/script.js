  function createBackgroundButton(buttonName) {
    let botao = document.querySelector('.buttons-container');
    let newButton = document.createElement('button');
    let newButtonID = 'btn-CorDeFundo';
  
    newButton.innerHTML = buttonName;
    newButton.id = newButtonID;
    botao.appendChild(newButton);
  };
  createBackgroundButton('Cor de Fundo');

  function createTextButton(buttonName2) {
    let botao2 = document.querySelector('.buttons-container');
    let newButton2 = document.createElement('button');
    let newButtonID2 = 'btn-CorDoTexto';
  
    newButton2.innerHTML = buttonName2;
    newButton2.id = newButtonID2;
    botao2.appendChild(newButton2);
  };
  createTextButton('Cor do Texto');
  
  function createTextSizeButton(buttonName3) {
    let botao3 = document.querySelector('.buttons-container');
    let newButton3 = document.createElement('button');
    let newButtonID3 = 'btn-TamanhoDaFonte';
  
    newButton3.innerHTML = buttonName3;
    newButton3.id = newButtonID3;
    botao3.appendChild(newButton3);
  };
  createTextSizeButton('Tamanho da Fonte');

  function createSpaceButton(buttonName4) {
    let botao = document.querySelector('.buttons-container');
    let newButton = document.createElement('button');
    let newButtonID4 = 'btn-EspacoEntreLinhas';
  
    newButton.innerHTML = buttonName4;
    newButton.id = newButtonID4;
    botao.appendChild(newButton);
  };
  createSpaceButton('Espaço entre Linhas');

  function createTypeButton(buttonName5) {
    let botao = document.querySelector('.buttons-container');
    let newButton = document.createElement('button');
    let newButtonID5 = 'btn-TipoFonte';
  
    newButton.innerHTML = buttonName5;
    newButton.id = newButtonID5;
    botao.appendChild(newButton);
  };
  createTypeButton('Tipo da Fonte');

  let buttonCor = document.querySelector('#btn-CorDeFundo');
  let bodyStyle = document.querySelector('body');
  let containerStyle = document.querySelector('.buttons-container');
  let color1 = 'rgb(238, 238, 238)';
  let color2 = 'rgb(61, 61, 61)';
  function changeBackground() {
      if (bodyStyle.style.backgroundColor === color1){
        bodyStyle.style.backgroundColor = color2;
        containerStyle.style.backgroundColor = color2;
      } else {
        bodyStyle.style.backgroundColor = color1;
        containerStyle.style.backgroundColor = color1;
      }
  }
  buttonCor.addEventListener('click', changeBackground);
  
  let textColor = document.querySelectorAll('.text');
  let buttonColorText = document.querySelector('#btn-CorDoTexto');
  let color3 = 'rgb(238, 238, 238)';
  let color4 = 'rgb(0, 0, 0)';
  function textColorChange(){
      for (index = 0; index < textColor.length; index += 1){
        if (textColor[index].style.color === color4){
          textColor[index].style.color = color3;
        } else {
          textColor[index].style.color = color4;
        }
      }
  }
  buttonColorText.addEventListener('click', textColorChange);

  let buttonFontSize = document.querySelector('#btn-TamanhoDaFonte');
  let textSize = document.querySelectorAll('.text');
  let size1 = '16px';
  let size2 = '20px';
  function fontSizeChange() {
      for (index = 0; index < textSize.length; index += 1){
        if (textSize[index].style.fontSize === size1){
          textColor[index].style.fontSize = size2;
        } else {
          textColor[index].style.fontSize = size1;
        }
      }
  }
  buttonFontSize.addEventListener('click', fontSizeChange);

  let buttonLineSpace = document.querySelector('#btn-EspacoEntreLinhas');
  let lineSpace = document.querySelectorAll('.text');
  let size3 = '18px';
  let size4 = '24px';
  function lineSpaceChange() {
      for (index = 0; index < lineSpace.length; index += 1){
        if (lineSpace[index].style.lineHeight === size3){
            lineSpace[index].style.lineHeight = size4;
        } else {
            lineSpace[index].style.lineHeight = size3;
        }
      }
  }
  buttonLineSpace.addEventListener('click', lineSpaceChange);