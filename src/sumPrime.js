const sumPrime = {
  sumPrime(startNumber, endNumber) {
    let sum = 0
    for (let i=startNumber; i <= endNumber ; i++) {
      if (this.isPrime(i)) {
        sum += i
      }
    }
    return sum
  },
  isPrime (num) {
    for(let i = 2; i < num; i++)
      if(num % i === 0) return false
    return num !== 1
  }
}

module.exports = sumPrime
