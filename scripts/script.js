
// ПЕРЕМЕННЫЕ

// Поп-ап с профилем
const editButton = document.querySelector(".profile__edit-button");
const editPopUp = document.querySelector(".popup_profile");
const profileClosePopUp = editPopUp.querySelector(".popup__close");
const nameInput = editPopUp.querySelector(".popup__input_type_name");
const jobInput = editPopUp.querySelector(".popup__input_type_prof");
const editPopUpForm =  editPopUp.querySelector(".popup__form");
const profileName = document.querySelector(".profile__name");
const profileProf = document.querySelector(".profile__profession");

// Поп-ап с большим фото места
const bigImgPopUp = document.querySelector('.popup_bigimg-popup');
const bigImgPopUpclose = bigImgPopUp.querySelector('.popup__close');
const bigImg = document.querySelector('.popup__bigimg');
const bigImgCaption = document.querySelector('.popup__bigimg-caption');

// Поп-ап с местом
const placePopUp = document.querySelector(".popup_place");
const placeButton = document.querySelector(".profile__add-button");
const closePopUpPlace = placePopUp.querySelector(".popup__close");
const placeInput = placePopUp.querySelector(".popup__input_type_place-name");
const linkInput = placePopUp.querySelector(".popup__input_type_link-place");
const addPlacePopUpForm = placePopUp.querySelector(".popup__form");
const addNewCard = placePopUp.querySelector(".popup__button");

// Темплейт с карточками места
const cardTemplate = document.getElementById('place-card');
const cardContainer = document.querySelector(".feed");

// Обработка крестиков
const closeButtons = document.querySelectorAll('.popup__close');

// Массив данных
const initialCards = [
    {
      place: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      place: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      place: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      place: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      place: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      place: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ]; 



// ОБЩИЕ ФУНКЦИИ

// Открытие поп-апов
function openPopup(popup) {
  popup.classList.add('popup_opened');
}

// Закрытие поп-апов
function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

// Обработка крестиков
closeButtons.forEach((button) => {
  const popup = button.closest('.popup');
  button.addEventListener('click', () => closePopup(popup));
});


// ИЗМЕНЕНИЕ ИНФЫ ПРОФИЛЯ

//Открытие
editButton.addEventListener('click', () => { 
  openPopup(editPopUp);
  nameInput.value = profileName.textContent;
  jobInput.value = profileProf.textContent;
});

//Отправление инфы по сабмиту
function handleProfileFormSubmit (evt) {
  evt.preventDefault();

  profileName.textContent = nameInput.value;
  profileProf.textContent = jobInput.value;

  closePopup(editPopUp);
};

editPopUpForm.addEventListener('submit', handleProfileFormSubmit); 


// ДОБАВЛЕНИЕ МЕСТА

// Открыть поп-ап
placeButton.addEventListener('click', () => { 
  openPopup(placePopUp);
});

// Добавление контента в темплейт
const createCardElement = (cardData) => {
    
    const cardElement = cardTemplate.content.querySelector('.feed__element').cloneNode(true);
    const cardImg = cardElement.querySelector('.feed__img');
    const cardTitle = cardElement.querySelector('.feed__header');
    const placeDeleteButton = cardElement.querySelector('.feed__icon-delete');
    const placeLikeButton = cardElement.querySelector('.feed__icon-like');

    // наполнение карточки

    cardImg.src = cardData.link;
    cardImg.alt = cardData.place;
    cardTitle.textContent = cardData.place;

    // кнопки лайк, удалить

    const handleDelete = () => {
        cardElement.remove();
    };

    const handleLike = () => {
        placeLikeButton.classList.toggle('feed__icon-like_active');
    };

    placeLikeButton.addEventListener('click', handleLike);
    placeDeleteButton.addEventListener('click', handleDelete);

    // поп-ап

    cardImg.addEventListener('click', () => {
        openPopup(bigImgPopUp);
        bigImg.src = cardImg.src;
        bigImg.alt = cardTitle.textContent;
        bigImgCaption.textContent = cardTitle.textContent;

    });

    return cardElement;
};

initialCards.forEach((card) => {
    const element = createCardElement(card);
    cardContainer.prepend(element);
});


// Добавление новой карточки в сетку

function handleCardAdding (evt) {
    evt.preventDefault();
    
    const manuallCardData = {
        place: placeInput.value,
        link: linkInput.value
    };
    
    cardContainer.prepend(createCardElement(manuallCardData));
    closePopup(placePopUp);
    addPlacePopUpForm.reset();
};

addPlacePopUpForm.addEventListener('submit', handleCardAdding); 