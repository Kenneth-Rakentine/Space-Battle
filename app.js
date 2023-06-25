//initial health(hull, firepower strength, fire accuracy random math range generation)

const generateRandomNum = (min, max)=>{
    let rand = Math.floor(Math.random() * (max - min) + min);
    return rand;

};

//player One ship object with attributes
let playerOne = {
    name:"USS Assembly",
    hull: generateRandomNum(3, 6),
    firepower: generateRandomNum(2, 4),
    accuracy: 7,
    // isMyTurn: false,
};

// player 2 (alien) ships (6)
let shipOne = {
    name: "Ship 1",
    hull: generateRandomNum(3, 6),
    firepower: generateRandomNum(2, 4),
    accuracy: generateRandomNum(0, 10),
    // isMyTurn: false,
};

let shipTwo = {
    name: "Ship 2",
    hull: generateRandomNum(3, 6),
    firepower: generateRandomNum(2, 4),
    accuracy: generateRandomNum(0, 10),
       // isMyTurn: false,
};

let shipThree = {
    name: "Ship 3",
    hull: generateRandomNum(3, 6),
    firepower: generateRandomNum(2, 4),
    accuracy: generateRandomNum(0, 10),
   // isMyTurn: false,
};

let shipFour = {
    name: "Ship 4",
    hull: generateRandomNum(3, 6),
    firepower: generateRandomNum(2, 4),
    accuracy: generateRandomNum(0, 10),
       // isMyTurn: false,
};

let shipFive = {
    name: "Ship 5",
    hull: generateRandomNum(3, 6),
    firepower: generateRandomNum(2, 4),
    accuracy: generateRandomNum(0, 10),
     // isMyTurn: false,
};

let shipSix = {
    name: "Ship 6",
    hull: generateRandomNum(3, 6),
    firepower: generateRandomNum(2, 4),
    accuracy: generateRandomNum(0, 10),
      // isMyTurn: false,
};


//declare ships and p2 array counter, log p2 currently active ship
let enemyShips = [shipOne, shipTwo, shipThree, shipFour, shipFive, shipSix];
let activeShip = shipOne;   
let counter = 0
console.log("%c Player 1:", 'color:blue; font-size 48px;', playerOne)
console.log("%c Player 2:", 'color:green; font-size 48px;', activeShip)

//__________________________



//__________________________

//main factor: check p1 damage (if less than or equal to zero, game over and initialize game over screen)
const p1Damage = ()=>{
    console.log("%c Player 1 Hull:",'color:blue; font-size:24;', playerOne.hull)
    if (playerOne.hull <= 0){
        gameOver();
        gameScreen(); 
        setTimeout(reloadWindow, 1000);
    } else {
        engage(activeShip)
    }
};

//check enemy damage. if less than or equal zero, move to next active ship in p2 ship object array, log ship2 name. if not destroyed(0 hull), player 2 takes it's turn)
const enemyDamage = ()=>{
    console.log(activeShip.hull);
    if (activeShip.hull <= 0){
        // console.log("Player 2:", activeShip, "destroyed");
        console.log(`%cPlayer 2: ${activeShip} destroyed`, 'color: green; background-color: grey;');
        nextShip();
        counter++
        activeShip = enemyShips[counter]
        console.log("Player 2:", activeShip)
        
    } else{
        p2Turn()
        p1Damage()
    }
};

//animations_______________________

//p2 destroyed (0 hull damage animation)
const explode2 = () =>{
    let swap = document.querySelector('.shipTwo')
    swap.setAttribute('src', 'https://i.gifer.com/origin/d7/d7ac4f38b77abe73165d85edf2cbdb9e_w200.gif')
}

//ship 2 image relaod (visual only-post detroy animation)
const explodeReload = () =>{
    let swapBack = document.querySelector('.shipTwo')
    swapBack.setAttribute('src', 'https://images.squarespace-cdn.com/content/v1/5405f725e4b0a35ea020882f/1686582281326-RXTFIQDMHAZKH309Q1OQ/MacBeth-spaceship1_AdobeExpress.gif?format=500w')
}

