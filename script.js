$(document).ready(function(){ 
  console.log("jq");
  drawGuitarTable(6,22);

})


function drawGuitarTable (numStrings, numFrets){
  let table = $("<table><tbody></tbody></table>");
  for (let i = 1; i <= numFrets; i++){
    let fret = $("<tr></tr>"); 
    for (let j = numStrings; j > 0; j--){
      fret.append(`<td class='string${j} fret${i}'></td>`);
    }
    table.append(fret);
  } 
  $("main").append(table);
  $("td").append(`<div class="string"></div>`);
  $("td").mouseover(getStringAndFret);
}

function getStringAndFret(){
 console.log($(this).attr("class")); 
}
