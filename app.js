function isPrime(num){
    for (let i=2;i<=Math.sqrt(num);i++){
        if (num%i===0){
            return false;
        }
        return true;
    }
}
function findPrimeNumber(arr){
    let primeNumber=[];
    for(let i=0;i<arr.length;i++){
        if(isPrime(arr[i])){
            primeNumber.push(arr[i]);
        }
        
    }
    return primeNumber;
}


const numbers = [
    19, 23, 4, 16, 28, 13, 31, 8, 29, 14, 6, 35, 2, 11, 17, 5, 9, 27, 12, 30,
  ];

let primes=findPrimeNumber(numbers);
console.log(primes);
let maxNumber=Math.max(...primes);
let minNumber=Math.min(...primes);
console.log(maxNumber, minNumber);
let sum=0;
for(let j=0;j<primes.length;j++){
    sum+=primes[j];
}
console.log(sum);