//player one destroyed animation
const gameOver = ()=>{
    let p1Die   = document.querySelector('.shipOne')
    p1Die.setAttribute('src', 'https://i.gifer.com/3iCN.gif');
}

//game over screen animation
gameScreen = () =>{
    let gameEndScreen = document.querySelector('.gameOverScreen')
    gameEndScreen.setAttribute('src', 'https://media4.giphy.com/media/dkuZHIQsslFfy/giphy.gif');
    
}

// const laserBeam = () =>{
//     let laser = document.querySelector('.gameOverScreen')
//     laser.setAttribute('src', 'https://i.gifer.com/ZF6U.gif')
// }

// const laserReload = () =>{
//     let clearLaser = document.querySelector('.gameOverScreen')
//     clearLaser.replaceWith('laserClear')
// }

//___________________________________________

//player one initial attack: check accuracy of p1, check p2 health against firepower of p1. log p1 firepower & p2 hull/health
const engage = () => {
    if (playerOne.accuracy >= 5) {
        let strength = playerOne.firepower;
      health =(activeShip.hull -= strength);
      activeShip.hull = health;
      damage2 = playerOne.firepower;
    // console.log(playerOne.name, "firepower =", strength)
    console.log(`%c${playerOne.name} %cATTACKS! firepower = ${strength}`, 'color: blue; background-color:gainsboro;font-weight: bold;', 'background-color:red; color:white');
    console.log(`%c${activeShip.name} %chit with ${damage2}! ${health} hull remaining`, 'color:green; background-color:lightgreen;font-weight:bolder; ', 'color:green; border: solid green');

//if p2 health falls below zero, promp user to retreat, log "destroyed" & initialize explode p2 animation, move to next ship in p2 object array, log next p2 ship. else: p2 attacks p1 (if p2 misses, move onto p2 attack turn elselog "missed")
      if (activeShip.hull <= 0) {
        console.log(`Player 2: ${activeShip.name} destroyed`);
        // laserBeam();
        explode2();
        nextShip();
        counter++;
        activeShip = enemyShips[counter];
        console.log("Player 2:", activeShip, "Appears!");
        updateP2Title();
        setTimeout (explodeReload, 1000);
        setTimeout(retreat, 2000);
      } else {
        p2Turn();
      }
    } else {
      console.log(`${playerOne.name} missed`);
      p2Turn();
    }
  };

const nextShip = ()=>{
    console.log(activeShip);
}

//p2 attack: check accuracy, check p1 health against p2 firepower to determine damage.log p1 health, initialize p1 damage check function. else: log "p2 missed", move to p1 damage check
const p2Turn = () => {
    if (activeShip.accuracy <= 5) {
      const damage = activeShip.firepower;
      health = (playerOne.hull -= damage);
      console.log(`%c${activeShip.name} %cATTACKS! Firepower = ${activeShip.firepower}`, 'background-color:lightgreen', 'background-color:red; color:white');
      console.log(`%c${playerOne.name} %chit with ${damage}! ${playerOne.hull} hull remaining`, 'color:blue; background-color:gainsboro;font-weight:bolder; ', 'color:blue; border: solid gainsboro');
      p1Damage();
    } else {
      console.log(`%c${activeShip.name} missed`, 'color:green; font-weight:bold;');
      p1Damage();
    }
  };

  //ask to start over after game over screen using prompt, reloads page with location.reload function
  const reloadWindow = ()=>{
    let startOver = window.prompt("Start Over?", "YES", "NO");
    if (startOver === "YES"){
        location.reload();
    }
}

//retreat option prompt if p1 destroys ship2
const retreat = ()=>{
    let leave = window.prompt("RETREAT?", "YES", "NO");
    if (leave === "YES"){
        gameScreen();
        reloadWindow();
    }
}
 

// const nextShipText = ()=>{
//    let chngTxt = document.querySelector('.p2Title')
//    chngTxt.innerHTML('activeShip.name')
//    activeShip.append(chngTxt)
// }

const updateP2Title = ()=>{
    let p2TitleElement = document.getElementById("p2Title");
    p2TitleElement.textContent = activeShip.name;
  }