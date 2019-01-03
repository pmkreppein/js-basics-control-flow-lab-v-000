function scuberGreetingForFeet(value) {
  if (value <= 400) {
    return "This one is on me!"
  }
  else if (value > 2000 && value < 2500) {
    return "I will gladly take your thirty bucks."
  }
  else {
    return "No can do."
  }
};
function ternaryCheckCity(city) {
  let nyc = "NYC";
  const message = city === nyc ? "Ok, sounds good." : "No go.";
  return message;
};
function switchOnCharmFromTip(tip) {
  let response;
  switch (tip) {
    case 'generous':
      response = "Thank you so much.";
      break;
    case 'not as generous':
      response = "Thank you.";
      break;
    default:
      response = "Bye.";
      break;
  };
  return response;
};