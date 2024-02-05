let x = prompt("Введите 1е число")
let y = prompt("Введите 2е число")


//for (let x = 0; x < y; x++) {
  const intervalID = setInterval(function(){
    console.log(x); 
  }, 1000, x , y);
}

const timeoutID = setTimeout(function (){
  clearInterval(intervalId)
}, 10000)