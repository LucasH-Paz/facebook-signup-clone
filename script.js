function getEmailOrPhone() {
  const input = document.getElementById('user-email-phone');
  alert(input.value);
  input.value = '';
}

const btn = document.getElementById('button-login');
btn.addEventListener('click', getEmailOrPhone);

function requiredCamp() {
  const inputs = document.querySelectorAll('.right-content input');
  console.log('estou funcionando')
  for (let index = 0; index < inputs.length; index += 1) {
    if (inputs[index].value === '') {
      alert('Campos inválidos');
      break;
    }
  }
}

let buttonVerifier = document.getElementById('facebook-register');
buttonVerifier.addEventListener('click', requiredCamp);
