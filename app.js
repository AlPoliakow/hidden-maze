const app = document.querySelector(".app");

// create the a heading
const header = document.createElement("h1");
header.innerText="Hidden Maze";
app.appendChild(header);

// create a space for instructions
const instructions = document.createElement("p");
instructions.innerText="Click the buttons to turn and move the robot";
instructions.classList.add("instructions");
app.appendChild(instructions);

// create control buttons section
const controls = document.createElement("div");
controls.classList.add("controls");
app.appendChild(controls);
const turns = document.createElement("div");
turns.classList.add("turns");
controls.appendChild(turns);

// create div for gameboard
const gameBoard = document.createElement("div");
gameBoard.classList.add("gameboard");
app.appendChild(gameBoard);

//create written by section
const by = document.createElement("p");
by.innerText="By Al Poliakow 2024";
by.classList.add("by");
app.appendChild(by);
by.style.width="300px";

const gridBot = document.createElementNS("http://www.w3.org/2000/svg", `svg`);
const robotInfo = getComputedStyle(gridBot);

const robotTransform = robotInfo.getPropertyValue("transform");

// create a 5x5 gameboard
for (let i = 1; i < 26; i++) {
    const gridItem = document.createElement("div");
    gridItem.classList.add("grid-item");
    //add the class "space" for styling
    gridItem.classList.add("space");
    // add index attribute 
    gridItem.setAttribute("index", i);
    // add each space to the board
    gameBoard.appendChild(gridItem);

    //square 13 appendChild image
    if (i == 13) {
        const iconPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');

        gridBot.setAttribute('fill', '#5c5c5c'); //colours it in
        gridBot.setAttribute('viewBox', '0 0 640 512'); //from svg link
        gridBot.setAttribute('stroke', '#5c5c5c'); // color
        gridBot.setAttribute("transform", `rotate(0)`); // to make advancing work before button pressing

        iconPath.setAttribute("d", "M320 0c17.7 0 32 14.3 32 32l0 64 120 0c39.8 0 72 32.2 72 72l0 272c0 39.8-32.2 72-72 72l-304 0c-39.8 0-72-32.2-72-72l0-272c0-39.8 32.2-72 72-72l120 0 0-64c0-17.7 14.3-32 32-32zM208 384c-8.8 0-16 7.2-16 16s7.2 16 16 16l32 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-32 0zm96 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l32 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-32 0zm96 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l32 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-32 0zM264 256a40 40 0 1 0 -80 0 40 40 0 1 0 80 0zm152 40a40 40 0 1 0 0-80 40 40 0 1 0 0 80zM48 224l16 0 0 192-16 0c-26.5 0-48-21.5-48-48l0-96c0-26.5 21.5-48 48-48zm544 0c26.5 0 48 21.5 48 48l0 96c0 26.5-21.5 48-48 48l-16 0 0-192 16 0z");
        iconPath.setAttribute('stroke-width', '6'); //thickness of lines
        gridBot.appendChild(iconPath);
        gridBot.classList.add("robot");


        gridItem.appendChild(gridBot);
        console.log(gridItem);
    }
}

// get all divs
const divs = document.querySelectorAll(".space");

// create a button to rotate the robot upwards
const rotateUp = document.createElement("button");
rotateUp.innerText = "Face up";
rotateUp.style.margin="10px 40px";
turns.appendChild(rotateUp);

//make the button functional
rotateUp.addEventListener("click", function (e) {
    e.preventDefault();
    gridBot.setAttribute("transform", `rotate(180)`);
    //console.log(robotInfo.getPropertyValue("transform"));// matrix(-1, 0, 0, -1, 0, 0)
})


// create a button to rotate the robot left
const rotateLeft = document.createElement("button");
rotateLeft.innerText = "Face left";
rotateLeft.style.margin="0 5px";
turns.appendChild(rotateLeft);

// make the button functional
rotateLeft.addEventListener("click", function (e) {
    e.preventDefault();
    gridBot.setAttribute("transform", `rotate(90)`);
    // console.log(robotInfo.getPropertyValue("transform")); // matrix(0, 1, -1, 0, 0, 0)
})

// create a button to rotate the robot right
const rotateRight = document.createElement("button");
rotateRight.innerText = "Face right";
rotateRight.style.margin="0 5px";
turns.appendChild(rotateRight);

rotateRight.addEventListener("click", function (e) {
    e.preventDefault();
    gridBot.setAttribute("transform", `rotate(-90)`);
    // console.log(robotInfo.getPropertyValue("transform")); //matrix(0, -1, 1, 0, 0, 0)
})


// create a button to rotate the robot downwards
const rotateDown = document.createElement("button");
rotateDown.innerText = "Face down";
rotateDown.style.margin="10px 40px";
turns.appendChild(rotateDown);

// make the button functional
rotateDown.addEventListener("click", function (e) {
    e.preventDefault();
    gridBot.setAttribute("transform", `rotate(0)`);
    //console.log(robotInfo.getPropertyValue("transform")); //matrix(1, 0, 0, 1, 0, 0)
})

const advance = document.createElement("button");
advance.style.margin="25px 30px";
advance.style.width="60px";
advance.innerText = "Move";
controls.appendChild(advance);

