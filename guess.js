
let randomNo = Math.round(Math.random() * 100 + 1);
let submitguess = document.getElementById("subt");
let guesslot = document.querySelector(".guesses");
let remaining = document.querySelector(".lastresult");
let res = document.querySelector(".res");
let cnt = 10;
let ct = 0;
let arr = [];
console.log(randomNo);
res.style.marginLeft="600px";
submitguess.addEventListener("click", function(e) {
    e.preventDefault();
    let user = document.getElementById("guessfield");
    let number = parseInt(user.value);

    if (isNaN(number) || number < 1 || number > 100) {
        window.alert("Please enter a valid number between 1 and 100.");
        user.value = ""; // Clear the input field
        return;
    }

    arr.push(number);
    user.value = ""; // Clear the input field

    let index = arr.indexOf(randomNo);
    if (index === -1) {
        cnt--;
        ct++;
        if (ct >= 10) {
            res.innerHTML = `Sorry, you were not able to find the answer. The number was ${randomNo}.`;
            arr = [];
            ct = 0;
            cnt = 10;
        }
     else   if(number>randomNo){
            res.innerHTML="your guess is greater than actual number";
        }
        else {
            res.innerHTML="your guess is smaller than actual number";
        }

        
    } else {
        res.innerHTML = `<br>You guessed right! The number was ${randomNo}.`;
        arr = [];
        ct = 0;
        cnt = 10;
    }

    guesslot.innerHTML = arr.join(', ');
    remaining.innerHTML = cnt;
});
