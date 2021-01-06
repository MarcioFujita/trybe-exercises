window.onload = function() {
      let backGr = localStorage.getItem('backGround');
      let textColr = localStorage.getItem('textColor');
      let textSze = localStorage.getItem('textSize');
      let lineSpc = localStorage.getItem('lineSpacing');
      let fontStyl = localStorage.getItem('fontStyle');
      
      if (backGr === 'dark') {
        let bodyStyl = document.querySelector('body');
        let containerStyl = document.querySelector('.buttons-container');
        let colr2 = 'rgb(61, 61, 61)';
        bodyStyl.style.backgroundColor = colr2;
        containerStyl.style.backgroundColor = colr2;
      }

      if (textColr === 'white') {
        let txtColor = document.querySelectorAll('.text');
        let colr3 = 'rgb(238, 238, 238)';
        for (index = 0; index < txtColor.length; index += 1){
            txtColor[index].style.color = colr3;
        }
      }

      if (textSze === 'big') {
        let textSiz = document.querySelectorAll('.text');
        let siz2 = '20px';
        for (index = 0; index < textSiz.length; index += 1){
            textSiz[index].style.fontSize = siz2;
        }
      }

      if (lineSpc === 'big') {
        let lineSpac = document.querySelectorAll('.text');
        let size4 = '24px';
        for (index = 0; index < lineSpac.length; index += 1){
                lineSpac[index].style.lineHeight = size4;
        }
      }

      if (fontStyl === 'Arial') {
        let fntKind = document.querySelectorAll('.text');
        let fnt2 = 'Arial';
        for (index = 0; index < fntKind.length; index += 1){
            fntKind[index].style.fontFamily = fnt2;
        }
      }
  
  
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
    let botao4 = document.querySelector('.buttons-container');
    let newButton4 = document.createElement('button');
    let newButtonID4 = 'btn-EspacoEntreLinhas';
  
    newButton4.innerHTML = buttonName4;
    newButton4.id = newButtonID4;
    botao4.appendChild(newButton4);
  };
  createSpaceButton('Espaço entre Linhas');

  function createTypeButton(buttonName5) {
    let botao5 = document.querySelector('.buttons-container');
    let newButton5 = document.createElement('button');
    let newButtonID5 = 'btn-TipoFonte';
  
    newButton5.innerHTML = buttonName5;
    newButton5.id = newButtonID5;
    botao5.appendChild(newButton5);
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
        localStorage.setItem('backGround', 'dark');
      } else {
        bodyStyle.style.backgroundColor = color1;
        containerStyle.style.backgroundColor = color1;
        localStorage.setItem('backGround', 'white');
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
          localStorage.setItem('textColor', 'white');
        } else {
          textColor[index].style.color = color4;
          localStorage.setItem('textColor', 'dark');
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
          localStorage.setItem('textSize', 'big');
        } else {
          textColor[index].style.fontSize = size1;
          localStorage.setItem('textSize', 'small');
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
            localStorage.setItem('lineSpacing', 'big');
        } else {
            lineSpace[index].style.lineHeight = size3;
            localStorage.setItem('lineSpacing', 'small');
        }
      }
  }
  buttonLineSpace.addEventListener('click', lineSpaceChange);

  let buttonKindOfFont = document.querySelector('#btn-TipoFonte');
  let fontKind = document.querySelectorAll('.text');
  let font1 = 'Verdana';
  let font2 = 'Arial';
  function fontChange() {
      for (index = 0; index < fontKind.length; index += 1){
        if (fontKind[index].style.fontFamily === font1){
            fontKind[index].style.fontFamily = font2;
            localStorage.setItem('fontStyle', 'Arial');
        } else {
            fontKind[index].style.fontFamily = font1;
            localStorage.setItem('fontStyle', 'Verdana');
        }
      }
  }
  buttonKindOfFont.addEventListener('click', fontChange);
}
