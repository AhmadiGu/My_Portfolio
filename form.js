const form = document.querySelector('.form');
const emailError = document.querySelector('.form-error');

form.addEventListener('submit', (e) => {
 
//   const firstName = form.name.value;
//   const lastName = form.name.value;
//   const email = form.email.value;
//   const message = form.message.value;
//   if (email !== email.toLowerCase()) { 
//     e.preventDefault();
//     emailError.style.opacity = 1;
//     emailError.innerHTML = `<p class="error">Email should be written in lowercase letters: ${email}</p>`;
//   } else {
//     emailError.innerHTML = ''; 
//     emailError.style.opacity = 0;
//   }
// });
 
 
  const firstName = form.firtName.value;
  const lastName = form.lastName.value;
 
//   const firstName = form.name.value;
//   const lastName = form.name.value;
 
  const email = form.email.value;
  const message = form.message.value;
  if (email !== email.toLowerCase()) {
    e.preventDefault();
    emailError.innerHTML = `<p class="error">Email should be written in lowercase letters: ${email}</p>`;
 
  } else {
    emailError.innerHTML = '';
    const data = JSON.stringify({ firstName,lastName, email, message });
    localStorage.setItem('data', data);
  }
});
const userData = JSON.parse(localStorage.getItem('data'));
form.firstName.value = userData.firstName;
form.lastName.value = userData.lastName;
form.email.value = userData.email;
form.message.value = userData.message;
 
  } 
});
 
 
