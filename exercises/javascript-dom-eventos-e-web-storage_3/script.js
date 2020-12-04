function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.
  //Ex1:
  let dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

  function createDaysMonth() {
      let getDaysList = document.querySelector('#days');
      for (let index = 0; index < dezDaysList.length; index += 1) {
          let day = dezDaysList[index];
          let dayItem = document.createElement('li');

          if (day === 24 || day === 31) {
              dayItem.className = 'day holiday';
              dayItem.innerHTML = day;
              getDaysList.appendChild(dayItem);
          } else if (day === 4 || day === 11 || day === 18) {
              dayItem.className = 'day friday';
              dayItem.innerHTML = day;
              getDaysList.appendChild(dayItem);
          } else if (day === 25) {
              dayItem.className = 'day holiday friday';
              dayItem.innerHTML = day;
              getDaysList.appendChild(dayItem);
          } else {
              dayItem.innerHTML = day;
              dayItem.className = 'day';
              getDaysList.appendChild(dayItem);
          }
      }
  }
  createDaysMonth();

  //Ex2:
  function createHolidayButton(buttonName) {
    let buttonContainer = document.querySelector('.buttons-container');
    let newButton = document.createElement('button');
    let newButtonID = 'btn-holiday';
  
    newButton.innerHTML = buttonName;
    newButton.id = newButtonID;
    buttonContainer.appendChild(newButton);
  };
  createHolidayButton('Feriados');


  //Ex3:
  let buttonClick = document.querySelector('#btn-holiday');
  let daysHolidays = document.querySelectorAll('.holiday');
  let color1 = 'rgb(238, 238, 238)';
  let color2 = 'rgb(107, 229, 119)';
  function changeHolidayColor(){
      for (let index = 0; index < daysHolidays.length; index += 1){
        if (daysHolidays[index].style.backgroundColor === color1){
            daysHolidays[index].style.backgroundColor = color2;
        } else {
            daysHolidays[index].style.backgroundColor = color1;
        }
      } 
  }
  buttonClick.addEventListener('click', changeHolidayColor);


  //Ex4:
  function createFridayButton(buttonName2) {
    let sexta = 'Sexta-Feira'
    let buttonFriday = document.querySelector('.buttons-container');
    let newButton2 = document.createElement('button');
    let newButtonId2 = 'btn-friday';
    newButton2.innerHTML = buttonName2;
    newButton2.id = newButtonId2;
    buttonFriday.appendChild(newButton2); 
  }
  createFridayButton('Sexta-Feira');


  //Ex5:
  let sextou = document.querySelector('#btn-friday');
  let days2 = document.querySelectorAll('.friday');
  let palavra = 'SEXTOU!';
  let days22 = [4, 11, 18, 25];
  function modFriday() {   
      for (let index = 0; index < days2.length; index += 1){
          if (days2[index] !== palavra) {
            days2[index].innerText = palavra;
          } else {
            days2[index].innerText = days22[index];
          }
      }
  }
  sextou.addEventListener('click', modFriday);
