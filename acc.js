const ourItemDiv = document.getElementsByClassName('item');
const openIcons = document.getElementsByClassName('iconOpen');
const closeIcons = document.getElementsByClassName('iconClose');

for (let i = 0; i < ourItemDiv.length; i++) {
    ourItemDiv[i].addEventListener("click", () => {
        ourItemDiv[i].classList.toggle("active");

        if (ourItemDiv[i].classList.contains("active")) {
            openIcons[i].style.display = "none";
            closeIcons[i].style.display = "block";
        } else {
            openIcons[i].style.display = "block";
            closeIcons[i].style.display = "none";
        }
    });
}
