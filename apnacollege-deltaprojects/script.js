// pvsp
const cells = document.querySelectorAll(".btn");

let board = ["", "", "", "", "", "", "", "", ""];
let gameover = false;
let currentPlayer = "x";

const winpattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

cells.forEach((cell, index) => {
    cell.addEventListener("click", () => turn(cell, index));
});

function turn(cell, index) {
      
    console.log(cell);
    console.log("cell");
    if (board[index] !== "" || gameover) return;

    board[index] = currentPlayer;
    
    renderSymbol(cell);

    if (checkwinner()) {
          const winningPattern = winpattern.find(pattern => {
        const [a, b, c] = pattern;
        return board[a] && board[a] === board[b] && board[a] === board[c];
    });

    Highlightwin(winningPattern);
        
   
    requestAnimationFrame(() => {
        setTimeout(() => {
            popup(`winner of this match is ${currentPlayer}`);
        }, 1500);
    });              
        
         gameover = true;  
         setTimeout(resetfun,3500) 
        return;
    }

    if (checkdraw()) {
        popup("its draw");
        gameover = true;
        setTimeout(resetfun, 3100);
        return;
    }

    if (currentPlayer == "x") {
        currentPlayer = "o";
    } else {
        currentPlayer = "x";
    }
   playername(currentPlayer);
}


function popup(content) {
    const popups = document.createElement("div");

    const glowColor = currentPlayer === "x" ? "red" : "dodgerblue";

    popups.innerHTML = `<span>${content}</span>`;

    popups.style.position = "fixed";
    popups.style.top = "50%";
    popups.style.left = "50%";
    popups.style.transform = "translate(-50%, -50%)";

    /* responsive sizing */
    popups.style.width = "min(85vw, 360px)";
    popups.style.padding = "clamp(16px, 4vw, 30px)";

    popups.style.display = "flex";
    popups.style.justifyContent = "center";
    popups.style.alignItems = "center";
    popups.style.textAlign = "center";

    popups.style.background = "rgba(0,0,0,0.85)";
    popups.style.color = "white";
    popups.style.fontWeight = "700";
    popups.style.fontSize = "clamp(20px, 8vw, 35px)";
    popups.style.lineHeight = "1.4";

    popups.style.borderRadius = "clamp(12px, 4vw, 18px)";
    popups.style.boxShadow = `
        0 0 15px ${glowColor},
        0 0 35px ${glowColor}
    `;

    popups.style.zIndex = "9999";

    document.body.appendChild(popups);

    setTimeout(() => popups.remove(), 3000);
}
function playername(pname) {
  let name = document.getElementById("player-indicator");

  if (!name) {
    name = document.createElement("div");
    name.id = "player-indicator";
    document.body.appendChild(name);
  }

  const glowColor = pname === "x" ? "red" : "dodgerblue";
  name.textContent = `${pname}'s turn`;

  const isMobile = window.innerWidth <= 460;

  name.style.position = "fixed";
  name.style.background = "rgba(0,0,0,0.85)";
  name.style.color = "white";
  name.style.fontWeight = "700";
  name.style.textAlign = "center";
  name.style.borderRadius = "12px";
  name.style.boxShadow = `0 0 12px ${glowColor}`;
  name.style.zIndex = "999";

  if (isMobile) {
    /* 📱 Mobile styles */
    name.style.bottom = "16px";
    name.style.top = "auto";
    name.style.left = "50%";
    name.style.transform = "translateX(-50%)";

    name.style.width = "auto";
    name.style.padding = "8px 16px";
    name.style.fontSize = "14px";
    
  } 
}


function renderSymbol(cell) {
    cell.textContent = currentPlayer;
    cell.style.fontSize = "80px";
    cell.style.fontWeight = "bold";
    cell.style.borderRadius = "10px";
    cell.style.transition = "all 0.8s ease";

    if (currentPlayer == "x") {
        cell.style.color = "red";
        cell.style.boxShadow = "0 0 30px red";
        cell.style.textShadow = "0 0 20px red";
    } else {
        cell.style.color = "blue";
        cell.style.boxShadow = "0 0 30px blue";
        cell.style.textShadow = "0 0 20px blue";
    }
}

function checkdraw() {
    return board.every(cell => cell !== "");
}

function checkwinner() {
    return winpattern.some(pattern => {
        const [a, b, c] = pattern;
        return (
            board[a] &&
            board[a] == board[b] &&
            board[a] == board[c]
            
        );
    });
}

function resetfun() {
    board = ["", "", "", "", "", "", "", "", ""];
    gameover = false;
    currentPlayer = "x";

    cells.forEach(cell => {
        cell.textContent = "";
        cell.style.boxShadow = "0 0 30px rgba(244, 105, 105, 0.5)";
        cell.style.textShadow = "none";
        cell.style.border = "none";

    });
}
function Highlightwin(pattern) {
   pattern.forEach(index => {
        cells[index].style.boxShadow = "0 0 20px gold";
        cells[index].style.border = "3px solid gold";
    });
   
    
}
// pvsc

