const editButton = document.querySelector(".edit-button");
const editPopUp = document.querySelector(".pop-up");
const closePopUp = editPopUp.querySelector(".pop-up__close");
let nameInput = editPopUp.querySelector(".pop-up__input_type_name");
let jobInput = editPopUp.querySelector(".pop-up__input_type_prof");
const saveButton = editPopUp.querySelector(".pop-up__button");
const editPopUpForm =  editPopUp.querySelector(".pop-up__form");
let profileName = document.querySelector(".profile__name");
let profileProf = document.querySelector(".profile__profession");

editButton.addEventListener('click', () => { 
    editPopUp.classList.add('pop-up_open');
});

closePopUp.addEventListener('click', () => {
    editPopUp.classList.remove('pop-up_open');
});

function handleFormSubmit (evt) {
    evt.preventDefault();

    let name = nameInput.value;
    profileName.textContent = name;

    let job = jobInput.value;
    profileProf.textContent = job;

    editPopUp.classList.remove('pop-up_open');
 
};

editPopUpForm.addEventListener('submit', handleFormSubmit); 
