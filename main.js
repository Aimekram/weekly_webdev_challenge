function changeHeightSmallLeft() {
    const sectionHeight = document.getElementById("services").clientHeight;
    const sectionWidth = document.getElementById("services").clientWidth;
    document.getElementById("leftxs").style.height = sectionHeight * 0.5;
    document.getElementById("leftxs").style.top = (sectionHeight * 0.5)/2 - sectionWidth * 0.05; 
};


function changeHeightBigRight() {
    const sectionHeight = document.getElementById("process").clientHeight;
    const sectionWidth = document.getElementById("process").clientWidth;
    
    if (sectionWidth < 768) {
        document.getElementById("right").style.height = sectionHeight;
        document.getElementById("right").style.top = sectionHeight * .2;
    } else {
        document.getElementById("right").style.height = sectionHeight + 300;
        document.getElementById("right").style.top = - (sectionWidth * 0.05 + 150);
    }
}

function changeHeightBigLeft() {
    const sectionHeight = document.getElementById("clients").clientHeight;
    const sectionWidth = document.getElementById("clients").clientWidth;
    document.getElementById("left").style.height = sectionHeight + 140;
    document.getElementById("left").style.top = - (sectionWidth * 0.05 + 70)
};

function changeHeight() {
    changeHeightBigLeft();
    changeHeightBigRight();
    changeHeightSmallLeft();
};


changeHeight();
window.onresize = changeHeight;


//--------------------------------------slider

const leftArrow = document.getElementById("leftarrow");
const rightArrow = document.getElementById("rightarrow");

const slidesArr = document.querySelectorAll(".slider_item")
let currentSlide = 0;

function changeSlide(direction) {
    let first;
    let second;
    
    if (direction === 1) {
        prev = "prev";
        next = "next";
    } else {
        prev = "next";
        next = "prev";
    }
    
    slidesArr[currentSlide].className = 'slider_item ' + prev;
    currentSlide = (currentSlide + direction) % slidesArr.length;
    slidesArr[currentSlide].className = 'slider_item show';
    slidesArr[(currentSlide + direction) % slidesArr.length].className = 'slider_item ' + next;
    console.log(currentSlide);
}

function prevSlide() {
  changeSlide(slidesArr.length-1)
}

function nextSlide() {
  changeSlide(1)
}

//const slideInterval = setInterval(nextSlide,2000);

leftArrow.onclick = prevSlide;
rightArrow.onclick = nextSlide;