function xBtnVisibility() {
    let searchBar = document.getElementById("searchbar");
    let xBtn = document.getElementById("x-btn");

    if (searchBar.value != "") {
        xBtn.style.visibility = 'visible';
    } else {
        xBtn.style.visibility = 'hidden';
    }
}

function clearInput() {
    let searchBar = document.getElementById("searchbar");
    let xBtn = document.getElementById("x-btn");

    searchBar.value = "";
    xBtn.style.visibility = 'hidden';
}

function navLinkSelect(e) {
    let navLinks = document.getElementsByClassName("nav-link");

    for(let i = 0; i < navLinks.length; i++) {
        navLinks[i].classList.remove("current");
    }

    e.classList.add("current");
}