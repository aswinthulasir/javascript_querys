document.getElementById('butt_1').addEventListener('click', function() {
    const input = document.getElementById('first_elmnt').value;
    const arr = input.split(',').map(Number);
    const firstElement = arr[0];

    function isPrime(num) {
        if (num <= 1) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    }

    const result1 = isPrime(firstElement) ? `${firstElement} is a prime number` : `${firstElement} is not a prime number`;
    document.getElementById('result1').innerText = result1;
});



// Find the most frequent item of an array
document.getElementById('butt_2').addEventListener('click', function() {
    const input = document.getElementById('freq').value;
    const arr = input.split(',').map(item => item.trim());

    const frequencyMap = {};
    arr.forEach(item => {
        frequencyMap[item] = (frequencyMap[item] || 0) + 1;
    });

    let mostFrequentItem = arr[0];
    let maxCount = 0;
    for (const item in frequencyMap) {
        if (frequencyMap[item] > maxCount) {
            maxCount = frequencyMap[item];
            mostFrequentItem = item;
        }
    }

    document.getElementById('result2').innerText = `Most Frequent Item: ${mostFrequentItem}`;
});



// Iterate from 0 to 15 and check if the current number is odd or even
document.getElementById('butt_3').addEventListener('click', function() {
    let result3 = '';
    for (let i = 0; i <= 15; i++) {
        result3 += `${i} is ${i % 2 === 0 ? 'even' : 'odd'}<br>`;
    }
    document.getElementById('result3').innerHTML = result3;
});



// Find the sum of squares of the elements of an array
document.getElementById('butt_4').addEventListener('click', function() {
    const input = document.getElementById('squares').value;
    const arr = input.split(',').map(Number);

    const sumOfSquares = arr.reduce((sum, num) => sum + num * num, 0);
    document.getElementById('result4').innerText = `Sum of Squares: ${sumOfSquares}`;
});