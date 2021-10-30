const form = document.querySelector(".section__right form");
const inputs = document.querySelectorAll(".section__right form input");


form.addEventListener('submit', (e) => {
    e.preventDefault();
    inputs.forEach((input) => {
        if (!input.value) {
            input.parentElement.classList.add('error');
        } else{
            input.parentElement.classList.remove('error');

            // Validate Email
            if (input.id == 'email') {
                if (validateEmail(input.value)) {
                    input.parentElement.classList.remove('error');
                } else {
                    input.parentElement.classList.add('error');
                }
            }
        }
    });
});

// Validate Email
function validateEmail (email) {
    var regExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return regExp.test(String(email).toLowerCase());
};
