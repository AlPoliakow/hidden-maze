const app = document.querySelector(".app");

// create the heading
const header = document.createElement("header");
const heading = document.createElement("h1");
heading.innerText = "Hidden Maze";
header.appendChild(heading);
app.appendChild(header);

//create a main section
const main = document.createElement("main");
app.appendChild(main);

// create a div for instructions with a heading and paragraph
const startInstructionsDiv = document.createElement("div");
startInstructions = document.createElement("p");
startInstructions.innerText = "Please click or tap on an option below to select a difficulty level";
startInstructionsDiv.classList.add("startInstructions");
startInstructionsDiv.appendChild(startInstructions);
startInstructionsDiv.classList.add("startInstructions");
main.appendChild(startInstructionsDiv);

// create section for buttons for level selection
const levelSelect = document.createElement("div");
levelSelect.classList.add("levels");
main.appendChild(levelSelect);
//demo level button
const demoLevel = document.createElement("button");
demoLevel.innerText = "Level 1";
levelSelect.appendChild(demoLevel);
// level 2 button
const levelTwo = document.createElement("button");
levelTwo.innerText = "Level 2";
levelSelect.appendChild(levelTwo);

//create a footer section
const footer = document.createElement("footer");
app.appendChild(footer);

//create written by section
const by = document.createElement("p");
by.innerText = "By Al Poliakow 2024";
by.classList.add("by");
footer.appendChild(by);

//create Start Again button and hide it
const startAgain = document.createElement("button");
startAgain.innerText = "Start again";
startAgain.classList.add("startAgain");
startAgain.classList.add("hide");
main.appendChild(startAgain);

// create div for main area
const game = document.createElement("div");
game.classList.add("game");
game.classList.add("hide");
main.appendChild(game);

// create a div for instructions with a heading and paragraph
const instructionsDiv = document.createElement("div");
instructions = document.createElement("p");
instructions.innerHTML = "Click the buttons to turn and move the creature to the green square <br><br> Be careful to avoid the hidden walls!";
instructionsDiv.classList.add("instructions");
instructionsDiv.appendChild(instructions);
game.appendChild(instructionsDiv);

// create control buttons section
const controls = document.createElement("div");
controls.classList.add("controls");
//controls.classList.add("hide"); ?remove 
game.appendChild(controls);
const turns = document.createElement("div");
turns.classList.add("turns");
//turns.classList.add("hide"); ?remove
controls.appendChild(turns);

// Re-start function
startAgain.addEventListener("click", function (e) {
    //hide start again button
    startAgain.classList.add("hide");
    //clear gameboard
    gameBoard.innerHTML = "";
    //re-set controls content 
    controls.innerHTML = "";
    turns.innerHTML = "";
    controls.appendChild(turns);
    //hide game
    game.classList.add("hide");
    //re-create start screen
    win.classList.add("hide");
    startInstructionsDiv.classList.remove("hide");
    levelSelect.classList.remove("hide");
    //resize 
    app.style.height = "100vh";
})


// create div for gameboard
const gameBoard = document.createElement("div");
gameBoard.classList.add("gameboard");
gameBoard.classList.add("hide");
game.appendChild(gameBoard);


// create win message
const win = document.createElement("div");
win.classList.add("win");
win.innerText = "You made it!!!"
win.classList.add("hide");


const gridBot = document.createElementNS("http://www.w3.org/2000/svg", `svg`);
//const gridBot = document.createElement("div");
const creatureInfo = getComputedStyle(gridBot);

