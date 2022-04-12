
let pin = "pin";
let u = document.getElementById("demo")
function generate(pincode) {
  
  if(pincode === "pin") {
    
    return Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000;
  }
  
    return;
    
  }

  let y = (generate(pin));
  u.innerHTML = y;
  console.log(y);






// let e = document.getElementById("kurs")

// function convert(currency,sum) {
//   if(currency == "sum-rub") {

//     return (sum /143);
//   }
//     else if (currency == "usd-sum") {

//     return (sum * 11329);
  
//   }
  
//   return;
// }

// let currency = prompt();
// let sum = prompt();

// let x = (convert(currency,sum));
// e.innerHTML = "Bugungi kursda :"+ x;
// console.log(x);






