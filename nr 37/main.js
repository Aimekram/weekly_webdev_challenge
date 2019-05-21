let leftHeight = document.getElementById("left").clientHeight;

//leftHeight = sectionHeight + 80px;

function changeHeight() {
    let sectionHeight = document.getElementById("clients").clientHeight;
    let sectionWidth = document.getElementById("clients").clientWidth;
    
    document.getElementById("left").style.height = sectionHeight + 140;
    console.log("left: " + leftHeight + "; container: " + sectionHeight);
    
    document.getElementById("left").style.top = - (sectionWidth * 0.05 + 70)
};

changeHeight();

window.onresize = changeHeight;