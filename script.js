const form = document.querySelector(".form")
const formInput = form.querySelectorAll(".form__input")

const cardNumber = document.querySelector(".card__number")
const cardPerson = document.querySelector(".card__person")
const cardMonth = document.querySelector(".card__date--month")
const cardYear = document.querySelector(".card__date--year")
const cardPin = document.querySelector(".card__pin")

const inputName = document.querySelector("#name")
const inputNumber = document.querySelector("#number")
const inputDate = document.querySelectorAll("#date")
const inputPin = document.querySelector("#pin")

const btnSubmit = document.querySelector("#btn-submit")
const formWrapper = document.querySelector(".wrapper")
const completeState= document.querySelector(".complete")

function checkName(){}
function checkNumber(){}
function checkDate(){}
function checkPin(){}

form.addEventListener("input", (e)=>{
  switch(e.target.id){
    case "name":
      checkName()
      break
    case "number":
      checkNumber()
      break
    case "date":
      checkDate()
      break
    case "pin":
      checkPin()
      break
  }
})