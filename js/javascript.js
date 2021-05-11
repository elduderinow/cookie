let cookie = document.getElementById("cookie");
let totalcookie = document.getElementById("totalcookie");
let cookieSecond = document.getElementById("cookieseconds");
let Mfingers = document.getElementById("magicfinger");
let Fchef = document.getElementById("chef");
let Elfs = document.getElementById("elfs");
let Bakery = document.getElementById("bakery");
let Chain = document.getElementById("chain");

let costPay = Array.from(document.querySelectorAll("span.cost"));
console.log(costPay);

let score = 0;
let second = 0;

let countHand = 0;
let countChef = 0;
let countElf = 0;
let countBakery = 0;
let countChain = 0;

let costHands = 10;
let costChef = 50;
let costElf= 200;
let costBakery = 800;
let costChain = 1600;


//set interval of 1s to increment score by 1 and update the mathing DOM element.
window.setInterval(function () {
    score += second;
    totalcookie.innerHTML = `${score} Cookies`;
}, 1000);

//for Each bonus.

Mfingers.addEventListener('click', function () {
    //if the score is bigger or equal the cost of the bonus.
    if (score >= costHands) {
        //Subtract the total amount minus the cost of the bonus
        score = score - costHands;
        //Increase the cookies per second.
        second += this.value;
        //Increase the displayed number next to the bonusses.
        countHand = countHand += 1;
        //calc the cost increase based on the amount already bought.
        costHands = Math.round(costHands + costHands/countHand*0.2);
        //Display everything in the dom.
        this.childNodes[0].style.opacity = "1";
        this.childNodes[1].innerHTML = countHand;
        costPay[0].innerHTML=costHands;
        updateCookies(score, second);
    }

});

Fchef.addEventListener('click', function () {
    if (score >= costChef) {
        score = score - costChef;
        countChef = countChef += 1;
        costChef = Math.round(costChef + costChef/countChef*0.2);
        console.log(costChef);
        second += this.value;
        this.childNodes[0].style.opacity = "1";
        this.childNodes[1].innerHTML = countChef;
        costPay[1].innerHTML=costChef;
        updateCookies(score, second);
    }
});

Elfs.addEventListener('click', function () {
    if (score >= costElf) {
        score = score - costElf;
        countElf = countElf += 1;
        costElf = Math.round(costElf + costElf/countElf*0.2);
        second += this.value;
        this.childNodes[0].style.opacity = "1";
        this.childNodes[1].innerHTML = countElf;
        costPay[2].innerHTML=costElf;
        updateCookies(score, second);
    }
});

Bakery.addEventListener('click', function () {
    if (score >= costBakery) {
        score = score - costBakery;
        countBakery = countBakery += 1;
        costBakery = Math.round(costBakery + costBakery/countBakery*0.2);
        second += this.value;
        this.childNodes[0].style.opacity = "1";
        this.childNodes[1].innerHTML = countBakery;
        costPay[3].innerHTML=costBakery;
        updateCookies(score, second);
    }
});

Chain.addEventListener('click', function () {
    if (score >= costChain) {
        score = score - costChain;
        countChain = countChain += 1;
        costChain = Math.round(costChain + costChain/countChain*0.2);
        second += this.value;
        this.childNodes[0].style.opacity = "1";
        this.childNodes[1].innerHTML = countChain;
        costPay[4].innerHTML=costChain;
        updateCookies(score, second);
    }
});

//if click on cookie increment with 1.
cookie.addEventListener("click", function () {
    countCookie();
});

function countCookie() {
    score += 1;
    totalcookie.innerHTML = `${score} Cookies`;
}

function updateCookies(score, second) {
    totalcookie.innerHTML = `${score} Cookies`;
    cookieSecond.innerHTML = `${second} cookies per second`;
}

