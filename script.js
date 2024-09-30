
const menu = document.querySelector(".menu");
const navbar = document.querySelector(".side-navbar");
const logo = document.querySelector(".logo");
const form = document.querySelector("form");
const header = document.querySelector("header");

// Navbar Setup





// Show Hide Toggle Menu 

menu.addEventListener("click", toggle);

function toggle() {
    showHideMenu();
    if (navbar.style.transform == "translateX(0%)") {
        navbar.style.transform = "translateX(-100%)";
        document.body.style.overflowY = "";
    }
    else {
        navbar.style.transform = "translateX(0%)";
        navbar.style.borderTop = "2px solid aqua";
        document.body.style.overflowY = "hidden";
    }

}

function showHideMenu() {
    if (navbar.style.transform == "translateX(0%)") {
        menu.innerHTML = "&#9776;"
    }
    else {
        menu.innerHTML = "&#x2715;"

    }
}



//  click  on (tags) li and auto disappear side navbar



let navbarbutton = document.querySelectorAll(".side-navbar li")

for (var i = 0; i < navbarbutton.length; i++) {

    navbarbutton[i].addEventListener("click", () => {
        navbar.style.transform = "translateX(-100%)";
        menu.innerHTML = "&#9776;"
        document.body.style.overflowY = "";

    })
}


//  fuction for Go To Top Button 


logo.addEventListener("click", scrollfunction);
let scrollTopBTN = document.querySelector(".gototopImage");
scrollTopBTN.addEventListener("click", scrollfunction)

function scrollfunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

window.onscroll = function () {


    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollTopBTN.style.display = "block";
    } else {
        scrollTopBTN.style.display = "none";
    }
}


// Prevent Form from its default behaviour (submit on click)



form.addEventListener("click", eventFunction)


function eventFunction(){
events.preventDefault();
alert("Your message sent successfully.");
}


// Hire Me Form Handling 



const hiremeouterdiv = document.querySelector(".hireMeOuterDiv");
const hiremediv = document.querySelector(".hireMeDiv");
const crossbtn = document.querySelector(".crossbtn");
const hirebtn = document.querySelectorAll(".hirebtn");

for (i = 0; i < hirebtn.length; i++) {

    hirebtn[i].addEventListener("click", pulldown);
    function pulldown() {
        document.body.style.overflowY = "hidden";
        hiremediv.style.top = "50%";
        hiremeouterdiv.classList.add("hireMeOuterDivActive");
    }
}

crossbtn.addEventListener("click", pullup);

function pullup() {
    hiremediv.style.top = "-300px";
    hiremeouterdiv.classList.remove("hireMeOuterDivActive");
    document.body.style.overflowY = "";
}




// Hire me form's inputs handling  




const fullname = document.querySelector("#fullName");
const email = document.querySelector("#email");
const phone = document.querySelector("#phone");
const pinCode = document.querySelector("#pinCode");
const selectWorkType = document.querySelector("#workType");
const selectCategory = document.querySelector("#category");
const hireMeTextArea = document.querySelector("#hireMeTextArea");
const hireMeSubmitBtn = document.querySelector("#hireMeSubmitBtn");


fullname.addEventListener("input", oninputfunction)
email.addEventListener("input", oninputfunction)
phone.addEventListener("input", oninputfunction)
pinCode.addEventListener("input", oninputfunction)
selectWorkType.addEventListener("input", oninputfunction)
selectCategory.addEventListener("input", oninputfunction)
hireMeTextArea.addEventListener("input", oninputfunction)



function oninputfunction() {
    if (fullname.value != "" && email.value != "" && phone.value != "" && pinCode.value != "" && selectWorkType.value != "select_work" && selectCategory.value != "select_Category" && hireMeTextArea.value != "") {
        hireMeSubmitBtn.style.backgroundColor = "green";
        hireMeSubmitBtn.style.cursor="pointer";
        hireMeSubmitBtn.disabled=false;
    }
    else {
        hireMeSubmitBtn.style.backgroundColor = "gray";
        hireMeSubmitBtn.style.cursor="auto";
        hireMeSubmitBtn.disabled = true;
    }
}



// Hire me form prevent Default submit 
