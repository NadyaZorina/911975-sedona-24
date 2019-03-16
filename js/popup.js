  var link = document.querySelector(".searchform");
  var popup = document.querySelector(".appointment-form");
  var form = document.querySelector("form");
  var arrival = popup.querySelector("[name=arrival-date]");
  var departure = popup.querySelector("[name=departure-date]"); 
  var adult = popup.querySelector("[name=adult]");
  var child = popup.querySelector("[name=child]");
  var isStorageSupport = true;
  var storage = "";
  
  try {
    storage = localStorage.getItem("adult");
  }
  catch (err) {
    isStorageSupport = false;
  }
  if (storage) {
    adult.value = storage;
    departure.focus();
    } else {
    arrival.focus();
    }
           
     link.addEventListener("click", function (evt) {
       evt.preventDefault();
       popup.classList.toggle("modal-show");
  });

       form.addEventListener("submit", function (evt) {
    if (!arrival.value || !departure.value || !adult.value || !child.value ) {
      evt.preventDefault();
      popup.classList.remove("modal-error");
      popup.offsetWidth = popup.offsetWidth;
      popup.classList.add("modal-error");
      console.log("Необходимо ввести данные для поиска");
    }
    else {
      popup.classList.remove("modal-error");  
      if (isStorageSupport) {
        localStorage.setItem("adult", adult.value);
      }
    }
  }); 

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popup.classList.contains("modal-show")) {
        popup.classList.remove("modal-show");
        popup.classList.remove("modal-error");
      }
    }
  });          