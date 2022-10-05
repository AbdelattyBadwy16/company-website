
let home = document.getElementById('home');
let about = document.getElementById('about');
let service = document.getElementById('service');
let portfolio = document.getElementById('portfolio');
let team = document.getElementById('team');
let contact = document.getElementById('contact');


function swap(id){

    home.style.color = 'white';
    about.style.color = 'white';
    service.style.color = 'white';
    portfolio.style.color = 'white';
    team.style.color = 'white';
    contact.style.color = 'white';

    document.getElementById(id).style.color = '#FF9B1B';
}


