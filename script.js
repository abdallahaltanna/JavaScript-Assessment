const quoteList = document.getElementById('quoteList')
const errorMessage = document.getElementById('errorMessage')

fetch('https://dummyjson.com/quotes')
  .then(response => response.json())
  .then(data => {
    const { quotes } = data

    quotes.forEach(singleQuote => {
      const { author, quote, id } = singleQuote
      const li = document.createElement('li')
      li.innerHTML = `Id: ${id} </br>Author: ${author}</br>Quote: ${quote} <hr>`
      quoteList.appendChild(li)
    })
  })
  .catch(error => {
    errorMessage.textContent = error
    errorMessage.style.display = 'block'
  })

const searchInput = document.getElementById('searchInput')

searchInput.addEventListener('input', filterQuotes)

function filterQuotes() {
  const searchTerm = searchInput.value.toLowerCase()
  const quotes = quoteList.getElementsByTagName('li')

  for (let i = 0; i < quotes.length; i++) {
    const quoteText = quotes[i].textContent.toLowerCase()
    if (quoteText.includes(searchTerm)) {
      quotes[i].style.display = 'block'
    } else {
      quotes[i].style.display = 'none'
    }
  }
}
