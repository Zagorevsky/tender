const usdCbRf = document.querySelector('.header__cbr-usd');
const buttonSignin = document.querySelector('.header__button');
const popupSignin = document.querySelector('.popup__signin');
const buttonCancelPopup = popupSignin.querySelector('.popup__close');
const nameUser = document.querySelector('.header__name-user');
const nameUserInput = document.querySelector('.popup__input-name');


getUsdCbRf = () => {
  fetch('https://iss.moex.com/iss/statistics/engines/currency/markets/selt/rates.json?iss.meta=off')
    .then((response) => {
      if (!response.ok) {
        throw new Error('HTTP error, status = ' + response.status);
      }
      return response.json();
    })
    .then((json) => {
      usdCbRf.textContent = json.cbrf.data[0][json.cbrf.columns.indexOf('CBRF_USD_LAST')];
    })
    .catch((error) => {
      console.error(error);
    });
}

function setEventListener() {
  buttonSignin.addEventListener('click', openPopupSignin);
  buttonCancelPopup.addEventListener('click', closePopupSignin);
  popupSignin.querySelector('.popup__form').addEventListener('submit', sendFormSignin);
}

function openPopup (namePopup) {
  namePopup.querySelector('.popup__form').reset();
  namePopup.classList.add('popup_opened');
}

function closePopup (namePopup) {
  namePopup.classList.remove('popup_opened');
}

function openPopupSignin() {
  openPopup(popupSignin)
}

function closePopupSignin() {
  closePopup(popupSignin)
}

function sendFormSignin(event) {
  event.preventDefault();
  nameUser.textContent = nameUserInput.value;
  buttonSignin.classList.add('header__button_remove');
  closePopupSignin()
}

getUsdCbRf();
setEventListener();
