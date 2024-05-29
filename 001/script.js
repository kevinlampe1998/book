let pageOne = document.getElementById(`page-one`);
let turnOver1 = document.getElementById(`turn-over1`);

let browserX = innerWidth;
let browserY = innerHeight;

console.log(browserX);

turnOver1.addEventListener("click", function (e) {
    document.addEventListener("mousemove", function (e) {
        showMouse1(e);
    });
});

function showMouse1(e) {
    let x = e.clientX;
    let y = e.clientY;

    pageOne.style.left = `-${innerWidth - x}px`;

    console.log(x);
    console.log(y);
}

let turnOverInterval1 = setInterval(startTurnOver1, 500);
let cssLeft1;
function startTurnOver1() {
    cssLeft1 = window.getComputedStyle(pageOne);
    cssLeft1 = cssLeft1.getPropertyValue("left");
    cssLeft1 = cssLeft1.slice(0, cssLeft1.length - 2);
    cssLeft1 = Number(cssLeft1);

    if (cssLeft1 < -200) {
        pageOne.animate(
            [
                { transform: "translate(0px)" },
                { transform: `translate(-${browserX}px)` },
            ],
            {
                duration: 500,
                fill: "forwards",
            }
        );
        clearInterval(turnOverInterval1);
    }
}

// -----------------------------------------------------------------------

let pageTwo = document.getElementById(`page-two`);
let turnOver2 = document.getElementById(`turn-over2`);

turnOver2.addEventListener("click", function (e) {
    document.addEventListener("mousemove", function (e) {
        showMouse2(e);
    });
});

function showMouse2(e) {
    let x = e.clientX;
    let y = e.clientY;

    pageTwo.style.left = `-${innerWidth - x}px`;

    console.log(x);
    console.log(y);
}

let turnOverInterval2 = setInterval(startTurnOver2, 500);
let cssLeft2;
function startTurnOver2() {
    cssLeft2 = window.getComputedStyle(pageTwo);
    cssLeft2 = cssLeft2.getPropertyValue("left");
    cssLeft2 = cssLeft2.slice(0, cssLeft2.length - 2);
    cssLeft2 = Number(cssLeft2);

    if (cssLeft2 < -200) {
        pageTwo.animate(
            [
                { transform: "translate(0px)" },
                { transform: `translate(-${browserX}px)` },
            ],
            {
                duration: 500,
                fill: "forwards",
            }
        );
        clearInterval(turnOverInterval2);
    }
}

// -----------------------------------------------------------------------

let pageThree = document.getElementById(`page-three`);
let turnOver3 = document.getElementById(`turn-over3`);

console.log(browserX);

turnOver3.addEventListener("click", function (e) {
    document.addEventListener("mousemove", function (e) {
        showMouse3(e);
    });
});

function showMouse3(e) {
    let x = e.clientX;
    let y = e.clientY;

    pageThree.style.left = `-${innerWidth - x}px`;

    console.log(x);
    console.log(y);
}

let turnOverInterval3 = setInterval(startTurnOver3, 500);
let cssLeft3;
function startTurnOver3() {
    cssLeft3 = window.getComputedStyle(pageThree);
    cssLeft3 = cssLeft3.getPropertyValue("left");
    cssLeft3 = cssLeft3.slice(0, cssLeft3.length - 2);
    cssLeft3 = Number(cssLeft3);

    if (cssLeft3 < -200) {
        pageThree.animate(
            [
                { transform: "translate(0px)" },
                { transform: `translate(-${browserX}px)` },
            ],
            {
                duration: 500,
                fill: "forwards",
            }
        );
        clearInterval(turnOverInterval3);
    }
}
