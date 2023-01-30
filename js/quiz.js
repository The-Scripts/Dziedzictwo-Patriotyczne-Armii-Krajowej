const question1 = document.querySelector('input[name="Pyt1"]:checked');
const question2 = document.querySelector('input[name="Pyt2"]:checked');
const question3 = document.querySelector('input[name="Pyt3"]:checked');
const question4 = document.querySelector('input[name="Pyt4"]:checked');
const question5 = document.querySelector('input[name="Pyt5"]:checked');
const question6 = document.querySelector('input[name="Pyt6"]:checked');
const question7 = document.querySelector('input[name="Pyt7"]:checked');
const question8 = document.querySelector('input[name="Pyt8"]:checked');
const question9 = document.querySelector('input[name="Pyt9"]:checked');
const question10 = document.querySelector('input[name="Pyt10"]:checked');

let points = 0;

function check()
{
    if (question1.id === "C") {
      points += 1;
    }
    
    if (question2.value === "B") {
      points += 1;
    }

    if (question3.value === "A") {
      points += 1;
    }

    if (question4.value === "A") {
      points += 1;
    }

    if (question5.value === "A") {
      points += 1;
    }

    if (question6.value === "C") {
      points += 1;
    }

    if (question7.value === "B") {
      points += 1;
    }

    if (question5.value === "C") {
      points += 1;
    }

    if (question6.value === "A") {
      points += 1;
    }

    if (question7.value === "A") {
      points += 1;
    }

    let p = document.querySelector("p")
    p.innerHTML = `Uzyskałeś ${points}/10 punktów!`
}