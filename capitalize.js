const capitalize = (str) => {
    const splitString = str.split("");
    splitString[0]= splitString[0].toUpperCase();
    const capString = splitString.join("");
    return capString;
  };
  
  module.exports = capitalize