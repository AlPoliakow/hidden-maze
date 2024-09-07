const app = document.querySelector(".app");

// create the a heading
const header = document.createElement("h1");
header.innerText = "Hidden Maze";
app.appendChild(header);

// create a space for instructions
const instructionsDiv = document.createElement("div");
instructions = document.createElement("p");
const instructionsHeading = document.createElement("h2");
instructionsHeading.innerText = "Instructions:";
instructionsDiv.appendChild(instructionsHeading);
instructions.innerText = "Please select a level";
instructionsDiv.classList.add("instructions");
instructionsDiv.appendChild(instructions);
app.appendChild(instructionsDiv);

// create control buttons section
const controls = document.createElement("div");
controls.classList.add("controls");
controls.classList.add("hide");
app.appendChild(controls);
const turns = document.createElement("div");
turns.classList.add("turns");
turns.classList.add("hide");
controls.appendChild(turns);

// create section for buttons for level selection
const levelSelect = document.createElement("div");
levelSelect.classList.add("levels");
app.appendChild(levelSelect);
//demo level button
const demoLevel = document.createElement("button");
demoLevel.innerText = "Level One";
levelSelect.appendChild(demoLevel);
// level 2 button
const levelTwo = document.createElement("button");
levelTwo.innerText = "Level Two";
levelSelect.appendChild(levelTwo);

// create div for gameboard
const gameBoard = document.createElement("div");
gameBoard.classList.add("gameboard");
app.appendChild(gameBoard);

//create written by section
const by = document.createElement("p");
by.innerText = "By Al Poliakow 2024";
by.classList.add("by");
app.appendChild(by);
by.style.width = "300px";

const gridBot = document.createElementNS("http://www.w3.org/2000/svg", `svg`);
const robotInfo = getComputedStyle(gridBot);

const robotTransform = robotInfo.getPropertyValue("transform");

