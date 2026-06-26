const form = document.querySelector("form")
const amount = document.getElementById ("amount")
const currency = document.getElementById("currency")

// Manipulando o input para receber apenas números
amount.addEventListener ("input", () => {

  console.log(amount.value)
  const hasCharactersRegex = /\D+/g
  amount.value = amount.value.replace(hasCharactersRegex, "")
})

form.onsubmit = (event) => {
  event.preventDefault ()

  console.log(currency.value)

}
