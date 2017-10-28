function theBeatlesPlay(musicians,instruments) {
  var credits=[];
  for(var i=0;i<musicians.length;i++) {
    credits.push(musicians[i] + " plays " + instruments[i]);
  }
  return credits;
}

function johnLennonFacts(facts) {
var i=0;
  while(i<facts.length) {
    facts[i]+="!!!";
    i++;
  }
  return facts;
}

function iLoveTheBeatles(num) {
var array=[];
var i=0;
  do{
    if(num<15){
      i++;
    }
    else {
      return "I love the Beatles!"
    }
  } while(i<=num)
return array;
}
