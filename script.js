function myFunction () {
  var txt = document.getElementById("textarea").value;
  var avgWrd = 0;
  var spaces = 0;
  var sents = 0;
  var words = 1;

  for (var i = 0; i<=txt.length; i++){
    if (txt[i]==' '){
    spaces++;
    words++;
    }

    if (txt[i]=='.'|| txt[i]=='?' ||txt[i]== '!'){
      sents++;
    }
  }

  avgWrd=words/sents;

  document.getElementById("row1").innerHTML = 'There are an average of ' + avgWrd + ' Words Per Sentence';
  document.getElementById("row2").innerHTML = 'There are ' + spaces + ' Spaces in the Text';
  document.getElementById("row3").innerHTML = 'There are ' + words + ' Words in the Text';
  document.getElementById("row4").innerHTML = 'There are ' + sents + ' Sentences in the Text';
}
