let optionsButtons = document.querySelectorAll(".option-button");
let advancedOptionButton = document.querySelectorAll(".adv-option-button");
let fontPixelSize = document.getElementById("fontPixelSize");
let fontName = document.getElementById("fontName");
let fontSize = document.getElementById("fontSize");
let text_input = document.getElementById("text_input");
let bold = document.getElementById("bold");

let fontList = [
    "Arial",
    "Verdana",
    "Times New Roman",
    "Garamond",
    "Georgia",
    "Courier New",
    "Cursive",
];


//Прост заполняет селекторы значениями не че особенного

GetSelectValue ();
function GetSelectValue () {
    for (var i = 0; i < fontList.length; i++) {
        var opt = document.createElement('option');
        opt.value = fontList[i];
        opt.innerHTML = fontList[i];
        fontName.appendChild(opt);
    }

    for (var i = 1; i < 7; i++) {
        var opt = document.createElement('option');
        opt.value = [i];
        opt.innerHTML = [i];
        fontSize.appendChild(opt);
    }
}




// основная логика пихает из id элемнтов названия в команду и меняет текст, на всех сайтах пишется что способ уже больше не пождерживается но вроде работает
const modifyText = (command, defaultUi, value) => {
    document.execCommand(command, defaultUi, value);
  };
  
  //Для каждой кнопки класса на нажатие впихивает айди в верхнию комманду и уже она изменяет текст
  optionsButtons.forEach((button) => {
    button.addEventListener("click", () => {
      modifyText(button.id, false, null);
    });
  });
  
  //Тоже самое ток с селекторами 
  advancedOptionButton.forEach((button) => {
    button.addEventListener("change", () => {
      modifyText(button.id, false, button.value);
    });
  });









function myScript () {
    console.log(1);
}



function Console_log () {
    console.log(optionsButtons);
}

Console_log ();

let Piska = (a,b,c) => console.log(a*b*c);
Piska(1,2,3);