//Cotação de moeda do dia
const USD = 4.87
const EUR = 5.32
const GBP = 6.08


const form = document.querySelector("form")
const amount = document.getElementById("amount")
const currency = document.getElementById("currency")
const footer = document.querySelector("main footer")
const description = document.getElementById("description")
const result = document.getElementById("result")

// Manipulando o input para receber apenas números
amount.addEventListener("input", () => {

  // console.log(amount.value)
  const hasCharactersRegex = /\D+/g
  amount.value = amount.value.replace(hasCharactersRegex, "")
})

form.onsubmit = (event) => {
  event.preventDefault()

  switch (currency.value) {
    case "USD":
      convertCurrency(amount.value, USD, "US$")
      break
    case "EUR":
      convertCurrency(amount.value, EUR, "€")
      break
    case "GBP":
      convertCurrency(amount.value, GBP, "£")
      break
  }

}

// Função para converter a moeda 

function convertCurrency(amount, price, symbol) {
  try {
    // Exibe o resultado da conversão no footer
    description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`

    // Calcula o total
    let total = amount * price

    // Verifica se o resultado não é um número
    if (isNaN(total)) {
      return alert ("Por favor, digite o valor corretamente.")
    }

    //Formatando o valor total
    total = formatCurrencyBRL(total).replace("R$", "")

    // Exibe o valor
    result.textContent = `${total} Reais`


    //Aplica a classe que mostra o footer
    footer.classList.add("show-result")

  } catch (error) {
    footer.classList.remove("show-result")
    alert("Não foi possível converter a moeda, tente novamente mais tarde.")

  }
}
// Função para formatar o valor em moeda brasileira

function formatCurrencyBRL(value) {
  return Number(value).toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL"
  })


}
