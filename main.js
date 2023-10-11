//=============== START - DECLARATION DU FORMULAIRE ===============//
(function () {
  "use strict";
  let form = document.getElementById("lessonForm");
  form.addEventListener(
    "submit",
    function (event) {
      Array.form(form.elements).forEach((input) => {
        if (input.type !== "submit") {
          if (!validateFields(input)) {
            alert("1");
            event.preventDefault();
            event.stopPropagation();

            input.classList.remove("is-valid");
            input.classList.add("is-invalid");
            input.nextElementSibling.style.display = "block";
          } else {
            alert("3");
            input.nextElementSibling.style.display = "none";
            input.classList.remove("is-invalid");
            input.classList.add("is-valid");
          }
        }
      });
    },
    false
  );
})();
// Validation d'un champ REQUIRED
function validateRequired(input) {
  return !(input.value == null || input.value == "");
}
// Validation du nombre de caractère min et max
function validateLength(input, minLength, maxLength) {
  return !(input.value.length < minLength || input.value.length > maxLength);
}

//validation des caractères: Latin et seulement des lettres
function validateText(input) {
  return input.value.match("^[A-Za-z]+$");
}
function validateEmail(input) {
  let EMAIL = input.value;
  let POSAT = EMAIL.indexOf("@");
  let POSDOT = EMAIL.lastIndexOf(".");
  return !(POSAT < 1 || POSDOT - POSAT < 2);
}
//validation code postal
function validatePostCode(input) {
  return input.value.match("^(0[0-9][1-9][1-9])[1-9][1-9]$");
}
//validation adresse
function validateAdress(input) {
  return input.value.match(/^\s★\S+(?:\s+\S+){2}/);
}
function validateFields(input) {
  let fieldName = input.name;
  // Validaton de l'input PRENOM
  if (fieldName == "firstName") {
    if (!validateRequired(input)) {
      return False;
    }
    if (!validateLength(input, 2, 20)) {
      return False;
    }
    if (!validateText(input)) {
      return False;
    }
    return true;
  }
  if (fieldName == "lasttName") {
    if (!validateRequired(input)) {
      return False;
    }
    if (!validateLength(input, 2, 20)) {
      return False;
    }
    if (!validateText(input)) {
      return False;
    }
  }
  return true;

  if (fieldName == "email") {
    if (!validateEmail(input)) {
      return False;
    }
    return true;
  }
  if (fieldName == "postCode") {
    if (!validatePostCode(input)) {
      return False;
    }
    return True;
  }
  if (fieldName == "address") {
    if (!validateAdress(input)) {
      return False;
    }
    return True;
  }
}
//=============== END - DECLARATION DU FORMULAIRE ===============//
