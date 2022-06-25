const list = document.querySelector("ul")
const btn = document.querySelector("#btn")

const input = document.querySelector("#todo_input")

list.addEventListener(
  "click",
  function (ev) {
    if (ev.target.tagName === "LI") {
      ev.target.classList.toggle("checked")
    }
  },
  false
)

function deleteTodo() {
  this.parentNode.remove()
}

function createSpan() {
  let span = document.createElement("SPAN")
  let spanText = document.createTextNode("\u00D7")
  span.classList = "close"
  span.appendChild(spanText)
  span.addEventListener("click", deleteTodo)

  return span
}

function addElement() {
  let liEl = document.createElement("li")
  let text = document.createTextNode(input.value)

  if (input.value === "") {
    alert("You must write something!")
  } else {
    liEl.appendChild(createSpan())
    liEl.appendChild(text)
    list.appendChild(liEl)
  }
  input.value = ""
}

btn.addEventListener("click", (e) => {
  e.preventDefault()
  addElement()
})