advance.addEventListener("click", function (e) {
    e.preventDefault();
    //console.log("clicked");
    let parent = gridBot.parentElement.getAttribute("index");
    console.log(parent); // 13
    let parentNumber = parseInt(parent);
    console.log(parentNumber);
    let parentLefty = parentNumber -= 1;
    console.log(parentLefty);
    let parentRighty = parentNumber += 2; // "+= 1" returned 13 (?)
    console.log(parentRighty);
    let parentUppy = parentNumber -= 6;
    console.log(parentUppy);
    let parentUndery = parentNumber += 10;
    console.log(parentUndery);
    console.log(parent);

    instructions.innerText="Click the buttons to turn and move the robot";

    switch (robotInfo.getPropertyValue("transform")) {
        case "matrix(1, 0, 0, 1, 0, 0)":
            console.log("Rotation 0");
            divs.forEach((div) => {
                // isolate div index
                const divIndex = div.getAttribute("index");
                //console.log(divIndex);
                const divIndexNumber = parseInt(divIndex);
                //console.log(divIndexNumber);


                switch (parent) {  // processing the parent divs index
                    //make it move
                    case '1':
                    case '2':
                    case '3':
                    case '4':
                    case '5':
                    case '6':
                    case '7':
                    case '8':
                    case '9':
                    case '10':
                    case '11':
                    case '12':
                    case '13':
                    case '14':
                    case '15':
                    case '16':
                    case '17':
                    case '18':
                    case '19':
                    case '20':
                        console.log("Move");
                        if (divIndexNumber == parentUndery) {
                            div.appendChild(gridBot);
                            console.log("attempted to shift down");
                        }
                        break;
                    //make it stop at the bottom border
                    case '21':
                    case '22':
                    case '23':
                    case '24':
                    case '25':
                        console.log("do not advance"); //registered
                        instructions.innerText = "Oops. You can't go any lower.";
                        break;
                }
            })
            break; 
        case "matrix(0, 1, -1, 0, 0, 0)":
            console.log("Rotation 90");

            divs.forEach((div) => {
                // isolate div index
                const divIndex = div.getAttribute("index");
                //console.log(divIndex);
                const divIndexNumber = parseInt(divIndex);
                //console.log(divIndexNumber);


                switch (parent) {  // processing the parent divs index
                    //case '13':
                    // console.log("Registered the switch"); //registered
                    // break;
                    //make it move
                    case '2':
                    case '3':
                    case '4':
                    case '5':
                    case '7':
                    case '8':
                    case '9':
                    case '10':
                    case '12':
                    case '13':
                    case '14':
                    case '15':
                    case '17':
                    case '18':
                    case '19':
                    case '20':
                    case '22':
                    case '23':
                    case '24':
                    case '25':
                        console.log("Move");
                        if (divIndexNumber == parentLefty) {
                            div.appendChild(gridBot);
                            console.log("attempted to shift left");
                        }
                        break;
                    //make it stop at the left border
                    case '1':
                    case '6':
                    case '11':
                    case '16':
                    case '21':
                        console.log("do not advance"); //registered
                        instructions.innerText = "Oops. There's nowhere *left* to go.";
                        break;
                }
            })
            break;
        case "matrix(0, -1, 1, 0, 0, 0)":
            console.log("Rotation -90");

            divs.forEach((div) => {
                // isolate div index
                const divIndex = div.getAttribute("index");
                //console.log(divIndex);
                const divIndexNumber = parseInt(divIndex);
                //console.log(divIndexNumber);


                switch (parent) {  // processing the parent divs index
                    //case '13':
                    // console.log("Registered the switch"); //registered
                    // break;
                    //make it move
                    case '1':
                    case '2':
                    case '3':
                    case '4':
                    case '6':
                    case '7':
                    case '8':
                    case '9':
                    case '11':
                    case '12':
                    case '13':
                    case '14':
                    case '16':
                    case '17':
                    case '18':
                    case '19':
                    case '21':
                    case '22':
                    case '23':
                    case '24':
                        console.log("Move");
                        if (divIndexNumber == parentRighty) {
                            div.appendChild(gridBot);
                            console.log("attempted to shift right");
                        }
                        break;
                    //make it stop at the left border
                    case '5':
                    case '10':
                    case '15':
                    case '20':
                    case '25':
                        console.log("do not advance"); //registered
                        instructions.innerText = "Oops. Two rights is not making a left.";
                        break;
                }
            })
            break;
        case "matrix(-1, 0, 0, -1, 0, 0)":
            console.log("Rotation 180");
            divs.forEach((div) => {
                // isolate div index
                const divIndex = div.getAttribute("index");
                //console.log(divIndex);
                const divIndexNumber = parseInt(divIndex);
                //console.log(divIndexNumber);


                switch (parent) {  // processing the parent divs index
                    //case '13':
                    // console.log("Registered the switch"); //registered
                    // break;
                    //make it move
                    
                    case '6':
                    case '7':
                    case '8':
                    case '9':
                    case '10':
                    case '11':
                    case '12':
                    case '13':
                    case '14':
                    case '15':
                    case '16':
                    case '17':
                    case '18':
                    case '19':
                    case '20':
                    case '21':
                    case '22':
                    case '23':
                    case '24':
                    case '25':
                        console.log("Move");
                        if (divIndexNumber == parentUppy) {
                            div.appendChild(gridBot);
                            console.log("attempted to shift up");
                        }
                        break;
                    //make it stop at the bottom border
                    case '1':
                    case '2':
                    case '3':
                    case '4':
                    case '5':
                        console.log("do not advance"); //registered
                        instructions.innerText = "Oops. You've already reached the top.";
                        break;
                }
            })
            break;
    }
})