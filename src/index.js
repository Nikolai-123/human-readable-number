module.exports = function toReadable (number) {

const less20=['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
const tens = ['','','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];
const hundred = ['hundred'];
let array = [];

if (number === 0){
    return 'zero'
}
if(number >= 100){
    array.push(less20[Math.floor(number/100)] );
    array.push(hundred[0]);
    }
 if((number -(Math.floor(number/100)*100)) >=20 ){
   let num = (number -(Math.floor(number/100)*100));
    num = (Math.floor(num/10));
    array.push(tens[num]);
    array.push((less20[(number -(Math.floor(number/100)*100))%10]));
} else if((number -(Math.floor(number/100)*100)) <20 ){
    let num = (number -(Math.floor(number/100)*100));
    array.push(less20[num]);
   };

   array= array.join(' ').trim();
return array;
}
