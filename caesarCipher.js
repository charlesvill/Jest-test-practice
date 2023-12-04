function caesarCipher (string){
  let shiftedString = "";
  for(let i = 0; i < string.length; i++){
    const char = string.charAt(i);
    let newCharNum = char.charCodeAt(0) + 3;
    if(newCharNum > 122 && newCharNum){
      newCharNum -= 26;
    } else if(newCharNum > 90 && newCharNum < 97){
      newCharNum -= 26;
    }
    const newChar = String.fromCharCode(newCharNum);
    shiftedString += newChar;
  }
  console.log(shiftedString);
  return shiftedString;
}
caesarCipher('amy');
module.exports = caesarCipher;
