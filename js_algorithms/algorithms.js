// Функции для работы с числами

// Временная сложность: O(sqrt(n)) - сублинейная
function isPrime(number) {
    if (number <= 1) return false;
    if (number <= 3) return true;
    if (number % 2 === 0 || number % 3 === 0) return false;
    for (let i = 5; i * i <= number; i += 6) {
        if (number % i === 0 || number % (i + 2) === 0) return false;
    }
    return true;
}

// Временная сложность: O(n) - линейная
function factorial(n) {
    if (n < 0) return null;
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

// Временная сложность: O(n) - линейная
function fibonacci(n) {
    if (n <= 0) return [];
    if (n === 1) return [0];
    const result = [0, 1];
    for (let i = 2; i < n; i++) {
        result.push(result[i - 1] + result[i - 2]);
    }
    return result;
}

// Временная сложность: O(log(min(a, b))) - логарифмическая
// Алгоритм Евклида
function gcd(a, b) {
    a = Math.abs(a);
    b = Math.abs(b);
    while (b !== 0) {
        [a, b] = [b, a % b];
    }
    return a;
}

// Функции для работы со строками

// Временная сложность: O(n) - линейная
function isPalindrome(str) {
    const clean = str.toLowerCase().replace(/[^a-zа-яё0-9]/g, '');
    let left = 0;
    let right = clean.length - 1;
    while (left < right) {
        if (clean[left] !== clean[right]) return false;
        left++;
        right--;
    }
    return true;
}

// Временная сложность: O(n) - линейная
function countVowels(str) {
    const vowels = 'аеёиоуыэюяaeiouy';
    let count = 0;
    for (let char of str.toLowerCase()) {
        if (vowels.includes(char)) count++;
    }
    return count;
}

// Временная сложность: O(n) - линейная
// Без использования split/reverse/join
function reverseString(str) {
    let result = '';
    for (let i = str.length - 1; i >= 0; i--) {
        result += str[i];
    }
    return result;
}

// Временная сложность: O(n) - линейная
function findLongestWord(sentence) {
    const words = sentence.split(/\s+/);
    let longest = '';
    for (let word of words) {
        const cleanWord = word.replace(/[^a-zа-яё]/gi, '');
        if (cleanWord.length > longest.length) longest = cleanWord;
    }
    return longest;
}

// Функции для работы с массивами

// Временная сложность: O(n) - линейная
function findMax(arr) {
    if (!arr.length) return undefined;
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) max = arr[i];
    }
    return max;
}

// Временная сложность: O(n) - линейная (с использованием Set)
function removeDuplicates(arr) {
    return [...new Set(arr)];
}

// Временная сложность: O(n^2) - квадратичная
function bubbleSort(arr) {
    const result = [...arr];
    const n = result.length;
    for (let i = 0; i < n - 1; i++) {
        let swapped = false;
        for (let j = 0; j < n - 1 - i; j++) {
            if (result[j] > result[j + 1]) {
                [result[j], result[j + 1]] = [result[j + 1], result[j]];
                swapped = true;
            }
        }
        if (!swapped) break; // Оптимизация: если обменов не было, массив отсортирован
    }
    return result;
}

// Временная сложность: O(log n) - логарифмическая
function binarySearch(sortedArr, target) {
    let left = 0;
    let right = sortedArr.length - 1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (sortedArr[mid] === target) return mid;
        if (sortedArr[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return -1;
}

// Утилитарные функции

// Временная сложность: O(n) - линейная
function formatCurrency(amount, currency = '₽') {
    // Форматируем: 1234.56 → "1 234.56 ₽"
    const formatted = amount.toFixed(2).replace('.', ',');
    const parts = formatted.split(',');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
    return parts.join('.') + ' ' + currency;
}

// Временная сложность: O(n) - линейная
function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Временная сложность: O(n) - линейная (где n — длина пароля)
function generatePassword(length = 8) {
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const specials = '!@#$%^&*()_+~`|}{[]:;?><,./-=';

    const allChars = lowercase + uppercase + numbers + specials;
    let password = '';

    // Гарантируем наличие хотя бы одного символа каждого типа
    password += lowercase[Math.floor(Math.random() * lowercase.length)];
    password += uppercase[Math.floor(Math.random() * uppercase.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += specials[Math.floor(Math.random() * specials.length)];

    // Добиваем оставшуюся длину случайными символами
    for (let i = password.length; i < length; i++) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }

    // Перемешиваем (Fisher-Yates), чтобы символы не шли в строгом порядке
    const arr = password.split('');
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }

    return arr.join('');
}