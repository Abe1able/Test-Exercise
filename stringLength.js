const stringLength = (string) => {

    let count = 0;

    for(let char of string) {
        count++;
    }
    if(count >= 1 && count <= 10){
         return count;
        }
    else {
        return "Error";}

    
}

//export default stringLength;
module.exports = stringLength;