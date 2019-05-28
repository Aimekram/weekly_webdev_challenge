function changeHeightSmallLeft() {
    const sectionHeight = document.getElementById("services").clientHeight;
    const sectionWidth = document.getElementById("services").clientWidth;
    document.getElementById("leftxs").style.height = sectionHeight * 0.5;
    document.getElementById("leftxs").style.top = (sectionHeight * 0.5)/2 - sectionWidth * 0.05; 
};


function changeHeightBigRight() {
    const sectionHeight = document.getElementById("process").clientHeight;
    const sectionWidth = document.getElementById("process").clientWidth;
    document.getElementById("right").style.height = sectionHeight + 300;
    document.getElementById("right").style.top = - (sectionWidth * 0.05 + 150)
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