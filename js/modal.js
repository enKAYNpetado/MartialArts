const buttonClose = document.querySelectorAll(".title button")
const wrapper = document.querySelectorAll(".modal-wrapper")
const buttonOpen = document.querySelectorAll(".item button")

//let index = []
let currentIndex = -1

//você poderia escolher outro valor, como null, NaN ou até mesmo uma string como "nenhum", para representar a ausência de um modal aberto, mas -1 é uma escolha comum e simples que é facilmente compreensível para a maioria dos programadores.

//A escolha de usar o valor -1 para representar nenhum modal aberto é uma convenção comum em programação. O motivo é que, em muitos casos, os índices em arrays começam em 0 e são números inteiros não negativos. Usar -1 como valor para indicar "nenhum" é uma forma simples e intuitiva de representar que não há nenhum modal aberto.

//Ao usar -1, você cria uma situação em que currentIndex não corresponde a nenhum índice válido em seu array de modais

buttonOpen.forEach((buttonOpen, i) => {
  buttonOpen.addEventListener("click", () => {
    //wrapper[i].classList.add("open")
    //index = i

    if (currentIndex !== -1) {
      wrapper[currentIndex].classList.remove("open")
    }

    wrapper[i].classList.add("open")
    currentIndex = i
  })
})

buttonClose.forEach((buttonClose, i) => {
  buttonClose.addEventListener("click", () => {
    //wrapper[i].classList.remove("open")
    wrapper[i].classList.remove("open")
    currentIndex = -1
  })
})

window.addEventListener("keydown", function (event) {
  handleKeydown(event, currentIndex)
})

function handleKeydown(event, index) {
  if (event.key === "Escape") {
    wrapper[index].classList.remove("open")
  }

  index = currentIndex
}

//buttonOpen.addEventListener("click", (e) => {
//buttonOpen.classList.add("open")
//})
