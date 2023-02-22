const ratingEls = document.querySelectorAll(".rating")

const btnEl = document.getElementById("btn")

const containerEl = document.getElementById ("container")

let selecedtRating = "";

ratingEls.forEach((ratingEl) => {
    ratingEl.addEventListener("click", (event) => {
        console.log(event.target.innerText || event.target.parentNode.innerText);
        selecedtRating = event.target.innerText || event.target.parentNode.innerText;
        event.target.classList.add("active")
        event.target.parentNode.classList.add("active")
    });
});

btnEl.addEventListener("click", ()=> {
    if(selecedtRating !==""){
        containerEl.innerHTML=`
        <strong> Thank You! </strong>
        <br>
        <br>
        <stron>Feedback: ${selecedtRating} </strong>
        <br>
        <br>
        <p> We will use your feedbacks to imporove our customer service. soon we will get intouch with you. </p>
        `
    }
}) 