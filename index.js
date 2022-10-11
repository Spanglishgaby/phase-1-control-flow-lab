function scuberGreetingForFeet(someNumber){ 
let result
  if (someNumber <= 400){
      result = 'This one is on me!';
    }  else if(someNumber > 400 && someNumber < 2000) {
      result = 'That will be twenty bucks.';
    } else if(someNumber > 2000 && someNumber < 2500){
      result = 'I will gladly take your thirty bucks.';
    } else {
      result = 'No can do.';
    }
  return result
  }

function ternaryCheckCity(X){
  let result1
   X =='NYC' ? (result1 = 'Ok, sounds good.') : (result1 = 'No go.');
  return result1;
}

function switchOnCharmFromTip(tip){
  let result2
  switch(tip){
    case 'generous':
      result2 = "Thank you so much.";
      break;
    case 'not as generous':
      result2 = "Thank you.";
      break;
    default :
      result2 = "Bye.";
      break;
  }
  return result2
}