const editButton = document.querySelector(".edit-button");
const editPopUp = document.querySelector(".popup");
const closePopUp = editPopUp.querySelector(".popup__close");
let nameInput = editPopUp.querySelector(".popup__input_type_name");
let jobInput = editPopUp.querySelector(".popup__input_type_prof");
const editPopUpForm =  editPopUp.querySelector(".popup__form");
let profileName = document.querySelector(".profile__name");
let profileProf = document.querySelector(".profile__profession");

editButton.addEventListener('click', () => { 
    editPopUp.classList.add('popup_opened');
});

closePopUp.addEventListener('click', () => {
    editPopUp.classList.remove('popup_opened');
});

function handleFormSubmit (evt) {
    evt.preventDefault();

    let name = nameInput.value;
    profileName.textContent = name;

    let job = jobInput.value;
    profileProf.textContent = job;

    editPopUp.classList.remove('popup_opened');
};

editPopUpForm.addEventListener('submit', handleFormSubmit); 