// create a 5x5 gameboard on Level One button click
demoLevel.addEventListener("click", function (e) {
    //show controls
    controls.classList.remove("hide");
    turns.classList.remove("hide");
    //hide select level buttons
    levelSelect.classList.add("hide");
    for (let i = 1; i < 26; i++) {
        const gridItem = document.createElement("div");
        gridItem.classList.add("grid-item");
        //add the class "space" for styling
        gridItem.classList.add("space");
        // add index attribute 
        gridItem.setAttribute("index", i);
        // add each space to the board
        gameBoard.appendChild(gridItem);
    }
    // get all divs
    const divs = document.querySelectorAll(".space");

    // allocate start and finish squares
    divs.forEach((div) => {
        // isolate div index
        const divIndex = div.getAttribute("index");
        //console.log(divIndex);
        const divIndexNumber = parseInt(divIndex);
        //console.log(divIndexNumber);
        //if (divIndexNumber == 1) {
        // div.innerHTML = `<p class="start">Start</p>`;
        //console.log("Show start");
        // div.style.background="green";
        // }
        if (divIndexNumber == 25) {
            div.innerHTML = `<p class="finish">Finish</p>`;
            console.log("Show Finish");
            div.style.background = "red";
        }
    });


    // create creature 
    const iconPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    gridBot.setAttribute('fill', '#5c5c5c'); //colours it in
    gridBot.setAttribute('viewBox', '0 0 640 512'); //from svg link
    gridBot.setAttribute('stroke', '#5c5c5c'); // color
    gridBot.setAttribute("transform", `rotate(0)`); // to make advancing work before button pressing
    iconPath.setAttribute("d", "M320 0c17.7 0 32 14.3 32 32l0 64 120 0c39.8 0 72 32.2 72 72l0 272c0 39.8-32.2 72-72 72l-304 0c-39.8 0-72-32.2-72-72l0-272c0-39.8 32.2-72 72-72l120 0 0-64c0-17.7 14.3-32 32-32zM208 384c-8.8 0-16 7.2-16 16s7.2 16 16 16l32 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-32 0zm96 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l32 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-32 0zm96 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l32 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-32 0zM264 256a40 40 0 1 0 -80 0 40 40 0 1 0 80 0zm152 40a40 40 0 1 0 0-80 40 40 0 1 0 0 80zM48 224l16 0 0 192-16 0c-26.5 0-48-21.5-48-48l0-96c0-26.5 21.5-48 48-48zm544 0c26.5 0 48 21.5 48 48l0 96c0 26.5-21.5 48-48 48l-16 0 0-192 16 0z");
    iconPath.setAttribute('stroke-width', '6'); //thickness of lines
    gridBot.appendChild(iconPath);
    gridBot.classList.add("robot");
    //append creature to first div
    gameBoard.firstChild.append(gridBot);

    // create a button to rotate the robot upwards
    const rotateUp = document.createElement("button");
    rotateUp.innerText = "Face up";
    rotateUp.style.margin = "10px 40px";
    turns.appendChild(rotateUp);

    //make the button functional
    rotateUp.addEventListener("click", function (e) {
        e.preventDefault();
        gridBot.setAttribute("transform", `rotate(180)`);
        instructions.innerText = "Click the buttons to turn and move the robot";
        //console.log(robotInfo.getPropertyValue("transform"));// matrix(-1, 0, 0, -1, 0, 0)
    })


    // create a button to rotate the robot left
    const rotateLeft = document.createElement("button");
    rotateLeft.innerText = "Face left";
    rotateLeft.style.margin = "0 5px";
    turns.appendChild(rotateLeft);

    // make the button functional
    rotateLeft.addEventListener("click", function (e) {
        e.preventDefault();
        gridBot.setAttribute("transform", `rotate(90)`);
        instructions.innerText = "Click the buttons to turn and move the robot";
        // console.log(robotInfo.getPropertyValue("transform")); // matrix(0, 1, -1, 0, 0, 0)
    })

    // create a button to rotate the robot right
    const rotateRight = document.createElement("button");
    rotateRight.innerText = "Face right";
    rotateRight.style.margin = "0 5px";
    turns.appendChild(rotateRight);

    rotateRight.addEventListener("click", function (e) {
        e.preventDefault();
        gridBot.setAttribute("transform", `rotate(-90)`);
        instructions.innerText = "Click the buttons to turn and move the robot";
        // console.log(robotInfo.getPropertyValue("transform")); //matrix(0, -1, 1, 0, 0, 0)
    })


    // create a button to rotate the robot downwards
    const rotateDown = document.createElement("button");
    rotateDown.innerText = "Face down";
    rotateDown.style.margin = "10px 40px";
    turns.appendChild(rotateDown);

    // make the button functional
    rotateDown.addEventListener("click", function (e) {
        e.preventDefault();
        gridBot.setAttribute("transform", `rotate(0)`);
        instructions.innerText = "Click the buttons to turn and move the robot";
        //console.log(robotInfo.getPropertyValue("transform")); //matrix(1, 0, 0, 1, 0, 0)
    })

    const advance = document.createElement("button");
    advance.style.margin = "25px 30px";
    advance.style.width = "60px";
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

        instructions.innerText = "Click the buttons to turn and move the robot";

        switch (robotInfo.getPropertyValue("transform")) {
            case "matrix(1, 0, 0, 1, 0, 0)":
                //if the creature is facing down
                console.log("Rotation 0");
                divs.forEach((div) => {
                    // isolate div index
                    const divIndex = div.getAttribute("index");
                    //console.log(divIndex);
                    const divIndexNumber = parseInt(divIndex);
                    //console.log(divIndexNumber);


                    switch (parent) {  // processing the parent divs index
                        //make the creature shift down a space
                        case '1':
                        case '7':
                        case '13':
                        case '19':
                            console.log("Move");
                            if (divIndexNumber == parentUndery) {
                                div.appendChild(gridBot);
                                console.log("attempted to shift down");
                            }
                            break;
                        //make the div below turn black and stop at the bottom
                        case '2':
                        case '3':
                        case '4':
                        case '5':
                        case '6':
                        case '8':
                        case '9':
                        case '10':
                        case '11':
                        case '12':
                        case '14':
                        case '15':
                        case '16':
                        case '17':
                        case '18':
                        case '20':
                        case '21':
                        case '22':
                        case '23':
                        case '24':
                        case '25':
                            console.log("do not advance"); //registered
                            instructions.innerText = "You've hit a wall";
                            //select for the div below 
                            if (divIndexNumber == parentUndery) {
                                div.classList.add("wall");
                                console.log("revealed a wall");
                            }
                            break;
                    }
                })
                break;
            case "matrix(0, 1, -1, 0, 0, 0)":
                //facing left
                console.log("Rotation 90");

                divs.forEach((div) => {
                    // isolate div index
                    const divIndex = div.getAttribute("index");
                    //console.log(divIndex);
                    const divIndexNumber = parseInt(divIndex);
                    //console.log(divIndexNumber);


                    switch (parent) {  // processing the parent divs index
                        //make it move left
                        case '7':
                        case '13':
                        case '19':
                        case '25':
                            console.log("Move");
                            if (divIndexNumber == parentLefty) {
                                div.appendChild(gridBot);
                                console.log("attempted to shift left");
                            }
                            break;
                        //make it stop at the left border and walls
                        case '1':
                        case '2':
                        case '3':
                        case '4':
                        case '5':
                        case '6':
                        case '8':
                        case '9':
                        case '10':
                        case '11':
                        case '12':
                        case '14':
                        case '15':
                        case '16':
                        case '17':
                        case '18':
                        case '20':
                        case '21':
                        case '22':
                        case '23':
                        case '24':
                            console.log("do not advance"); //registered
                            instructions.innerText = "You've hit a wall";
                            if (divIndexNumber == parentLefty) {
                                div.classList.add("wall");
                                console.log("revealed a wall");
                            }
                            break;
                    }
                })
                break;
            case "matrix(0, -1, 1, 0, 0, 0)":
                //facing right
                console.log("Rotation -90");
                divs.forEach((div) => {
                    // isolate div index
                    const divIndex = div.getAttribute("index");
                    //console.log(divIndex);
                    const divIndexNumber = parseInt(divIndex);
                    //console.log(divIndexNumber);

                    switch (parent) {  // processing the parent divs index
                        //make it move
                        case '6':
                        case '12':
                        case '18':
                        case '24':
                            console.log("Move right");
                            if (divIndexNumber == parentRighty) {
                                div.appendChild(gridBot);
                                console.log("Moved right");
                            }
                            break;
                        //make it stop at the right border and walls and reveal walls to right
                        case '1':
                        case '2':
                        case '3':
                        case '4':
                        case '5':
                        case '7':
                        case '8':
                        case '9':
                        case '10':
                        case '11':
                        case '13':
                        case '14':
                        case '15':
                        case '16':
                        case '17':
                        case '19':
                        case '20':
                        case '21':
                        case '22':
                        case '23':
                        case '25':
                            console.log("do not advance"); //registered
                            if (divIndexNumber == parentRighty) {
                                div.classList.add("wall");
                                console.log("revealed a wall to the right");
                            }
                            instructions.innerText = "You've hit a wall";
                            break;
                    }
                })
                break;
            case "matrix(-1, 0, 0, -1, 0, 0)":
                //facing up
                console.log("Rotation 180");
                divs.forEach((div) => {
                    // isolate div index
                    const divIndex = div.getAttribute("index");
                    //console.log(divIndex);
                    const divIndexNumber = parseInt(divIndex);
                    //console.log(divIndexNumber);

                    switch (parent) {  // processing the parent divs index
                        //make it move up
                        case '6':
                        case '12':
                        case '18':
                        case '24':
                            console.log("Move up");
                            if (divIndexNumber == parentUppy) {
                                div.appendChild(gridBot);
                                console.log("attempted to shift up");
                            }
                            break;
                        //make it stop at the top border and walls and reveal walls
                        case '1':
                        case '2':
                        case '3':
                        case '4':
                        case '5':
                        case '7':
                        case '8':
                        case '9':
                        case '10':
                        case '11':
                        case '13':
                        case '14':
                        case '15':
                        case '16':
                        case '17':
                        case '19':
                        case '20':
                        case '21':
                        case '22':
                        case '23':
                        case '25':
                            console.log("do not advance"); //registered
                            instructions.innerText = "You've hit a wall";
                            if (divIndexNumber == parentUppy) {
                                div.classList.add("wall");
                                console.log("revealed a wall");
                            }
                            break;
                    }
                })
                break;
        }

        //check to see if the creature has reached the end 
        const checkForWin = function () {
            if (gridBot.parentElement.getAttribute("index") == 25) {
                instructions.innerText = "You made it!";
                instructions.classList.add("win");
                console.log("Win");
            }
        };
        checkForWin();
    })
})

