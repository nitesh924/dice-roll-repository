const playerOne = document.querySelector("#player-one");
const playerTwo = document.querySelector("#player-two");
const ul1 = document.querySelector("#list-one");
const ul2 = document.querySelector("#list-two");
const Total_One = document.querySelector("#total-one");
const Total_Two = document.querySelector("#total-two");
const cardOne = document.querySelector("#card-one");
const cardTwo = document.querySelector("#card-two");
const badgeOne = document.querySelector("#badge-one");
const badgeTwo = document.querySelector("#badge-two");
const winnerBanner = document.querySelector("#winner-banner");
const winnerText = document.querySelector("#winner-text");
const resetBtn = document.querySelector("#reset-btn");

// Modal
const modal = document.getElementById('popup-modal');
const openBtn = document.getElementById('openModalBtn');
const closeBtn = document.getElementById('closeModalCross');

let totalOneSum = 0;
let totalTwoSum = 0;

playerTwo.disabled = true;

function updateTurnUI(isPlayerOneTurn) {
    if (isPlayerOneTurn) {
        cardOne.classList.remove("opacity-75", "border-slate-700");
        cardOne.classList.add("border-blue-500/50");
        badgeOne.textContent = "Your Turn";
        badgeOne.className = "px-2.5 py-1 text-xs font-semibold rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30";

        cardTwo.classList.add("opacity-75", "border-slate-700");
        cardTwo.classList.remove("border-emerald-500/50");
        badgeTwo.textContent = "Waiting";
        badgeTwo.className = "px-2.5 py-1 text-xs font-semibold rounded-full bg-slate-600/50 text-slate-400";
    } else {
        cardTwo.classList.remove("opacity-75", "border-slate-700");
        cardTwo.classList.add("border-emerald-500/50");
        badgeTwo.textContent = "Your Turn";
        badgeTwo.className = "px-2.5 py-1 text-xs font-semibold rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30";

        cardOne.classList.add("opacity-75", "border-slate-700");
        cardOne.classList.remove("border-blue-500/50");
        badgeOne.textContent = "Waiting";
        badgeOne.className = "px-2.5 py-1 text-xs font-semibold rounded-full bg-slate-600/50 text-slate-400";
    }
}

playerOne.addEventListener("click", () => {
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    let li = document.createElement("li");

    if (totalOneSum + randomNumber <= 20) {
        totalOneSum += randomNumber;
        Total_One.textContent = totalOneSum;

        li.className = "flex items-center justify-between p-2 rounded bg-slate-800 text-blue-300 border border-blue-500/20";
        li.innerHTML = `<span>Rolled: <strong class="text-white">${randomNumber}</strong></span> <i class="fa-solid fa-check text-emerald-400"></i>`;
        ul1.appendChild(li);
    } else {
        li.className = "flex items-center justify-between p-2 rounded bg-rose-500/10 text-rose-300 border border-rose-500/20";
        li.innerHTML = `<span>Rolled: <strong>${randomNumber}</strong> (Skipped > 20)</span> <i class="fa-solid fa-xmark text-rose-400"></i>`;
        ul1.appendChild(li);
    }

    if (totalOneSum === 20) {
        winnerText.textContent = "Winner Player One!";
        winnerBanner.classList.remove("hidden");
        playerOne.disabled = true;
        playerTwo.disabled = true;
        return;
    }

    playerOne.disabled = true;
    playerTwo.disabled = false;
    updateTurnUI(false);
});

playerTwo.addEventListener("click", () => {
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    let li = document.createElement("li");

    if (totalTwoSum + randomNumber <= 20) {
        totalTwoSum += randomNumber;
        Total_Two.textContent = totalTwoSum;

        li.className = "flex items-center justify-between p-2 rounded bg-slate-800 text-emerald-300 border border-emerald-500/20";
        li.innerHTML = `<span>Rolled: <strong class="text-white">${randomNumber}</strong></span> <i class="fa-solid fa-check text-emerald-400"></i>`;
        ul2.appendChild(li);
    } else {
        li.className = "flex items-center justify-between p-2 rounded bg-rose-500/10 text-rose-300 border border-rose-500/20";
        li.innerHTML = `<span>Rolled: <strong>${randomNumber}</strong> (Skipped > 20)</span> <i class="fa-solid fa-xmark text-rose-400"></i>`;
        ul2.appendChild(li);
    }

    if (totalTwoSum === 20) {
        winnerText.textContent = "Winner Player Two!";
        winnerBanner.classList.remove("hidden");
        playerOne.disabled = true;
        playerTwo.disabled = true;
        return;
    }

    playerOne.disabled = false;
    playerTwo.disabled = true;
    updateTurnUI(true);
});

// Reset Game functionality
resetBtn.addEventListener("click", () => {
    totalOneSum = 0;
    totalTwoSum = 0;
    Total_One.textContent = "0";
    Total_Two.textContent = "0";
    ul1.innerHTML = "";
    ul2.innerHTML = "";
    winnerBanner.classList.add("hidden");
    playerOne.disabled = false;
    playerTwo.disabled = true;
    updateTurnUI(true);
});


/*============ Start Modal ===============*/
openBtn.addEventListener('click', () => {
    modal.classList.remove('hidden');
});

closeBtn.addEventListener('click', () => {
    modal.classList.add('hidden');
});

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.add('hidden');
    }
});
/*============ End Modal ===============*/
