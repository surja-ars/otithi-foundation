//js for preloder

let loader = document.getElementById('preloader');

window.addEventListener('load', function () {
    loader.style.display = 'none';
  
});

//javascript for scroll bottom to top bar

let scrollbtn = document.querySelector(".scrollToTop-btn");
window.addEventListener("scroll", function () {
    scrollbtn.classList.toggle("active", window.scrollY > 500);
    
})
// funcitontion this scroll bottom to top
scrollbtn.addEventListener("click", () =>{
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})


// js for navigation bar

let sidenav = document.getElementById('side-nav');
let manuBtn = document.getElementById('manuBtn');
let manu = document.getElementById('manu');

sidenav.style.right = "-250px"

manuBtn.onclick = function() {
    if (sidenav.style.right == "-250px") {
        sidenav.style.right = "0";
        manu.src = 'img/close.png';
    }
    else{
        sidenav.style.right = "-250px";
        manu.src = 'img/menu.png';
    }
}

// js for form submit

const scriptURL = 'https://script.google.com/macros/s/AKfycbx9fQPeo1ovEPdvSCk3Hj4EUAGHTT_clmV-jEA3bxbAHLj5G-2i27d-XCsDJzVHBTJs/exec'
const form = document.forms['google-sheet']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => Swal.fire(
        'Congatulation',
        'Now You are the member of Otithi',
        'success'
      ))
    .catch(error => console.error('Error!', error.message))
})

// js for contact form

window.addEventListener("DOMContentLoaded", function () {
  // get the form elements defined in your form HTML above

  let form = document.getElementById("my-form");
  // var button = document.getElementById("my-form-button");
  let status = document.getElementById("status");

  // Success and Error functions for after the form is submitted

  function success() {
    form.reset();
    status.classList.add("success");
    status.innerHTML = "We receved your message. We will contact with you";
  }

  function error() {
    status.classList.add("error");
    status.innerHTML = "Oops! There was a problem. please, Try again";
  }

  // handle the form submission event

  form.addEventListener("submit", function (ev) {
    ev.preventDefault();
    let data = new FormData(form);
    ajax(form.method, form.action, data, success, error);
  });
});

// helper function for sending an AJAX request

function ajax(method, url, data, success, error) {
  let xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.setRequestHeader("Accept", "application/json");
  xhr.onreadystatechange = function () {
    if (xhr.readyState !== XMLHttpRequest.DONE) return;
    if (xhr.status === 200) {
      success();
    } else {
      error();
    }
  };
  xhr.send(data);
}





















