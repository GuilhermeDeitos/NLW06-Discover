export default function Modal(){

  const wrapper = document.querySelector(".modal-wrapper")

  const cancelButton = document.querySelector(".button.cancel")
  
  cancelButton.addEventListener("click",close)
  function open(){
    //Adicionar a classe active para o modal
    wrapper.classList.add("active")
  }

  function close(){
    //Retirar a classe active para o modal
    wrapper.classList.remove("active")
  }

  return {
    open,close
  }
}



