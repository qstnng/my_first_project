// Функция для вывода результатов тестов
function runTest(testName, actual, expected) {
    const isEqual = JSON.stringify(actual) === JSON.stringify(expected);
    const resultElement = document.createElement('div');
    resultElement.className = `test-result ${isEqual ? 'success' : 'error'}`;

    resultElement.innerHTML = `
        <strong>${testName}</strong>
        ${isEqual ? '✅ УСПЕХ' : '❌ ОШИБКА'}<br>
        Ожидалось: ${JSON.stringify(expected)}<br>
        Получено: ${JSON.stringify(actual)}
    `;

    document.getElementById('testResults').appendChild(resultElement);
    console.log(`${testName}:`, isEqual ? '✅ УСПЕХ' : '❌ ОШИБКА', { expected, actual });
}

// Запуск всех тестов
function runAllTests() {
    console.log('=== ЗАПУСК ТЕСТОВ ===');

    // Тесты для работы с числами
    runTest('isPrime(7)', isPrime(7), true);
    runTest('isPrime(10)', isPrime(10), false);
    runTest('isPrime(1)', isPrime(1), false);
    runTest('factorial(5)', factorial(5), 120);
    runTest('factorial(0)', factorial(0), 1);
    runTest('gcd(54, 24)', gcd(54, 24), 6);
    runTest('gcd(17, 5)', gcd(17, 5), 1);
    runTest('fibonacci(6)', fibonacci(6), [0, 1, 1, 2, 3, 5]);

    // Тесты для работы со строками
    runTest('isPalindrome("А роза упала на лапу Азора")', isPalindrome("А роза упала на лапу Азора"), true);
    runTest('isPalindrome("Привет")', isPalindrome("Привет"), false);
    runTest('countVowels("JavaScript")', countVowels("JavaScript"), 3);
    runTest('countVowels("Привет")', countVowels("Привет"), 2);
    runTest('reverseString("hello")', reverseString("hello"), "olleh");
    runTest('findLongestWord("Самое длинное слово в предложении")', findLongestWord("Самое длинное слово в предложении"), "предложении");

    // Тесты для работы с массивами
    runTest('findMax([3, 7, 2, 9, 1])', findMax([3, 7, 2, 9, 1]), 9);
    runTest('findMax([-5, -2, -10])', findMax([-5, -2, -10]), -2);
    runTest('removeDuplicates([1, 2, 2, 3, 4, 4, 5])', removeDuplicates([1, 2, 2, 3, 4, 4, 5]), [1, 2, 3, 4, 5]);
    runTest('bubbleSort([64, 34, 25, 12, 22, 11, 90])', bubbleSort([64, 34, 25, 12, 22, 11, 90]), [11, 12, 22, 25, 34, 64, 90]);
    runTest('bubbleSort([])', bubbleSort([]), []);
    runTest('binarySearch([1, 3, 5, 7, 9], 5)', binarySearch([1, 3, 5, 7, 9], 5), 2);
    runTest('binarySearch([1, 3, 5, 7, 9], 4)', binarySearch([1, 3, 5, 7, 9], 4), -1);

    // Тесты для утилитарных функций
    runTest('formatCurrency(1234.56)', formatCurrency(1234.56), "1 234.56 ₽");
    runTest('formatCurrency(100)', formatCurrency(100), "100.00 ₽");
    runTest('isValidEmail("test@example.com")', isValidEmail("test@example.com"), true);
    runTest('isValidEmail("invalid.email")', isValidEmail("invalid.email"), false);

    // Тест генератора паролей (проверяем только длину, так как результат случайный)
    const pwd = generatePassword(12);
    runTest('generatePassword(12) - длина', pwd.length, 12);

    console.log('=== ТЕСТИРОВАНИЕ ЗАВЕРШЕНО ===');
}

// Дополнительные демонстрации в консоли
function demonstrateAlgorithms() {
    console.log('\n=== ДЕМОНСТРАЦИЯ АЛГОРИТМОВ ===');
    console.log('Сгенерированный пароль:', generatePassword(12));
    console.log('Числа Фибоначчи до 10:', fibonacci(10));
    console.log('Проверка email "invalid.email":', isValidEmail("invalid.email"));
    const testArray = [5, 2, 8, 1, 9];
    console.log('Исходный массив:', testArray);
    console.log('Отсортированный массив:', bubbleSort(testArray));
    console.log('Максимальный элемент:', findMax(testArray));
}

// Запуск при загрузке страницы
document.addEventListener('DOMContentLoaded', function () {
    runAllTests();
    demonstrateAlgorithms();
});