// create a 5x5 gameboard on Level One button click
demoLevel.addEventListener("click", function (e) {
    //resize 
    app.style.height = "auto";
    //hide starting instructions and level selection
    startInstructionsDiv.classList.add("hide");
    levelSelect.classList.add("hide");
    //show the game
    game.classList.remove("hide");
    gameBoard.classList.remove("hide");
    controls.classList.remove("hide");
    turns.classList.remove("hide");
    instructionsDiv.classList.remove("hide");

    //create gameboard
    for (let i = 1; i < 26; i++) {
        const gridItem = document.createElement("div");
        gridItem.classList.add("grid-item");
        gridItem.classList.add("levelOne");
        // add index attribute 
        gridItem.setAttribute("index", i);
        // add each space to the board
        gameBoard.appendChild(gridItem);
    }
    // select all the spaces
    const divs = document.querySelectorAll(".grid-item");

    // allocate start and finish squares
    divs.forEach((div) => {
        // isolate div index
        const divIndex = div.getAttribute("index");
        const divIndexNumber = parseInt(divIndex);
        // select for the 25th space
        if (divIndexNumber == 25) {
            div.innerHTML = `<p class="finish">Finish</p>`;
            div.classList.add("finishSquare");
            console.log("Show Finish");
            //div.style.background = " #80b883";
        }
    });
    game.appendChild(win);


    // create creature 
    const iconPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    gridBot.setAttribute('fill', '#916760'); //colours it in
    gridBot.setAttribute('viewBox', '0 0 512 512'); //from svg link
    gridBot.setAttribute('stroke', '#5c5c5c'); // color
    gridBot.setAttribute("transform", `rotate(0)`); // to make advancing work before button pressing
    //iconPath.setAttribute("d", "M320 0c17.7 0 32 14.3 32 32l0 64 120 0c39.8 0 72 32.2 72 72l0 272c0 39.8-32.2 72-72 72l-304 0c-39.8 0-72-32.2-72-72l0-272c0-39.8 32.2-72 72-72l120 0 0-64c0-17.7 14.3-32 32-32zM208 384c-8.8 0-16 7.2-16 16s7.2 16 16 16l32 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-32 0zm96 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l32 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-32 0zm96 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l32 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-32 0zM264 256a40 40 0 1 0 -80 0 40 40 0 1 0 80 0zm152 40a40 40 0 1 0 0-80 40 40 0 1 0 0 80zM48 224l16 0 0 192-16 0c-26.5 0-48-21.5-48-48l0-96c0-26.5 21.5-48 48-48zm544 0c26.5 0 48 21.5 48 48l0 96c0 26.5-21.5 48-48 48l-16 0 0-192 16 0z");
    iconPath.setAttribute("d", "M256 0a256 256 0 1 0 0 512A256 256 0 1 0 256 0zM135 241c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l87 87 87-87c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9L273 345c-9.4 9.4-24.6 9.4-33.9 0L135 241z");
    iconPath.setAttribute('stroke-width', '6'); //thickness of lines
    gridBot.appendChild(iconPath);
    gridBot.classList.add("creature");
    //append creature to first div
    gameBoard.firstChild.append(gridBot);


    // create a button to rotate the creature upwards
    const rotateUp = document.createElement("button");
    rotateUp.innerText = "Face up";
    rotateUp.style.margin = "10px 40px";
    turns.appendChild(rotateUp);

    //make the creature rotate up
    rotateUp.addEventListener("click", function (e) {
        e.preventDefault();
        gridBot.setAttribute("transform", `rotate(180)`);
        //console.log(creatureInfo.getPropertyValue("transform"));// matrix(-1, 0, 0, -1, 0, 0)
    })

    // create a button to rotate the creature left
    const rotateLeft = document.createElement("button");
    rotateLeft.innerText = "Face left";
    rotateLeft.style.margin = "0 5px";
    turns.appendChild(rotateLeft);

    // make the creature rotate left
    rotateLeft.addEventListener("click", function (e) {
        e.preventDefault();
        gridBot.setAttribute("transform", `rotate(90)`);
        // console.log(creatureInfo.getPropertyValue("transform")); // matrix(0, 1, -1, 0, 0, 0)
    })

    // create a button to rotate the creature right
    const rotateRight = document.createElement("button");
    rotateRight.innerText = "Face right";
    rotateRight.style.margin = "0 5px";
    turns.appendChild(rotateRight);

    // make the creature rotate right
    rotateRight.addEventListener("click", function (e) {
        e.preventDefault();
        gridBot.setAttribute("transform", `rotate(-90)`);
        // console.log(creatureInfo.getPropertyValue("transform")); //matrix(0, -1, 1, 0, 0, 0)
    })

    // create a button to rotate the creature downwards
    const rotateDown = document.createElement("button");
    rotateDown.innerText = "Face down";
    rotateDown.style.margin = "10px 40px";
    turns.appendChild(rotateDown);

    // make the creature rotate downwards
    rotateDown.addEventListener("click", function (e) {
        e.preventDefault();
        gridBot.setAttribute("transform", `rotate(0)`);
        //console.log(creatureInfo.getPropertyValue("transform")); //matrix(1, 0, 0, 1, 0, 0)
    })

    const advance = document.createElement("button");
    advance.style.margin = "25px 30px";
    advance.style.width = "60px";
    advance.innerText = "Move";
    controls.appendChild(advance);

    advance.addEventListener("click", function (e) {
        e.preventDefault();
        let parent = gridBot.parentElement.getAttribute("index");
        console.log(parent); // 13
        let parentNumber = parseInt(parent);
        //console.log(parentNumber);
        let parentLefty = parentNumber -= 1;
        //console.log(parentLefty);
        let parentRighty = parentNumber += 2; // "+= 1" returned 13 (?)
        //console.log(parentRighty);
        let parentUppy = parentNumber -= 6;
        //console.log(parentUppy);
        let parentUndery = parentNumber += 10;
        //console.log(parentUndery);

        // update the instructions 
        instructions.innerHTML = "Click the buttons to turn and move the creature to the finish <br><br> Be careful to avoid the hidden walls!";

        // advance the creature in the direction it's facing
        switch (creatureInfo.getPropertyValue("transform")) {
            case "matrix(1, 0, 0, 1, 0, 0)":
                //facing down
                //console.log("Rotation 0");
                divs.forEach((div) => {
                    // isolate div index
                    const divIndex = div.getAttribute("index");
                    //console.log(divIndex);
                    const divIndexNumber = parseInt(divIndex);
                    //console.log(divIndexNumber);

                    switch (parent) {
                        //make the creature shift down a space
                        case '1':
                        case '4':
                        case '7':
                        case '9':
                        case '13':
                        case '14':
                        case '19':
                            // console.log("Move down");
                            if (divIndexNumber == parentUndery) {
                                div.appendChild(gridBot);
                                //console.log("attempted to shift down");
                            }
                            break;
                        // don't move, reveal a wall and stop at the bottom
                        case '2':
                        case '3':
                        case '5':
                        case '6':
                        case '8':
                        case '10':
                        case '11':
                        case '12':
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
                            //console.log("do not advance"); 
                            instructions.innerHTML = "Oops! You've hit a wall <br><br> Click the buttons to turn and move the creature to the finish <br><br> Be careful to avoid the hidden walls!";
                            //select for the div below 
                            if (divIndexNumber == parentUndery) {
                                div.classList.add("wall");
                                //console.log("revealed a wall");
                            }
                            break;
                    }
                })
                break;
            case "matrix(0, 1, -1, 0, 0, 0)":
                //facing left
                //console.log("Rotation 90");
                divs.forEach((div) => {
                    // isolate div index
                    const divIndex = div.getAttribute("index");
                    //console.log(divIndex);
                    const divIndexNumber = parseInt(divIndex);
                    //console.log(divIndexNumber);

                    switch (parent) {
                        //make it move left
                        case '7':
                        case '13':
                        case '14':
                        case '15':
                        case '19':
                        case '25':
                            //console.log("Move left");
                            if (divIndexNumber == parentLefty) {
                                div.appendChild(gridBot);
                                //console.log("attempted to shift left");
                            }
                            break;
                        //make it stop at the left border 
                        case '1':
                        case '6':
                            instructions.innerHTML = "Oops! You've hit a wall <br><br> Click the buttons to turn and move the creature to the finish <br><br> Be careful to avoid the hidden walls!";
                            break;
                        // make it stop and reveal walls
                        case '2':
                        case '3':
                        case '4':
                        case '5':
                        case '8':
                        case '9':
                        case '10':
                        case '11':
                        case '12':
                        case '16':
                        case '17':
                        case '18':
                        case '20':
                        case '21':
                        case '22':
                        case '23':
                        case '24':
                            console.log("do not advance"); //registered
                            instructions.innerHTML = "Oops! You've hit a wall <br><br> Click the buttons to turn and move the creature to the finish <br><br> Be careful to avoid the hidden walls!";
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
                        case '13':
                        case '14':
                        case '18':
                        case '24':
                            console.log("Move right");
                            if (divIndexNumber == parentRighty) {
                                div.appendChild(gridBot);
                                console.log("Moved right");
                            }
                            break;
                        //make it stop at the right border 
                        case '15':
                            instructions.innerHTML = "Oops! You've hit a wall <br><br> Click the buttons to turn and move the creature to the finish <br><br> Be careful to avoid the hidden walls!";
                            break;
                        //make it stop and reveal walls to right
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
                            instructions.innerHTML = instructions.innerHTML = "Oops! You've hit a wall <br><br> Click the buttons to turn and move the creature to the finish <br><br> Be careful to avoid the hidden walls!";
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
                        case '9':
                        case '12':
                        case '14':
                        case '18':
                        case '19':
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
                        case '10':
                        case '11':
                        case '13':
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
                            instructions.innerHTML = "Oops! You've hit a wall <br><br> Click the buttons to turn and move the creature";
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
                //hide the game instructions
                instructionsDiv.classList.add("hide");
                controls.classList.add("hide");
                turns.classList.add("hide");
                //show the start again button
                startAgain.classList.remove("hide");
                game.style.width = "100%";
                //make the creature face down
                gridBot.setAttribute("transform", `rotate(0)`);
                //show the win message
                win.classList.remove("hide");
                //change finish div appearance
                divs.forEach((div) => {
                    // isolate div index
                    const divIndex = div.getAttribute("index");
                    const divIndexNumber = parseInt(divIndex);
                    // select for the 25th space
                    if (divIndexNumber == 25) {
                        const finishText = document.querySelector(".finish");
                        finishText.innerText = "";
                    }
                });
            }
        };
        checkForWin();
    })
})

levelTwo.addEventListener("click", function (e) {
    //resize 
    app.style.height = "auto";
     //hide starting instructions and level selection
     startInstructionsDiv.classList.add("hide");
     levelSelect.classList.add("hide");
     //show the game
     game.classList.remove("hide");
     gameBoard.classList.remove("hide");
     controls.classList.remove("hide");
     turns.classList.remove("hide");
     instructionsDiv.classList.remove("hide");
 
     //update instructions
     instructions.innerHTML = "Click the buttons to turn and move the creature to the green square <br><br> Be careful to avoid the hidden walls!";
 
     //create gameboard
    for (let i = 1; i < 101; i++) {
        const gridItem = document.createElement("div");
        gridItem.classList.add("grid-item");
        gridItem.classList.add("levelTwo"); // different class for different size spaces
        // add index attribute 
        gridItem.setAttribute("index", i);
        // gridItem.innerText = i;
        // add each space to the board
        gameBoard.appendChild(gridItem);
    }

    game.appendChild(win);

    // get all divs
    const divs = document.querySelectorAll(".grid-item");

    // allocate start and finish squares
    divs.forEach((div) => {
        // isolate div index
        const divIndex = div.getAttribute("index");
        //console.log(divIndex);
        const divIndexNumber = parseInt(divIndex);

        if (divIndexNumber == 100) {
            div.style.background = " #80b883";
        }
    });


    // create creature 
    const iconPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    gridBot.setAttribute('fill', '#916760'); //colours it in
    gridBot.setAttribute('viewBox', '0 0 512 512'); //from svg link
    gridBot.setAttribute('stroke', '#5c5c5c'); // color
    gridBot.setAttribute("transform", `rotate(0)`); // to make advancing work before button pressing
    //iconPath.setAttribute("d", "M320 0c17.7 0 32 14.3 32 32l0 64 120 0c39.8 0 72 32.2 72 72l0 272c0 39.8-32.2 72-72 72l-304 0c-39.8 0-72-32.2-72-72l0-272c0-39.8 32.2-72 72-72l120 0 0-64c0-17.7 14.3-32 32-32zM208 384c-8.8 0-16 7.2-16 16s7.2 16 16 16l32 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-32 0zm96 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l32 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-32 0zm96 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l32 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-32 0zM264 256a40 40 0 1 0 -80 0 40 40 0 1 0 80 0zm152 40a40 40 0 1 0 0-80 40 40 0 1 0 0 80zM48 224l16 0 0 192-16 0c-26.5 0-48-21.5-48-48l0-96c0-26.5 21.5-48 48-48zm544 0c26.5 0 48 21.5 48 48l0 96c0 26.5-21.5 48-48 48l-16 0 0-192 16 0z");
    iconPath.setAttribute("d", "M256 0a256 256 0 1 0 0 512A256 256 0 1 0 256 0zM135 241c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l87 87 87-87c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9L273 345c-9.4 9.4-24.6 9.4-33.9 0L135 241z");
    iconPath.setAttribute('stroke-width', '6'); //thickness of lines
    gridBot.appendChild(iconPath);
    gridBot.classList.add("creature");
    //append creature to first div
    gameBoard.firstChild.append(gridBot);


    //append creature to first div
    gameBoard.firstChild.append(gridBot);
    // create a button to rotate the creature upwards
    const rotateUp = document.createElement("button");
    rotateUp.innerText = "Face up";
    rotateUp.style.margin = "10px 40px";
    turns.appendChild(rotateUp);

    //make the button functional
    rotateUp.addEventListener("click", function (e) {
        e.preventDefault();
        gridBot.setAttribute("transform", `rotate(180)`);
        instructions.innerText = "Click the buttons to turn and move the creature";
        //console.log(creatureInfo.getPropertyValue("transform"));// matrix(-1, 0, 0, -1, 0, 0)
    })


    // create a button to rotate the creature left
    const rotateLeft = document.createElement("button");
    rotateLeft.innerText = "Face left";
    rotateLeft.style.margin = "0 5px";
    turns.appendChild(rotateLeft);

    // make the button functional
    rotateLeft.addEventListener("click", function (e) {
        e.preventDefault();
        gridBot.setAttribute("transform", `rotate(90)`);
        instructions.innerText = "Click the buttons to turn and move the creature";
        // console.log(creatureInfo.getPropertyValue("transform")); // matrix(0, 1, -1, 0, 0, 0)
    })

    // create a button to rotate the creature right
    const rotateRight = document.createElement("button");
    rotateRight.innerText = "Face right";
    rotateRight.style.margin = "0 5px";
    turns.appendChild(rotateRight);

    rotateRight.addEventListener("click", function (e) {
        e.preventDefault();
        gridBot.setAttribute("transform", `rotate(-90)`);
        instructions.innerText = "Click the buttons to turn and move the creature";
        // console.log(creatureInfo.getPropertyValue("transform")); //matrix(0, -1, 1, 0, 0, 0)
    })


    // create a button to rotate the creature downwards
    const rotateDown = document.createElement("button");
    rotateDown.innerText = "Face down";
    rotateDown.style.margin = "10px 40px";
    turns.appendChild(rotateDown);

    // make the button functional
    rotateDown.addEventListener("click", function (e) {
        e.preventDefault();
        gridBot.setAttribute("transform", `rotate(0)`);
        instructions.innerText = "Click the buttons to turn and move the creature";
        //console.log(creatureInfo.getPropertyValue("transform")); //matrix(1, 0, 0, 1, 0, 0)
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

        instructions.innerText = "Click the buttons to turn and move the creature";

        switch (creatureInfo.getPropertyValue("transform")) {
            case "matrix(1, 0, 0, 1, 0, 0)":
                //if the creature is facing down
                console.log("Rotation 0");
                divs.forEach((div) => {
                    // isolate div index
                    const divIndex = div.getAttribute("index");
                    //console.log(divIndex);
                    const divIndexNumber = parseInt(divIndex);
                    //console.log(divIndexNumber);

                    if (parent == 1 | parent == 3 | parent == 5 | parent == 7 | parent == 13 | parent == 15 | parent == 17 | parent == 10 | parent == 11 | parent == 20 | parent == 21 | parent == 23 | parent == 25 | parent == 28 | parent == 30 | parent == 31 | parent == 35 | parent == 38 | parent == 40 | parent == 45 | parent == 47 | parent == 50 | parent == 53 | parent == 55 | parent == 57 | parent == 60 | parent == 62 | parent == 67 | parent == 70 | parent == 71 | parent == 78 | parent == 80 | parent == 81 | parent == 83 | parent == 85 | parent == 88 | parent == 90) {
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

                    if (parent == 8 | parent == 9 | parent == 10 | parent == 24 | parent == 25 | parent == 28 | parent == 32 | parent == 33 | parent == 36 | parent == 54 | parent == 55 | parent == 58 | parent == 63 | parent == 72 | parent == 78 | parent == 84 | parent == 85 | parent == 92 | parent == 93 | parent == 96 | parent == 97 | parent == 98) {
                        if (divIndexNumber == parentLefty) {
                            div.appendChild(gridBot);
                            console.log("attempted to shift left");
                        }
                    } else if (parent == 1 | parent == 11 | parent == 21 | parent == 31 | parent == 41 | parent == 71 | parent == 81 | parent == 91) {
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
                    if (parent == 7 | parent == 8 | parent == 9 | parent == 23 | parent == 24 | parent == 27 | parent == 31 | parent == 32 | parent == 35 | parent == 47 | parent == 53 | parent == 54 | parent == 62 | parent == 71 | parent == 77 | parent == 83 | parent == 84 | parent == 91 | parent == 92 | parent == 95 | parent == 96 | parent == 97) {
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

                    if (parent == 11 | parent == 13 | parent == 15 | parent == 17 | parent == 20 | parent == 21 | parent == 23 | parent == 25 | parent == 27 | parent == 30 | parent == 33 | parent == 35 | parent == 38 | parent == 40 | parent == 41 | parent == 45 | parent == 48 | parent == 50 | parent == 55 | parent == 57 | parent == 60 | parent == 63 | parent == 65 | parent == 67 | parent == 70 | parent == 72 | parent == 77 | parent == 80 | parent == 81 | parent == 88 | parent == 90 | parent == 93 | parent == 95 | parent == 98) {
                        if (divIndexNumber == parentUppy) {
                            div.appendChild(gridBot);
                            console.log("attempted to shift up");
                        }
                    } else if (parent == 1 | parent == 3 | parent == 5 | parent == 7 | parent == 8 | parent == 9 | parent == 10) {
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
                instructionsDiv.classList.add("hide");
                //instructionsDiv.classList.add("win");
                controls.classList.add("hide");
                turns.classList.add("hide");
                startAgain.classList.remove("hide");
                gridBot.setAttribute("transform", `rotate(0)`);
                win.classList.remove("hide");

                //change finish div appearance
                divs.forEach((div) => {
                    // isolate div index
                    const divIndex = div.getAttribute("index");
                    const divIndexNumber = parseInt(divIndex);
                    // select for the 100th space
                    if (divIndexNumber == 100) {
                        const finishText = document.querySelector(".finish");
                        finishText.innerText = "";
                        console.log("Show Finish");
                    }
                });
            }
        };
        checkForWin();
    })
})

