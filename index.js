let minute = document.querySelector(".minute");
let second = document.querySelector(".second");
console.log(minute);
let timerMinute = 0;
let timerSecond = 0;
let thePlayerTime = 30000;

let startButton = document.querySelector(".info-buttons span");
let startBackGround = document.querySelector(".info-buttons");
let nameSpan = document.querySelector(".name span");
let failPage = document.querySelector(".fail-page");

startButton.onclick = function () {
  let yourName = prompt("whats Your Name");
  nameSpan.textContent = yourName;
  startBackGround.style.display = "none";

  if (yourName === null || yourName === "") {
    nameSpan.textContent = "Unknown";
  } else {
    nameSpan.textContent = yourName;
  }
};
let counter = setInterval(timer, 1000);

function timer() {
  second.textContent++;
  if (second.textContent === "60") {
    minute.innerHTML++;
    second.textContent = 0;
  }
}

let duartion = 1000;
let blocksContainer = document.querySelector(".memory-game-blocks");
let blocks = Array.from(blocksContainer.children);
let orderRange = [...Array(blocks.length).keys()];

shuffle(orderRange);
blocks.forEach((block, index) => {
  block.style.order = orderRange[index];
  block.addEventListener("click", function () {
    flipBlock(block);
  });
});
function flipBlock(selct) {
  selct.classList.add("is-flibed");

  let allFlippedblocks = blocks.filter((flippedBlock) =>
    flippedBlock.classList.contains("is-flibed")
  );

  if (allFlippedblocks.length == 2) {
    stopClicking();
    checkMatchBlocks(allFlippedblocks[0], allFlippedblocks[1]);
  }
}

function stopClicking() {
  blocksContainer.classList.add("no-click");

  setTimeout(function () {
    blocksContainer.classList.remove("no-click");
  }, duartion);
}

function checkMatchBlocks(firstBlock, secondBlock) {
  let triesElemnet = document.querySelector(".tries span");

  if (firstBlock.dataset.icon === secondBlock.dataset.icon) {
    firstBlock.classList.remove("is-flibed");
    secondBlock.classList.remove("is-flibed");

    firstBlock.classList.add("has-match");
    secondBlock.classList.add("has-match");
  } else {
    triesElemnet.innerHTML = parseInt(triesElemnet.innerHTML) + 1;
    setTimeout(() => {
      firstBlock.classList.remove("is-flibed");
      secondBlock.classList.remove("is-flibed");
    }, duartion);
  }
}

function shuffle(array) {
  let current = array.length,
    temp,
    random;

  while (current > 0) {
    random = Math.floor(Math.random() * current);

    current--;
    temp = array[current];

    array[current] = array[random];

    array[random] = temp;
  }
  return array;
}

let checkReply = setInterval(Check, 100);

var completd = false;
var done = false;
console.log(minute.innerHTML);
function Check() {
  let filter = blocks.filter(function (block) {
    return block.classList.contains("has-match");
  });

  if (filter.length === 20) {
    clearInterval(counter);
  }
  if ((filter.length !== 20) & (minute.innerHTML === "2")) {
    completd = true;
    clearInterval(counter);
  }

  if (completd === true) {
    failPage.style.display = "flex";
    clearInterval(counter);
  }
}
