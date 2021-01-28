$(document).ready(function (){
    $('#my-name').addClass('animate__animated animate__lightSpeedInLeft');
    $('#my-title').addClass('animate__animated animate__lightSpeedInRight');
    
});

let date = new Date();
let currYear = date.getFullYear();

const yearSpan = document.getElementById('years-BRI');
yearSpan.innerHTML = currYear - 2003;