document.addEventListener("DOMContentLoaded", function() {
    let greetingElement = document.querySelector('#greeting');
    greetingElement.textContent = "WELCOME TO YOUR HOLIDAY PLANNER";

    let header = document.querySelector("h1");
    header.textContent = "Holiday Planner";

    let button = document.querySelector("#myButton");
    button.addEventListener("click", function() {
        alert('Button Clicked!');
    });

    document.querySelectorAll('.alertLink').forEach(function(link) {
        link.addEventListener('click', function (event){
            event.preventDefault();
            alert('Link Clicked '+link.textContent);
        });
    });
});

