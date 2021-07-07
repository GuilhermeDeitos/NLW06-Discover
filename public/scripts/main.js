import Modal from './modal.js'

const modal = Modal()

const modalTitle = document.querySelector(".modal h2")

const modalDescription = document.querySelector(".modal p")

const modalButton = document.querySelector(".modal button")
//Pegar todos os botões que existem com a classe check
const checkButtons = document.querySelectorAll(".actions a.check")


//Pegar quando o marcar como lido for clicado
checkButtons.forEach(button => { //forEach para percorrer todos os botões
  //adicionar o addEventListener para 'escutar'
  button.addEventListener('click', handleClick)

})

//Pegar o excluir quando o excluir for clicado
const deleteButton = document.querySelectorAll(".actions a.delete")

deleteButton.forEach(button => { //forEach para percorrer todos os botões  
  button.addEventListener("click", (event) => handleClick(event,false))
  
})

function handleClick(event,check=true){

  event.preventDefault() //Para fazer os links pararem de se comportarem como links e alterar a url

  const text = check? "Marcar como lido" : "Excluir" // Aqui temos uma condição, caso o check for verdadeiro é marcado como lida, senão excluir

  const slug = check? "check" : "delete"


  const roomId = document.querySelector("#room-id").dataset.id

  const questionId = event.target.dataset.id

  const form = document.querySelector(".modal form")

  form.setAttribute("action",`/question/${roomId}/${questionId}/${slug}`)

  modalTitle.innerHTML = `${text} esta pergunta` //innerHTML para inserir textos no HTML

  modalDescription.innerHTML = `Tem certeza que deseja ${text.toLowerCase()} essa pergunta como lida?`

  modalButton.innerHTML = `Sim, ${text.toLowerCase()}`
  check ? modalButton.classList.remove("red") : modalButton.classList.add("red")



  modal.open()
}

