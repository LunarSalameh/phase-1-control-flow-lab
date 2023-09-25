function scuberGreetingForFeet(number) {
  // Write your code here!
  if (number <= 400)
    return "This one is on me!";
  else if (number > 400 && number <= 2000)
    return "That will be twenty bucks.";
  else if (number > 2000 && number < 2500)
    return "I will gladly take your thirty bucks.";
  else if (number > 2500)
    return "No can do.";


}

function ternaryCheckCity(cityName) {
  // Write your code here!
  switch (cityName) {
    case 'NYC': return "Ok, sounds good.";
    default: return "No go."
  }
}

function switchOnCharmFromTip(tip) {
  // Write your code here!

  switch (tip) {
    case 'generous': return "Thank you so much.";
    case 'not as generous': return "Thank you.";
    case 'thanks for everything': return "Bye.";
  }
}