var submitAnswer = function() {

  var radios = document.getElementsByName('choice');
  var val= "";
  for (var i = 0, length = radios.length; i < length; i++) {
  if (radios[i].checked) {
  val = radios[i].value; 
  break;
  }
  }
  
if (val == "" ) {
    alert('choose one');
  } else if ( val == "Scripting" ) {
    alert('Answer is correct !');
  } else {
    alert('Answer is wrong');
  }
};

if (val == "" ) {
  alert('choose one');
} else if ( val == "useful" ) {
  alert('Answer is correct !');
} else {
  alert('Answer is wrong');
};

if (val == "" ) {
  alert('choose one');
} else if ( val == "fun" ) {
  alert('Answer is correct !');
} else {
  alert('Answer is wrong');
};

if (val == "" ) {
  alert('choose one');
} else if ( val == "Seattle" ) {
  alert('Answer is correct !');
} else {
  alert('Answer is wrong');
};

if (val == "" ) {
  alert('choose one');
} else if ( val == "JavaScript Library" ) {
  alert('Answer is correct !');
} else {
  alert('Answer is wrong');
};

if (val == "" ) {
  alert('choose one');
} else if ( val == "Ruby" ) {
  alert('You should Learn Ruby!');
} else {
  alert('Answer is wrong');
};

