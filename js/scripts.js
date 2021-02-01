$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    const out = $("input#words").val()
    $("#blockOfText").text(out)
    let splitArr = out.split(' ');
    let wordCounter = {};
    //loop
    for (let i=0; i < splitArr.length; i+=1) {
      let word = splitArr[i];
      if (wordCounter[word] === undefined) {
        wordCounter[word] = 1;
      } else {
        wordCounter[word] += 1;
      }
      wordCount = JSON.stringify(wordCounter, 2, 2);
      $("#countOfText").text(wordCount)
    }
     

    
  });
});

