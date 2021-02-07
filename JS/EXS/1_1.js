const stringy = "string";
const numy = 10;
const  objy = {type:"Fiat", model:"500", color:"white"};
const boly = true;
let nully = null;
const undy = undefined;
const symy = Symbol();

const listy = [stringy,numy,objy,boly,nully,undy,symy];

function printit(){
  listy.forEach(element => {
    console.log(typeof(element))
  });
}
printit();