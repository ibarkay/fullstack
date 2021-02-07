var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var monthNames = [ "January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December" ];

var d = new Date();

function dayz(){
  return `Today is ${days[d.getDay()]} the ${d.getDate()} of ${monthNames[d.getMonth()]}, ${d.getFullYear()}`
}
console.log(dayz())