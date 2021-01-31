var Simon = document.getElementById("Simon");
var Kamina = document.getElementById("Kamina");
var Yoko = document.getElementById("Yoko");

function Simon() {
    if (sidebar.style.display) {
        sidebar.style.display = "";
        mainContent.style.paddingLeft = "";
    } else {         
        sidebar.style.display = "none";
        mainContent.style.paddingLeft = "0";
    }
}
controlBar.addEventListener("click", toggleSidebar);