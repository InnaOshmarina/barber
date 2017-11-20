var link = document.querySelector(".login");
var popup = document.querySelector(".modal-content");
var close = document.querySelector(".modal-content-close");
// var secondlink = document.querySelector(".footer-contacts a");
// var secondpopup = document.querySelector(".modal-content-map");
var form = popup.querySelector("form"); 
var login = popup.querySelector("[name=login]");
var password = popup.querySelector("[name=password]");
var storage = localStorage.getItem("login");
var mapOpen = document.querySelector(".js-open-map");
var mapPopup = document.querySelector(".modal-content-map");
var mapClose = document.querySelector(".js-close-map");
 
link.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.add("modal-content-show");
  if (storage) {
    login.value = storage;
    password.focus();
  } else {
      login.focus();
  }
}); 

close.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.remove("modal-content-show");
  popup.classList.remove("modal-content-error");
});

// secondlink.addEventListener("click", function(event) {
  // event.preventDefault();
  // secondpopup.classList.add("modal-content-map-show");
// });

// close.addEventListener("click", function(event) {
  // event.preventDefault();
  // secondpopup.classList.remove("modal-content-map-show");
// });

form.addEventListener("submit", function(event) {
  if (!login.value || !password.value) {
    event.preventDefault();
    popup.classList.add("modal-content-error");
  } else {
    localStorage.setItem("login", login.value);
  }
}); 

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (popup.classList.contains("modal-content-show")) {
      popup.classList.remove("modal-content-show");
      popup.classList.remove("modal-content-error");
    }
  }
});

mapOpen.addEventListener("click", function(event) {
  event.preventDefault();
  mapPopup.classList.add("modal-content-map-show");
});

mapClose.addEventListener("click", function(event) {
  event.preventDefault();
  mapPopup.classList.remove("modal-content-map-show");
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (mapPopup.classList.contains("modal-content-map-show")) {
      mapPopup.classList.remove("modal-content-map-show");
    }
  }
});







