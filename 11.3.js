 num = prompt('Введите число от 0 до 1000')
 
function IsPrime(num) {
  
  if (num <= 0 || num >= 1000) {
    
    return "данные неверны";
    
  } else {
    
    for (let i = 2; i < num; i++) {
      
      if (num % i === 0) {
        
        return "непростое число";
        
      }
    }
    return "простое число";
  }
}

console.log(IsPrime(num));
