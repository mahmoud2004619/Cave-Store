function nav() {
    // search-box open close js code
    let navbar = document.querySelector(".navbar");
    let searchBox = document.querySelector(".search-box .bx-search");
    // let searchBoxCancel = document.querySelector(".search-box .bx-x");

    searchBox.addEventListener("click", () => {
        navbar.classList.toggle("showInput");
        if (navbar.classList.contains("showInput")) {
            searchBox.classList.replace("bx-search", "bx-x");
        } else {
            searchBox.classList.replace("bx-x", "bx-search");
        }
    });

    // sidebar open close js code
    let navLinks = document.querySelector(".nav-links");
    let menuOpenBtn = document.querySelector(".navbar .bx-menu");
    let menuCloseBtn = document.querySelector(".nav-links .bx-x");
    menuOpenBtn.onclick = function () {
        navLinks.style.left = "0";
    }
    menuCloseBtn.onclick = function () {
        navLinks.style.left = "-100%";
    }
}
nav()


function sendMail() {
    var params = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value,
    };

    const serviceID = "service_g2akv3h";
    const templateID = "template_z6ccvir";

    email.js
        .send(serviceID, templateID, params)
        .then((res) => {
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("message").value = "";
            console.log(res);
            alert("yiur message sent successfully");
        })
        .catch((err) => console.log(err));
}
sendMail() 