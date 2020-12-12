const slides = document.getElementsByClassName('slide');
const dots = document.getElementsByClassName('dots');
let index = 0;
function next() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove('active');
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove('active-dot');
    }
    index++;
    if (index == slides.length) {
        index = 0;
    }
    slides[index].classList.add('active');
    dots[index].classList.add('active-dot');
}
function prev() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove('active');
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove('active-dot');
    }
    if (index == 0) {
        console.log("ok");
        index = 2;
    }
    else {
        index--;
    }
    slides[index].classList.add('active');
    dots[index].classList.add('active-dot');

}
// pagination

//  2nd slider:
const slides2 = document.getElementsByClassName('slide-2');
const dots2 = document.getElementsByClassName('dots-2');
let ind = 0;
function nxt() {
    for (let i = 0; i < slides2.length; i++) {
        slides2[i].classList.remove('active');
        dots2[i].classList.remove('active-dot-2');
    }
    ind++;
    if (ind == slides2.length) {
        ind = 0;
    }
    slides2[ind].classList.add('active');
    dots2[ind].classList.add('active-dot-2');
}
function previous() {
    for (let i = 0; i < slides2.length; i++) {
        slides2[i].classList.remove('active');
    }
    for (let i = 0; i < dots2.length; i++) {
        dots2[i].classList.remove('active-dot-2');
    }
    if (ind == 0) {
        ind = 2;
    }
    else {
        ind--;
    }
    slides2[ind].classList.add('active');
    dots2[ind].classList.add('active-dot-2');
}
// Tutors animation
const tutors = document.getElementsByClassName('tutor-slides');
const tutorDot = document.getElementsByClassName('tutor-dots');
let tutorIndex = 0;
function animation() {
    for (let i = 0; i < tutors.length; i++) {
        tutors[i].classList.remove('tutor-slides-active');
        tutorDot[i].classList.remove('tutor-active-dot');
    }
    tutorIndex++;
    if (tutorIndex == tutors.length) {
        tutorIndex = 0;
    }
    tutors[tutorIndex].classList.add('tutor-slides-active');
    tutorDot[tutorIndex].classList.add('tutor-active-dot');
    setTimeout(animation, 4000);
}
setTimeout(animation, 4000);
// toggle navbar

const toggle = document.getElementById('toggle-navbar');
let toggleStatus = true;
console.log(toggle);
function menu() {
    console.log("clicked");
    if(toggleStatus==true){
        document.getElementById('toggle-navbar').style='transform:translateX(0px)';
        toggleStatus=false;
    }
    else{
        document.getElementById('toggle-navbar').style='transform:translateX(-100%)';
        toggleStatus=true;
    }
}

