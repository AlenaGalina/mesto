//Поп-ап с профайлом

const editButton = document.querySelector(".profile__edit-button");
const editPopUp = document.querySelector(".popup_profile");
const closePopUp = editPopUp.querySelector(".popup__close");
let nameInput = editPopUp.querySelector(".popup__input_type_name");
let jobInput = editPopUp.querySelector(".popup__input_type_prof");
const editPopUpForm =  editPopUp.querySelector(".popup__form");
let profileName = document.querySelector(".profile__name");
let profileProf = document.querySelector(".profile__profession");

editButton.addEventListener('click', () => { 
    editPopUp.classList.add('popup_opened');
    nameInput.value = profileName.textContent;
    jobInput.value = profileProf.textContent;
});

closePopUp.addEventListener('click', () => {
    editPopUp.classList.remove('popup_opened');
});

function handleFormSubmit (evt) {
    evt.preventDefault();

    profileName.textContent = nameInput.value;
    profileProf.textContent = jobInput.value;

    editPopUp.classList.remove('popup_opened');
};

editPopUpForm.addEventListener('submit', handleFormSubmit); 


//Поп-ап с добавлением карточки места

const placePopUp = document.querySelector(".popup_place");
const placeButton = document.querySelector(".profile__add-button");
const closePopUpPlace = placePopUp.querySelector(".popup__close");
let placeInput = placePopUp.querySelector(".popup__input_type_place-name");
let linkInput = placePopUp.querySelector(".popup__input_type_link-place");
const addPlacePopUpForm = placePopUp.querySelector(".popup__form");
const addNewCard = placePopUp.querySelector(".popup__button");

placeButton.addEventListener('click', () => { 
    placePopUp.classList.add('popup_opened');
});

closePopUpPlace.addEventListener('click', () => {
    placePopUp.classList.remove('popup_opened');
});


// Темплейт с карточками места

const cardTemplate = document.getElementById('place-card');
const cardContainer = document.querySelector(".feed");


// массив данных

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

// Добавление контента в темплейт

const createCardElement = (cardData) => {
    
    const cardElement = cardTemplate.content.querySelector('.feed__element').cloneNode(true);
    const cardImg = cardElement.querySelector('.feed__img');
    const cardTitle = cardElement.querySelector('.feed__header');
    const placeDeleteButton = cardElement.querySelector('.feed__icon-delete');
    const placeLikeButton = cardElement.querySelector('.feed__icon-like');
    const bigImgPopUp = document.querySelector('.popup_bigimg-popup');
    const bigImgPopUpclose = bigImgPopUp.querySelector('.popup__close');
    const bigImg = document.querySelector('.popup__bigimg');
    const bigImgCaption = document.querySelector('.popup__bigimg-caption');

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
        bigImgPopUp.classList.add('popup_opened');
        bigImg.src = cardImg.src;
        bigImgCaption.innerHTML = cardTitle.textContent;
    });

    bigImgPopUpclose.addEventListener('click', () => {
        bigImgPopUp.classList.remove('popup_opened');
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
    
    let manuallCardData = {
        place: placeInput.value,
        link: linkInput.value
    };
    
    cardContainer.prepend(createCardElement(manuallCardData));
    placePopUp.classList.remove('popup_opened');
};

addPlacePopUpForm.addEventListener('submit', handleCardAdding); 