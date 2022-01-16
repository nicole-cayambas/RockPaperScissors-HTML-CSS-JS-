const result = document.getElementById("result")


function randomize() {
  let random = Math.floor(Math.random()*3)+1
  switch(random){
    case 1: 
      return "Rock";
      break;
    case 2:
      return "Paper";
      break;
    case 3:
      return "Scissor";
      break;
  }
}

function changeColor() {
  result.style.color = "rgb("
  + Math.floor(Math.random() * 255) + ","
  + Math.floor(Math.random() * 255) + ","
  + Math.floor(Math.random() * 255)
  + ")"
}

function shoot(){
  result.textContent = randomize()
  changeColor()
}