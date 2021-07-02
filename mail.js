document.addEventListener('DOMContentLoaded', () => {
    const infoBox = document.getElementById("mail");
    const mail = atob("ZG9nb0Bkb3NvLmVz");
    
    infoBox.innerText = `More Info: ${mail}`;
});