levelTwo.addEventListener("click", function (e) {
    //show controls
    controls.classList.remove("hide");
    turns.classList.remove("hide");
    //hide select level buttons
    levelSelect.classList.add("hide");

    for (let i = 1; i < 101; i++) {
        const gridItem = document.createElement("div");
        gridItem.classList.add("grid-item2"); // different class for different size spaces
        // add index attribute 
        gridItem.setAttribute("index", i);
        gridItem.innerText = i;
        // add each space to the board
        gameBoard.appendChild(gridItem);
    }

    // get all divs
    const divs = document.querySelectorAll(".grid-item2");

    // allocate start and finish squares
    divs.forEach((div) => {
        // isolate div index
        const divIndex = div.getAttribute("index");
        //console.log(divIndex);
        const divIndexNumber = parseInt(divIndex);

        if (divIndexNumber == 100) {
            div.innerHTML = `<p class="finish2">Finish</p>`; //class changed for size adaptations
            console.log("Show Finish");
            div.style.background = "red";
        }
    });


    // create creature 
    const iconPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    gridBot.setAttribute('fill', '#5c5c5c'); //colours it in
    gridBot.setAttribute('viewBox', '0 0 640 512'); //from svg link
    gridBot.setAttribute('stroke', '#5c5c5c'); // color
    gridBot.setAttribute("transform", `rotate(0)`); // to make advancing work before button pressing
    iconPath.setAttribute("d", "M320 0c17.7 0 32 14.3 32 32l0 64 120 0c39.8 0 72 32.2 72 72l0 272c0 39.8-32.2 72-72 72l-304 0c-39.8 0-72-32.2-72-72l0-272c0-39.8 32.2-72 72-72l120 0 0-64c0-17.7 14.3-32 32-32zM208 384c-8.8 0-16 7.2-16 16s7.2 16 16 16l32 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-32 0zm96 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l32 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-32 0zm96 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l32 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-32 0zM264 256a40 40 0 1 0 -80 0 40 40 0 1 0 80 0zm152 40a40 40 0 1 0 0-80 40 40 0 1 0 0 80zM48 224l16 0 0 192-16 0c-26.5 0-48-21.5-48-48l0-96c0-26.5 21.5-48 48-48zm544 0c26.5 0 48 21.5 48 48l0 96c0 26.5-21.5 48-48 48l-16 0 0-192 16 0z");
    iconPath.setAttribute('stroke-width', '6'); //thickness of lines
    gridBot.appendChild(iconPath);
    gridBot.classList.add("robot2"); // smaller size for smaller square
    //append creature to first div
    gameBoard.firstChild.append(gridBot);

    // create a button to rotate the robot upwards
    const rotateUp = document.createElement("button");
    rotateUp.innerText = "Face up";
    rotateUp.style.margin = "10px 40px";
    turns.appendChild(rotateUp);

    //make the button functional
    rotateUp.addEventListener("click", function (e) {
        e.preventDefault();
        gridBot.setAttribute("transform", `rotate(180)`);
        instructions.innerText = "Click the buttons to turn and move the robot";
        //console.log(robotInfo.getPropertyValue("transform"));// matrix(-1, 0, 0, -1, 0, 0)
    })


    // create a button to rotate the robot left
    const rotateLeft = document.createElement("button");
    rotateLeft.innerText = "Face left";
    rotateLeft.style.margin = "0 5px";
    turns.appendChild(rotateLeft);

    // make the button functional
    rotateLeft.addEventListener("click", function (e) {
        e.preventDefault();
        gridBot.setAttribute("transform", `rotate(90)`);
        instructions.innerText = "Click the buttons to turn and move the robot";
        // console.log(robotInfo.getPropertyValue("transform")); // matrix(0, 1, -1, 0, 0, 0)
    })

    // create a button to rotate the robot right
    const rotateRight = document.createElement("button");
    rotateRight.innerText = "Face right";
    rotateRight.style.margin = "0 5px";
    turns.appendChild(rotateRight);

    rotateRight.addEventListener("click", function (e) {
        e.preventDefault();
        gridBot.setAttribute("transform", `rotate(-90)`);
        instructions.innerText = "Click the buttons to turn and move the robot";
        // console.log(robotInfo.getPropertyValue("transform")); //matrix(0, -1, 1, 0, 0, 0)
    })


    // create a button to rotate the robot downwards
    const rotateDown = document.createElement("button");
    rotateDown.innerText = "Face down";
    rotateDown.style.margin = "10px 40px";
    turns.appendChild(rotateDown);

    // make the button functional
    rotateDown.addEventListener("click", function (e) {
        e.preventDefault();
        gridBot.setAttribute("transform", `rotate(0)`);
        instructions.innerText = "Click the buttons to turn and move the robot";
        //console.log(robotInfo.getPropertyValue("transform")); //matrix(1, 0, 0, 1, 0, 0)
    })

    const advance = document.createElement("button");
    advance.style.margin = "25px 30px";
    advance.style.width = "60px";
    advance.innerText = "Move";
    controls.appendChild(advance);

    advance.addEventListener("click", function (e) {
        e.preventDefault();
        //console.log("clicked");
        const parent = gridBot.parentElement.getAttribute("index");
        console.log(parent); // 13
        let parentNumber = parseInt(parent);
        console.log(parentNumber);
        let parentLefty = parentNumber -= 1;
        console.log(parentLefty);
        let parentRighty = parentNumber += 2; // "+= 1" returned 13 (?)
        console.log(parentRighty);
        let parentUppy = parentNumber -= 11; // found via trial and error
        console.log(parentUppy);
        let parentUndery = parentNumber += 20; // found via trial and error
        console.log(parentUndery);
        console.log(parent);

        instructions.innerText = "Click the buttons to turn and move the robot";

        switch (robotInfo.getPropertyValue("transform")) {
            case "matrix(1, 0, 0, 1, 0, 0)":
                //if the creature is facing down
                console.log("Rotation 0");
                divs.forEach((div) => {
                    // isolate div index
                    const divIndex = div.getAttribute("index");
                    //console.log(divIndex);
                    const divIndexNumber = parseInt(divIndex);
                    //console.log(divIndexNumber);

                    if (parent == 1 | parent == 7 | parent == 17 | parent == 10 | parent == 11 | parent == 20 | parent == 21 | parent == 23 | parent == 25 | parent == 28 | parent == 30 | parent == 35 | parent == 38 |parent == 40 | parent == 45 | parent == 47 | parent == 50 | parent == 53 | parent == 57 |  parent == 60 | parent == 62 | parent == 67 | parent == 70 | parent == 71 | parent == 78 |  parent == 80 | parent == 81 | parent == 83 | parent == 85 | parent == 88 | parent == 90) {
                        if (divIndexNumber == parentUndery) {
                            div.appendChild(gridBot);
                            console.log("attempted to shift down");
                        }
                    } else if (parent == 91 | parent == 92 | parent == 93 | parent == 95 | parent == 96 | parent == 97 | parent == 98 | parent == 100) {
                        instructions.innerText = "You've hit a wall";
                    } else {
                        instructions.innerText = "You've hit a wall";
                        //select for the div below 
                        if (divIndexNumber == parentUndery) {
                            div.classList.add("wall");
                            console.log("revealed a wall");
                            //}
                        }
                    }
                })
                break;
            case "matrix(0, 1, -1, 0, 0, 0)":
                //facing left
                divs.forEach((div) => {
                    // isolate div index
                    const divIndex = div.getAttribute("index");
                    //console.log(divIndex);
                    const divIndexNumber = parseInt(divIndex);
                    //console.log(divIndexNumber);

                    if (parent == 8 | parent == 9 | parent == 10 | parent == 24 | parent == 25 | parent == 28 | parent == 32 | parent == 33 | parent == 54 | parent == 55 | parent == 58 | parent == 63 | parent == 72 | parent == 78 | parent == 84 | parent == 85 | parent == 92 | parent == 93 | parent == 96 | parent == 97 | parent == 98) {
                        if (divIndexNumber == parentLefty) {
                            div.appendChild(gridBot);
                            console.log("attempted to shift left");
                        }
                     } else if (parent == 1 | parent == 11 | parent == 21 | parent == 71 | parent == 81 | parent == 91) {
                            instructions.innerText = "You've hit a wall";
                        } else {
                            instructions.innerText = "You've hit a wall";
                            //select for the div below 
                            if (divIndexNumber == parentLefty) {
                                div.classList.add("wall");
                                console.log("revealed a wall");
                            }
                        }
                })
                break;
            case "matrix(0, -1, 1, 0, 0, 0)":
                //facing right
                //console.log("Rotation -90");
                divs.forEach((div) => {
                    // isolate div index
                    const divIndex = div.getAttribute("index");
                    //console.log(divIndex);
                    const divIndexNumber = parseInt(divIndex);
                    //console.log(divIndexNumber);
                    if (parent == 7 | parent == 8 | parent == 9 | parent == 23 | parent == 24 | parent == 27 | parent == 31 | parent == 32 | parent == 47 | parent == 53 | parent == 54 | parent == 62 | parent == 71 | parent == 77 | parent == 83 | parent == 84 | parent == 91 | parent == 92 | parent == 95 | parent == 96 | parent == 97) {
                        if (divIndexNumber == parentRighty) {
                            div.appendChild(gridBot);
                            console.log("attempted to shift right");
                        }
                    } else if (parent == 10 | parent == 20 | parent == 30 | parent == 40 | parent == 50 | parent == 60 | parent == 70 | parent == 80 | parent == 90 | parent == 100) {
                        instructions.innerText = "You've hit a wall";
                    } else {
                        instructions.innerText = "You've hit a wall";
                        //select for the div below 
                        if (divIndexNumber == parentRighty) {
                            div.classList.add("wall");
                            console.log("revealed a wall");
                        }
                    }
                })
                break;
            case "matrix(-1, 0, 0, -1, 0, 0)":
                //facing up
                console.log("Rotation 180");
                divs.forEach((div) => {
                    // isolate div index
                    const divIndex = div.getAttribute("index");
                    //console.log(divIndex);
                    const divIndexNumber = parseInt(divIndex);
                    //console.log(divIndexNumber);

                    if (parent == 11 | parent == 17 | parent == 20 | parent == 21 | parent == 27 | parent == 30 | parent == 33 | parent == 35 | parent == 38 | parent == 40 | parent == 45 | parent == 48 | parent == 50 | parent == 55 | parent == 57 | parent == 60 | parent == 63 | parent == 67 | parent == 70 | parent == 72 | parent == 77 | parent == 80 | parent == 81 | parent == 88 | parent == 90 | parent == 93 | parent == 95 | parent == 98) {
                        if (divIndexNumber == parentUppy) {
                            div.appendChild(gridBot);
                            console.log("attempted to shift up");
                        } 
                    } else if (parent == 1 | parent == 7 | parent == 8 | parent == 9 | parent == 10) {
                        instructions.innerText = "You've hit a wall";
                    } else {
                            instructions.innerText = "You've hit a wall";
                            //select for the div below 
                            if (divIndexNumber == parentUppy) {
                                div.classList.add("wall");
                                console.log("revealed a wall");
                            }
                        }
                })
                break;
        }

        //check to see if the creature has reached the end 
        const checkForWin = function () {
            if (gridBot.parentElement.getAttribute("index") == 100) {
                instructionsHeading.innerText = "You made it!";
                instructions.innerText="";
                instructionsDiv.classList.add("win");
                console.log("Win");
            }
        };
        checkForWin();
    })
})

