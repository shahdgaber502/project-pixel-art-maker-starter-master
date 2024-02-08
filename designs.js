var form =document.getElementById('sizePicker');
var table =document.getElementById('pixelCanvas');
  // Creates rows and cells
  function makeGrid() {
  table.innerHTML="";
  var rowsNumber=document.getElementById('inputHeight').value;
  var cellsNumber=document.getElementById('inputWidth').value; 
for(var i=0 ; i<rowsNumber ; i++){
  var rows =document.createElement('tr');
  table.appendChild(rows);
for(var x=0 ; x<cellsNumber ; x++){
  var cells =document.createElement('td');
  rows.appendChild(cells);
  //select color input
  cells.addEventListener("click" , function(){
    var color = document.getElementById('colorPicker').value;
    this.style.backgroundColor=color;
  })
}
}
}

form.addEventListener("submit" , function(event){
event.preventDefault();
makeGrid();
})
