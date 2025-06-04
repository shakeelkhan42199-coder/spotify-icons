# 🧠 Pokémon Memory Game

A memory card game built using **HTML**, **CSS**, **JavaScript**, **Bootstrap**, and the **Pokémon TCG API**. Players test their memory skills by flipping Pokémon cards and matching pairs. The game supports multiple grid sizes and keeps track of the score and top score.

---

## 🎮 Gameplay Instructions

1. **Choose difficulty**: Select from 4, 8, 10, or 12 cards.
2. **Start matching**: Click on the Pokéballs to reveal the Pokémon.
3. **Match pairs**: Two same Pokémon in a row count as a successful match.
4. **Scoring**:
   - Start at **2000 points**.
   - Lose **100 points** for each mismatch.
   - Score is displayed at the end.
5. **Top score** is updated live.

---

## 🚀 Features

- 🧩 Dynamic card generation using **TCGdex Pokémon API**
- 🎴 Randomised card shuffling on each attempt
- 🎯 Scoring system with real-time updates
- 🏆 Top score memory within session
- 📱 Responsive layout with Bootstrap
- 🎨 Background image updates every 10 seconds
- 🔁 Smooth animations and flip transitions

---

## 📁 File Structure

project-root/
├── index.html # Main HTML structure
├── style.css # Styling for layout and transitions
├── app.js # Game logic, API integration, DOM handling
├── assets/
│ ├── poke.jpg # Pokéball image
│ ├── pokeball.jpg # Button background
│ ├── pokeicon2.png # Game header icon
│ ├── a1.jpg - a5.jpg # Backgrounds (cycled every 10s)
└── README.md # Project documentation


---

## 🛠 Tech Stack

- **HTML5** + **CSS3**
- **JavaScript (ES6)**
- **Bootstrap 5.3** – layout and responsiveness
- **Axios** – API calls
- **Pokémon TCGdex API** – Pokémon card data

---

## 📸 Screenshot

> *(Optional: Insert a screenshot below)*  
> ![Game preview](./assets/pokeicon2.png)

---

## 🧪 How to Run

1. Clone or download the project:
   ```bash
   git clone https://github.com/your-username/pokemon-memory-game.git
