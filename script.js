var settingsmenu = document.querySelector(".settings-menu");
var darkBtn = document.getElementById("dark-btn");


function settingsMenuToggle(){
    settingsmenu.classList.toggle("settings-menu-height");
}
darkBtn.onclick = function(){
    darkBtn.classList.toggle("dark-btn-on");
    document.body.classList.toggle("dark-theme");

    if (localStorage.getItem("theme") == "light"){
        localStorage.setItem("theme", "dark")
    }
    else{
        localStorage.setItem("theme", "light")
    }

}

if(localStorage.getItem("theme") == "light"){
    darkBtn.classList.remove("dark-btn-on");
    document.body.classList.remove("dark-theme");
}
else if(localStorage.getItem("theme") == "dark"){
    darkBtn.classList.add("dark-btn-on");
    document.body.classList.add("dark-theme");
}
else{
    localStorage.setItem("theme", "light");
}

document.getElementById("drop").addEventListener("click", function(e) {
    document.getElementById("myDropdown").classList.toggle("show");
  });
  
  
  // Close the dropdown if the user clicks outside of it
  window.addEventListener("click", function(event) {
    if (!event.target.matches('.dropbtn')) {
      document.querySelectorAll(".dropdown-content.show")
        .forEach(openDropdown => openDropdown.classList.remove('show'))
    }
  });

  const modal = document.querySelector(".modal")
  const openModal = document.querySelector(".open-button")
  const closeModal = document.querySelector(".close-button")

  openModal.addEventListener('click', () => {
    modal.showModal();
  })

  closeModal.addEventListener('click', () => {
    modal.close();
  })
  const modal2 = document.querySelector(".modal2")
  const openModal2 = document.querySelector(".open-button2")
  const closeModal2 = document.querySelector(".close-button2")

  openModal2.addEventListener('click', () => {
    modal2.showModal();
  })

  closeModal2.addEventListener('click', () => {
    modal2.close();
  })

  function func() {
    document.getElementById('accountDetails').value  = 'Notifications Off';
}
  function func2() {
    document.getElementById('accountDetails').value  = 'Followed';
  }
