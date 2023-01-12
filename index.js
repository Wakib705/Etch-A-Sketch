let container = document.querySelector("container")
let button = document.querySelector("#btn")


function divGenerator(number) {
    for (i=0; i<number; i++) {
        const div = document.createElement("div");
        container.appendChild(div)
      }
}
divGenerator(256)
 button.addEventListener("click", function(){
  let numberOfDivs = parseInt(prompt("Enter a Value", "0"));
  if (numberOfDivs <=64) {
  container.setAttribute(`style`, `grid-template-columns: repeat(${numberOfDivs}, 1fr);  grid-template-rows: repeat(${numberOfDivs}, 1fr);`)
  var child = container.lastElementChild; 
  while (child) {
      container.removeChild(child);
      child = container.lastElementChild;
      //find out about this
  }
  divGenerator(numberOfDivs*numberOfDivs)
 
  }
 })




//Drawing on the sketchboard
var color = "#"
function randomColor(colorOfBox){
    color = "#"
    var symbols = "0123456789ABCDEF"
    for (let i = 0; i < 6; i++) {
        color = color + symbols[Math.floor(Math.random()* 16)]
    }
    colorOfBox.target.style.backgroundColor = color

}
container.addEventListener("pointerdown", function(e){
    randomColor(e)
   
    container.addEventListener('mouseover', draw);
        
    container.addEventListener("pointerup", () => {
      container.removeEventListener('mouseover', draw);
        });
    function draw(hoveredBoxes){
      randomColor(hoveredBoxes)
       
    }
    e.stopPropagation()
    
})






