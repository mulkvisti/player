let currentPage = "first-page";

//navbar logic
document.querySelectorAll('.nav-icon').forEach(icon => {
    icon.addEventListener("click", () => {
        changePage(icon.id)
    })
})

//create second page
let secondPage = document.querySelector(".second-page");
let photosGrid = document.querySelector(".photos-grid");

let littleCount = 1;
let verticalCount = 1;
let horizontalCount = 1;
let bigCount = 1;

for (let i = 1; i <= 6; i++) {
    addPhoto("vertical", verticalCount);
    verticalCount++;

    addPhoto("little", littleCount);
    littleCount++;
    addPhoto("little", littleCount);
    littleCount++;

    addPhoto("horizontal", horizontalCount);
    horizontalCount++;

    addPhoto("big", bigCount);
    bigCount++;
}

for (let i = 1; i <= 4; i++) {
    addPhoto("vertical", verticalCount);
    verticalCount++;

    addPhoto("little", littleCount);
    littleCount++;
    addPhoto("little", littleCount);
    littleCount++;

    addPhoto("horizontal", horizontalCount);
    horizontalCount++;
}

for (let i = 1; i <= 5; i++) {
    addPhoto("vertical", verticalCount);
    verticalCount++;
    addPhoto("vertical", verticalCount);
    verticalCount++;

    addPhoto("little", littleCount);
    littleCount++;
    addPhoto("little", littleCount);
    littleCount++;
}

addPhoto("little", littleCount);
littleCount++;
addPhoto("little", littleCount);
littleCount++;


//create third page
let thirdPage = document.querySelector(".third-page");
let drawingsGrid = document.querySelector(".drawings-grid");

littleCount = 1;
verticalCount = 1;
horizontalCount = 1;
bigCount = 1;

addDrawing("big", bigCount);
bigCount++;
for (let i = 1; i <= 4; i++) {
    for (let j = 1; j <= 4; j++) {
        addDrawing("little", littleCount);
        littleCount++;
    }
    addDrawing("vertical", verticalCount);
    verticalCount++;
    for (let j = 1; j <= 4; j++) {
        addDrawing("little", littleCount);
        littleCount++;
    }
    addDrawing("horizontal", horizontalCount);
    horizontalCount++;
    for (let j = 1; j <= 4; j++) {
        addDrawing("little", littleCount);
        littleCount++;
    }
    addDrawing("big", bigCount);
    bigCount++;
}
addDrawing("horizontal", horizontalCount);
horizontalCount++;
addDrawing("big", bigCount);
bigCount++;

addDrawing("horizontal", horizontalCount);
horizontalCount++;
addDrawing("horizontal", horizontalCount);
horizontalCount++;
addDrawing("little", littleCount);
littleCount++;
addDrawing("little", littleCount);
littleCount++;
addDrawing("big", bigCount);
bigCount++;


function addPhoto(photoSize, imgNumber) {
    let photoBox = document.createElement("div");
    let photoImg = document.createElement("img");
        photoBox.className = `${photoSize}-drawing is-photo-box`;
        photoImg.src = `./photos/${photoSize}/${imgNumber}.jpg`;
    photoBox.appendChild(photoImg);
    photosGrid.appendChild(photoBox);
}

function addDrawing(drawingSize, imgNumber) {
    let drawingBox = document.createElement("div");
    let drawingImg = document.createElement("img");
        drawingBox.className = `${drawingSize}-drawing`;
        drawingImg.className = "is-drawing";
        drawingImg.src = `./ascii/${drawingSize}/${imgNumber}.png`;
    drawingBox.appendChild(drawingImg)
    drawingsGrid.appendChild(drawingBox);
}

function changePage(newPage) {
    let newPageNumber = newPage.slice(0, -7);
    let newPageDiv = document.querySelector(`.${newPageNumber}`)
    if (currentPage != newPageNumber) {
        document.querySelector(`.${currentPage}`).className += " hide";
        newPageDiv.className = newPageDiv.className.slice(0, -5);
        updateNavbar(newPageNumber);
        currentPage = newPageNumber;
    }
}

function updateNavbar(newPage) {
    let newIcon = newPage + "-button";
    let oldIcon = currentPage + "-button";
    let oldIconDiv = document.querySelector(`#${oldIcon} > .fill`);

    oldIconDiv.className = oldIconDiv.className.slice(0, -8);
    document.querySelector(`#${newIcon} > .fill`).className += " checked";

    document.querySelector(`#${newIcon} > .fill + i`).className += " zero-opacity";    
    let oldIconOutline = document.querySelector(`#${oldIcon} > .fill + i`);
    oldIconOutline.className = oldIconOutline.className.slice(0,-13);
}