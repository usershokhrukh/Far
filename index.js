const elInput = document.querySelector(".main__input");
const elForm = document.querySelector(".main__form");
const elSpan = document.querySelectorAll(".main__span");
const elIcons = document.querySelectorAll(".main__icons");
const elMessage = document.querySelector(".message");
const elSpeed = document.querySelectorAll(".main__speed");
const elChangeSHow = document.querySelector(".main__change-icon");
const elChangeBox = document.querySelector(".main__change-box");
const elChanger = document.querySelector(".main__changer");
const elChangerInput = document.querySelectorAll(".main__changer-input");
const elChangerSet = document.querySelector(".main__changer-set");
let showChange = false;
let speedPerson = 3.6;
let speedBike = 20.1;
let speedCar = 70;
let speedPlane = 800;
let answer = 0;
let right = false;
//submit

elForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputValue = elInput.value.trim();
  if (!inputValue) {
    elMessage.textContent = `Masofa kiriting!`;
    elMessage.style.cssText = `
        animation-name: warning;
        animation-duration: 0.3s;
        animation-fill-mode: forwards;
        color: red;
      `;
    elInput.style.cssText = `
        border: 1px solid red;
      `;
  } else if (inputValue.includes("e")) {
    elMessage.textContent = `Iltimos 'e' kiritmang!`;
    elMessage.style.cssText = `
      color: red;
    `;
    elInput.style.cssText = `
      border:1px solid red;
    `;
  } else {
    answer = inputValue;
    right = true;
    elMessage.textContent = `Masofa: ${inputValue}km`;
    elInput.value = "";
    elMessage.style.cssText = `
      color: white;
    `;
    elInput.style.cssText = `
      border: 1px solid rgb(23, 141, 195);
    `;
  }

  if (right) {
    for (var i = 0; i < 4; i++) {
      switch (i) {
        case 0: {
          elSpan[i].textContent = `${(answer / speedPerson).toFixed(2)}`;
          elSpeed[i].textContent = `${speedPerson} km/h`;
          break;
          6;
        }
        case 1: {
          elSpan[i].textContent = `${(answer / speedBike).toFixed(2)}`;
          elSpeed[i].textContent = `${speedBike} km/h`;
          break;
        }
        case 2: {
          elSpan[i].textContent = `${(answer / speedCar).toFixed(2)}`;
          elSpeed[i].textContent = `${speedCar} km/h`;
          break;
        }
        case 3: {
          elSpan[i].textContent = `${(answer / speedPlane).toFixed(2)}`;
          elSpeed[i].textContent = `${speedPlane} km/h`;
          break;
        }
      }
    }
  }
  change();
});

// changer
function change() {
  if (right) {
    elChangeBox.style.cssText = `
    animation-name: show;
    animation-duration: 3s;
    animation-iteration-count: 2;
  `;
    elChangeSHow.addEventListener("click", () => {
      if (!showChange) {
        elChanger.style.cssText = `
        display: flex;
        `;
        showChange = true;
      } else {
        elChanger.style.cssText = `
        display: none;
        `;
        showChange = false;
      }
    });

    elChangerSet.addEventListener("click", ()=> {
      console.log("1");
      for(var i = 0; i < 4; i++) {
        if (elChangerInput[i].value.trim()) {
          switch(i) {
            case 0: {
              speedPerson = elChangerInput[i].value;
              break;
            }
            case 1: {
              speedBike = elChangerInput[i].value;
              break;
            }
            case 2: {
              speedCar = elChangerInput[i].value;
              break;
            }
            case 3: {
              speedPlane = elChangerInput[i].value;
              break;
            }
          }
        }
      }

      for (var i = 0; i < 4; i++) {
      switch (i) {
        case 0: {
          elSpan[i].textContent = `${(answer / speedPerson).toFixed(2)}`;
          elSpeed[i].textContent = `${speedPerson} km/h`;
          break;
          6;
        }
        case 1: {
          elSpan[i].textContent = `${(answer / speedBike).toFixed(2)}`;
          elSpeed[i].textContent = `${speedBike} km/h`;
          break;
        }
        case 2: {
          elSpan[i].textContent = `${(answer / speedCar).toFixed(2)}`;
          elSpeed[i].textContent = `${speedCar} km/h`;
          break;
        }
        case 3: {
          elSpan[i].textContent = `${(answer / speedPlane).toFixed(2)}`;
          elSpeed[i].textContent = `${speedPlane} km/h`;
          break;
        }
      }
    }
    });
  }
}
