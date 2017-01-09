$(document).ready(function(){
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
  $("td").click( (evt )=> addDot(evt) )
}

function addDot(evt){
  // evt.stopPropagation()
  let el = $(evt.target)
  console.log(el);
  console.log(!!el.find(".fretted").length);

  if ( el.find(".fretted").length ){
    el.find(".fretted").remove()
  } else {
    if ( el.hasClass(".string") ){
      el.append("<div class='fretted'></div>")
    } else {
      el.children(".string").append("<div class='fretted'></div>")
    }
  }
  console.log(!!el.find(".fretted").length);
}

function fretNote(string, fret){


}

function getStringAndFret(){
  let tuning = {
    string6: "E",
    string5: "A",
    string4: "D",
    string3: "G",
    string2: "B",
    string1: "E"
  }
  let gtrStringNumCssClass = $(this).attr("class").split(" ")[0]
  let guitarStringNote = tuning[gtrStringNumCssClass]
  let stringNumber = gtrStringNumCssClass.split("string")[1]
  let fretNum = $(this).attr("class").split("fret")[1]
 $("#position").text(`${guitarStringNote + stringNumber}: ${fretNum}`)
}
