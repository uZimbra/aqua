function submit_form() {
  const name = document.forms["form"]["name"].value;
  const email = document.forms["form"]["email"].value;
  const message = document.forms["form"]["message"].value;

  if (!name || !email || !message) {
    return alert("Preencha todos os campos do formulario!")
  }

  alert("Entraremos em contato em breve!");

  document.forms["form"]["name"].value = "";
  document.forms["form"]["email"].value = "";
  document.forms["form"]["message"].value = "";
}

document.getElementById("form-button").addEventListener("click", (e) => {
  e.preventDefault()
  submit_form()
});

