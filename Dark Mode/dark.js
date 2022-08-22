// Selectors for items to update
const input = document.querySelector(".input");
const body = document.querySelector("body");

// Update dark mode subject to local storage mode from line 17
input.checked = JSON.parse(localStorage.getItem("mode"));

// This will update the colors
function updateBody () {
    if(input.checked) {
        body.style.backgroundColor = "black";
    } else {
        body.style.backgroundColor = "white";
    }
}
updateBody();

// Updates the mode in local storage
function updateLocalStorage() {
    localStorage.setItem("mode", JSON.stringify(input.checked))
};

// Event listener for darkmode
input.addEventListener("click", () => {
    updateBody();
    updateLocalStorage();
});