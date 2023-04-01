const editButton = document.querySelector(".profile__edit-button");
const editPopUp = document.querySelector(".popup");
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
