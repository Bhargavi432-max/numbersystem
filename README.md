### Project Name: NumberSystem
The main aim of this project is, to manipulate the numbers of an given array. This includes odd or even number calculation, prime numbers calculation, and there respective sum.

### index.js Code:
```lavascript
const numbers = [
    3, 7, 2, 15, 9, 20, 5, 14, 12, 1, 8, 11, 6, 19, 4, 10, 17, 13, 16, 18,
  ];
let even=[];
let odd=[];
for (let i=0;i<numbers.length;i++){
    if(numbers[i]%2===0){
        even.push(numbers[i]);

    }else{
        odd.push(numbers[i]);
    }
}
console.log(even);
console.log(odd);
```
### app.js Code

```
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
```
### expected outputs are :
```OddEven: [2,20,14,12,8,6,4,10,16,18],[3,7,15,9,5,1,11,19,17,13]
Prime:[19,23,13,31,29,35,11,5,9,27],
Max,Min=35, 5
Sum=219
```
