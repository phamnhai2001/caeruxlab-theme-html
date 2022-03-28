    // input search
    document.getElementById("btn").onclick = function () { searchFunction() };
    function searchFunction() {
        document.getElementById("header_upper_search_form").classList.toggle("show");
    }
    
    // open nav menu
    document.getElementById("nav_toggle").onclick = function () { openFunction() };
    function openFunction() {
        document.querySelector("nav").classList.toggle("open");
    }