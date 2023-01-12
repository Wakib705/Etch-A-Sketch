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

container.addEventListener("pointerdown", function(e){
    e.target.style.backgroundColor = "green"
    // container.addEventListener('mouseover', (event) => {
    //     event.target.style.backgroundColor = "green"
    // });

   
    container.addEventListener('mouseover', draw);
        
    container.addEventListener("pointerup", () => {
      container.removeEventListener('mouseover', draw);
        });
    function draw(hoveredBoxes){
        hoveredBoxes.target.style.backgroundColor = "green" 
    }
    e.stopPropagation()
    
})


