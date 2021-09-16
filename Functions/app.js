/* function greet(firstName, lastName){
    console.log(`Hey there,${firstName} ${lastName[0]}.`)
}
function repeat(str, numTimes){
    let result ='';
    for (let i =0; i< numTimes;i++){
       result += str;
    }
}
console.log(result)
 */
//Week
let days =["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]
function returnDay(day){
    for (let i =0 ; i<=days.length ; i++){
        if (day<1 || day>7){
            return null;
        }
        else {return days[day-1];}
    }
}