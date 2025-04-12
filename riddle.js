let rid1='What has to be broken before you can use it?';
let ans1='egg';
let rid2='I am tall when I am young, and I am short when I am old. What am I?';
let ans2='candle';
let rid3='What is full of holes but still holds water?';
let ans3='sponge';
const riddles = [rid1, rid2, rid3];
function showRidd() {
    const randomRidd = Math.floor(Math.random() * riddles.length);
    document.getElementById("riddle").innerText = riddles[randomRidd];
}
document.getElementById('ans').addEventListener('submit', function(event) {
    event.preventDefault();

    let ridInput = document.getElementById('submitAns').value;
  });