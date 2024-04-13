document.querySelector(".form").addEventListener("submit", function (e) {
  e.preventDefault();
  generatePassword();
});

function generatePassword() {
  const length = document.getElementById("length").value;
  const uppercase = document.getElementById("uppercase").checked;
  const lowercase = document.getElementById("lowercase").checked;
  const numbers = document.getElementById("numbers").checked;
  const symbols = document.getElementById("symbols").checked;

  let charset = "";
  // Se true, adiciona ao charset
  if (uppercase) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (lowercase) charset += "abcdefghijklmnopqrstuvwxyz";
  if (numbers) charset += "0123456789";
  if (symbols) charset += "!@#$%&*()_+";

  let password = "";

  // Loop com a quantidade de caracteres
  for (let i = 0; i < length; i++) {
    password += charset.charAt(Math.floor(Math.random() * charset.length));
  }
  document.getElementById("password").value = password;
}

// Copiar senha para a área de transferência
function copyPassword() {
  const passwordField = document.getElementById("password");
  const password = passwordField.value;
  navigator.clipboard.writeText(password).then(
    function () {
      alert(`Senha copiada para a área de transferência!
                   ${password}`);
    },
    function (err) {
      alert("Erro ao copiar senha!", err);
    }
  );
}
