var sidebar = document.getElementById("left-sidebar");
var mainContent = document.getElementById("man-content");
var controlBar = document.getElementById("control-bar");

function toggleSidebar() {
    if (sidebar.style.display) {
        sidebar.style.display = "";
        mainContent.style.paddingLeft = "";
    } else {         
        sidebar.style.display = "none";
        mainContent.style.paddingLeft = "0";
    }
}
controlBar.addEventListener("click", toggleSidebar);

