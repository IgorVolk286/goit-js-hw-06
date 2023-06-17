const formLogin = document.querySelector(".login-form");
console.dir(formLogin);

formLogin.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const { email, password } = event.currentTarget.elements;
  // console.log(event.currentTarget.elements);
  const userData = {
    email: email.value,
    password: password.value,
  };

  Object.values(userData).forEach((value, idx) => {
    if (!value.length) {
      return alert(`Усі поля форми повинні бути заповненні`);
    } else {
      console.log(userData);
      document.querySelector(".login-form").reset();
    }
  });
}
