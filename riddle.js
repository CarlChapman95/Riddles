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

// const form = document.getElementById('form1');
// form.addEventListener('submit', fuction(Event)) {
//     Event.preventDefault();
//}
//     const inputAnswer = form.answer.value;
//     if (riddles[randomRidd] === rid1 && inputAnswer === ans1) {
//         console.log('You did it!');
//     }
// }



const ansJav= tolower(document.getElementById('submitAns'));
function bigCheck(ansJav) {
    document.getElementById("urmom").addEventListener("click", function(event){
        event.preventDefault()
      })
        if (riddles[randomRidd] === rid1 && ansJav === ans1) {
                     console.log('You did it!');       
    
        }
        else if (riddles[randomRidd] === rid2 && ansJav === ans2) {
            console.log('You did it!');   
        }
        else if (riddles[randomRidd] === rid3 && ansJav === ans3) {
            console.log('You did it!');   
        }
        else {
            console.log('You suck');
        }
}
