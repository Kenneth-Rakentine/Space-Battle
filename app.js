const generateRandomNum = (min, max)=>{
    let rand = Math.floor(Math.random() * (max - min) + min);
    return rand;

};


let playerOne = {
    name:"USS Assembly",
    hull: generateRandomNum(3, 6),
    firepower: generateRandomNum(2, 4),
    accuracy: 7,
    // isMyTurn: false,
};


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

let enemyShips = [shipOne, shipTwo, shipThree, shipFour, shipFive, shipSix];
let activeShip = shipOne;   
let counter = 0
console.log("%c Player 2:", 'color:green; font-size 48px;', activeShip)

//__________________________

// const consoleLogElement = document.getElementById("consoleLog");

// const logMessage = (message) => {
//   consoleLogElement.innerHTML += `<p>${message}</p>`;
//   consoleLogElement.scrollTop = consoleLogElement.scrollHeight;
// };

//__________________________

const p1Damage = ()=>{
    console.log("%c Player 1 Hull:",'color:blue; font-size:24;', playerOne.hull)
    if (playerOne.hull <= 0){
        gameOver();
        gameScreen(); 
        // reloadWindow();
    } else {
        engage(activeShip)
    }
};

const enemyDamage = ()=>{
    console.log(activeShip.hull);
    if (activeShip.hull <= 0){
        console.log("Player 2:", activeShip, "destroyed");
        nextShip();
        counter++
        activeShip = enemyShips[counter]
        console.log("Player 2:", activeShip)
    } else{
        p2Turn()
        p1Damage()
    }
};

const explode2 = () =>{
    let swap = document.querySelector('.shipTwo')
    swap.setAttribute('src', 'https://i.gifer.com/origin/d7/d7ac4f38b77abe73165d85edf2cbdb9e_w200.gif')
}

const explodeReload = () =>{
    let swapBack = document.querySelector('.shipTwo')
    swapBack.setAttribute('src', 'https://images.squarespace-cdn.com/content/v1/5405f725e4b0a35ea020882f/1686582281326-RXTFIQDMHAZKH309Q1OQ/MacBeth-spaceship1_AdobeExpress.gif?format=500w')
}

const gameOver = ()=>{
    let p1Die   = document.querySelector('.shipOne')
    p1Die.setAttribute('src', 'https://i.gifer.com/3iCN.gif');
}

gameScreen = () =>{
    let gameEndScreen = document.querySelector('.gameOverScreen')
    gameEndScreen.setAttribute('src', 'https://media4.giphy.com/media/dkuZHIQsslFfy/giphy.gif');
    
}





const engage = () => {
    if (playerOne.accuracy >= 5) {
        let strength = playerOne.firepower;
      health =(activeShip.hull -= strength);
      activeShip.hull = health;
    console.log(playerOne.name, "firepower =", strength)
      console.log(`${activeShip.name} hit! ${health} hull remaining`);


      if (activeShip.hull <= 0) {
        console.log(`Player 2: ${activeShip.name} destroyed`);
        explode2();
        nextShip();
        counter++;
        activeShip = enemyShips[counter];
        console.log("Player 2:", activeShip, "Appears!");
      } else {
        p2Turn();
      }
    } else {
      console.log(`${ship.name} missed`);
      p2Turn();
    }
  };

const nextShip = ()=>{
    console.log(activeShip);


    // let enemyTitle = document.querySelector('.titleTwo')
    // enemyTitle.replaceWith()
  

}

const p2Turn = () => {
    if (activeShip.accuracy <= 5) {
      const damage = activeShip.firepower;
      health = (playerOne.hull -= damage);
      console.log(`${playerOne.name} hit with ${damage}! ${playerOne.hull} hull remaining`);
      p1Damage();
    } else {
      console.log(`${activeShip.name} missed`);
      p1Damage();
    }
  };

  const reloadWindow = ()=>{
    let startOver = window.prompt("Start Over?", "YES", "NO");
    if (startOver === "YES"){
        location.reload();
    }
}
 
