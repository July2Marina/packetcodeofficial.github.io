//Define DOM elements
const toggleButton = document.querySelector("#toggle-button");
const root = document.querySelector(":root");
const storageKey = "color-mode";
const defaultMode = "light-mode";

//load the users prefered color mode from local storage
function localColorMode(){
 const colorMode = localStorage.getItem(storageKey);
 root.classList.add(colorMode || defaultMode );
 updateToggleButton();
}

localColorMode();

//Toggles the color mode
toggleButton.addEventListener("click", ()=>{
    saveColorMode();
});

//Saving Users prefred Color Mode to local storage
function saveColorMode(){
    //Check if the root element has a  class of dark mode. If yes then the current mode is switched to light and vice versa.
    const  currentMode = root.classList.contains("dark-mode") ? "light-mode": "dark-mode";
    root.classList.remove ("light-mode", "dark-mode");
    root.classList.add(currentMode);
    localStorage.setItem(storageKey,currentMode);
    updateToggleButton();
}
function updateToggleButton(){
if (root.classList.contains("dark-mode")) {
    toggleButton.computedStyleMap.backgroundImage = "var(--moon)";

   
} else {
    toggleButton.computedStyleMap.backgroundImage = "var(--sun)";
}
}