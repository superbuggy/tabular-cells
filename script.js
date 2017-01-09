$(document).ready(function(){
  drawGuitarTable(6,22);
})


function drawGuitarTable (numStrings, numFrets){
  let table = $("<table><tbody></tbody></table>");
  //starts at one for the first fret
  for (let i = 1; i <= numFrets; i++){
    let fret = $("<tr></tr>");
    for (let j = numStrings; j > 0; j--){
      let cell = $(`<td data-string='${j}' data-fret='${i}'></td>`)
      cell.append(`<div data-string='${j}' data-fret='${i}' class="string"></div>`);
      fret.append(cell);
    }
    table.append(fret);
  }
  $("main").append(table);
  // $("td").append(`<div class="string"></div>`);
  $("td").mouseover( (e) => {
    let $el = $(e.target)
    let stringAndFretArr = getStringAndFret($el)
    writeFrettedNote(...stringAndFretArr)
  });
  $("td").click( (e) => {
    let $el = $(e.target)
    let stringAndFretArr = getStringAndFret($el)
    fretNote(...stringAndFretArr)
  });
}


function fretNote(string, fret){
  let $foundEl = $("table").find(`div[data-string=${string}][data-fret=${fret}]`)
  $foundEl.append(
    "<div data-string=${string} data-fret=${fret} class='fretted'></div>"
  )
  $foundEl.click( ()=>{$(this).remove()})
  console.log(string,fret,$foundEl);

}

function getStringAndFret($el){
  let stringNum = $el.attr("data-string")
  let fretNum = $el.attr("data-fret")
  return [stringNum, fretNum]
}

function writeFrettedNote(stringNum, fretNum){
  let tuning = {
    "6": "E",
    "5": "A",
    "4": "D",
    "3": "G",
    "2": "B",
    "1": "E"
  }

  let stringNote = tuning[stringNum]
  $("#position").text(`${stringNote + stringNum}: ${fretNum}`)
}
