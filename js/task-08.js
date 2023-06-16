const formLogin = document.querySelector(".login-form");
console.dir(formLogin);

formLogin.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  //   console.log(event.currentTarget.elements);
  const { email, password } = event.currentTarget.elements;

  const userData = {
    email: email.value,
    password: password.value,
  };
  //   console.log(userData);
  //   console.log(userData.email);

  for (const key in userData) {
    if (!userData[key].length) {
      alert(`hhghgfh`);
    } else {
      userData;
    }
    // console.log(userData);
  }
}
