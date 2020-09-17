var input = document.getElementById("task");
var i = 0;

// enter
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    document.getElementById("btn").click();
  }
});

function add() {
  const textInput = input.value;
  if(!textInput || textInput.length === 0) {
    return;
  }

  var container = document.getElementById("content");

  // criar elemento html
  var elementP = document.createElement("p");
  elementP.className = "itens";
  elementP.id = i.toString();
  var elementBtn = document.createElement("button");
  elementBtn.textContent = "X";
  elementBtn.id = i.toString();
  i++;

  // remover elemento
  elementBtn.addEventListener("click", function( event ) {
    var elements = container.childNodes;
    for( i = elements.length - 1; i >= 0; i--) {
      if(elements[i].id == event.target.id) {
        container.removeChild(elements[i]);
        break;
      }
    }
  }, false);

  // adicionar texto
  elementP.textContent = textInput;
  elementP.appendChild(elementBtn);

  // marcar como concluido
  elementP.addEventListener("click", function( event ) {
    event.target.style.backgroundColor = "var(--color-green)";
    event.target.style.color = "var(--color-gray)";
  }, false);
  
  container.appendChild(elementP);

  input.value = "";
}