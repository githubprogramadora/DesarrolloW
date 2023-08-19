// ... (código existente) ...

function showSection(sectionId) {
    const sections = document.querySelectorAll('.exercise-section');
    sections.forEach(section => {
        section.style.display = 'none';
    });
    const targetSection = document.getElementById(sectionId);
    targetSection.style.display = 'block';
}

function calculateBMI() {
    const weightInput = document.getElementById('weightInput');
    const heightInput = document.getElementById('heightInput');
    const bmiResult = document.getElementById('bmiResult');

    const weight = parseFloat(weightInput.value);
    const height = parseFloat(heightInput.value);

    if (isNaN(weight) || isNaN(height)) {
        bmiResult.textContent = 'Por favor, ingresa valores válidos.';
        return;
    }

    const bmi = weight / (height * height);
    let category;

    if (bmi < 18.5) {
        category = 'Bajo de peso';
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        category = 'Normal';
    } else if (bmi >= 25 && bmi <= 29.9) {
        category = 'Sobrepeso';
    } else {
        category = 'Obeso';
    }

    bmiResult.textContent = `Tu IMC es ${bmi.toFixed(2)} (${category}).`;
}

// Mostrar la primera sección por defecto
showSection('imc');

function likes(number) {
    if (number < 1000) {
        return number.toString();
    } else if (number < 1000000) {
        return (number / 1000).toFixed(0) + 'K';
    } else {
        return (number / 1000000).toFixed(0) + 'M';
    }
}

function convertLikes() {
    const likesInput = document.getElementById('likesInput');
    const likesResult = document.getElementById('likesResult');

    const inputNumber = parseFloat(likesInput.value);

    if (isNaN(inputNumber)) {
        likesResult.textContent = 'Por favor, ingresa un número válido.';
        return;
    }

    const formattedLikes = likes(inputNumber);
    likesResult.textContent = `Número de Likes: ${formattedLikes}`;
}

// Mostrar la primera sección por defecto
showSection('imc');


function validatePassword() {
    const usernameInput = document.getElementById('usernameInput');
    const passwordInput = document.getElementById('passwordInput');
    const passwordResult = document.getElementById('passwordResult');

    const username = usernameInput.value;
    const password = passwordInput.value;

    // Ejemplo de contraseña válida (puedes cambiar esto)
    const validPassword = '12345';
    

    if (username === '' || password === '') {
        passwordResult.textContent = 'Ingresa usuario y contraseña.';
        return;
    }

    if (password === validPassword) {
        passwordResult.textContent = 'Contraseña válida. Acceso permitido.';
    } else {
        passwordResult.textContent = 'Contraseña incorrecta. Acceso denegado.';
    }
}

// Mostrar la primera sección por defecto
showSection('imc');




function calculateImpuestos(edad, ingresos) {
    if (edad >= 18 && ingresos >= 1000) {
        return ingresos * 0.4;
    } else {
        return 0;
    }
}

function calculateTaxes() {
    const ageInput = document.getElementById('ageInput');
    const incomeInput = document.getElementById('incomeInput');
    const taxResult = document.getElementById('taxResult');

    const age = parseInt(ageInput.value);
    const income = parseFloat(incomeInput.value);

    if (isNaN(age) || isNaN(income)) {
        taxResult.textContent = 'Ingresa valores válidos.';
        return;
    }

    const taxes = calculateImpuestos(age, income);
    taxResult.textContent = `Impuestos a pagar: ${taxes.toFixed(2)}`;
}

// Mostrar la primera sección por defecto
showSection('imc');



function printArray() {
    const arrayInput = document.getElementById('arrayInput');
    const arrayList = document.getElementById('arrayList');

    const elements = arrayInput.value.split(',').map(element => element.trim());

    if (elements.length === 0) { 
        arrayList.innerHTML = '<li>No se ingresaron elementos.</li>';
        return;
    }

    let html = '';
    elements.forEach((element, index) => {
        html += `<li>${element}</li>`;
    });

    arrayList.innerHTML = html;
}

// Mostrar la primera sección por defecto
showSection('imc');



function numeroDeCaracteres(texto, caracter) {
    const regex = new RegExp(caracter, 'g');
    return (texto.match(regex) || []).length;
}

function countCharacters() {
    const textInput = document.getElementById('textInput');
    const charInput = document.getElementById('charInput');
    const charCountResult = document.getElementById('charCountResult');

    const text = textInput.value;
    const char = charInput.value;

    if (text === '' || char === '') {
        charCountResult.textContent = 'Ingresa texto y carácter.';
        return;
    }

    const count = numeroDeCaracteres(text, char);
    charCountResult.textContent = `El carácter '${char}' aparece ${count} veces.`;
}

// Mostrar la primera sección por defecto
showSection('imc');


function sumarArreglo(arreglo) {
    return arreglo.reduce((total, num) => total + num, 0);
}

function sumArray() {
    const arraySumInput = document.getElementById('arraySumInput');
    const arraySumResult = document.getElementById('arraySumResult');

    const inputArray = arraySumInput.value.split(',').map(element => parseFloat(element.trim()));

    if (inputArray.some(isNaN)) {
        arraySumResult.textContent = 'Ingresa valores numéricos válidos.';
        return;
    }

    const sum = sumarArreglo(inputArray);
    arraySumResult.textContent = `La suma del arreglo es: ${sum}`;
}

// Mostrar la primera sección por defecto
showSection('imc');


function multiplicarArreglo(arreglo) {
    return arreglo.reduce((total, num) => total * num, 1);
}

function multiplyArray() {
    const arrayMultiplyInput = document.getElementById('arrayMultiplyInput');
    const arrayMultiplyResult = document.getElementById('arrayMultiplyResult');

    const inputArray = arrayMultiplyInput.value.split(',').map(element => parseFloat(element.trim()));

    if (inputArray.some(isNaN)) {
        arrayMultiplyResult.textContent = 'Ingresa valores numéricos válidos.';
        return;
    }

    const product = multiplicarArreglo(inputArray);
    arrayMultiplyResult.textContent = `La multiplicación del arreglo es: ${product}`;
}

// Mostrar la primera sección por defecto
showSection('imc');

function sumarArregloRango(arreglo, inicio, fin) {
    if (inicio < 0 || fin >= arreglo.length) {
        return NaN;
    }
    return arreglo.slice(inicio, fin + 1).reduce((total, num) => total + num, 0);
}

function sumRangeArray() {
    const arrayRangeInput = document.getElementById('arrayRangeInput');
    const startPositionInput = document.getElementById('startPositionInput');
    const endPositionInput = document.getElementById('endPositionInput');
    const rangeSumResult = document.getElementById('rangeSumResult');

    const inputArray = arrayRangeInput.value.split(',').map(element => parseFloat(element.trim()));
    const startPosition = parseInt(startPositionInput.value);
    const endPosition = parseInt(endPositionInput.value);

    if (inputArray.some(isNaN) || isNaN(startPosition) || isNaN(endPosition)) {
        rangeSumResult.textContent = 'Ingresa valores válidos.';
        return;
    }

    const sum = sumarArregloRango(inputArray, startPosition, endPosition);
    if (isNaN(sum)) {
        rangeSumResult.textContent = 'Las posiciones están fuera del rango del arreglo.';
    } else {
        rangeSumResult.textContent = `La suma en el rango es: ${sum}`;
    }
}

// Mostrar la primera sección por defecto
showSection('imc');

// ... (código existente) ...

function findMaxNumberWithoutMathMax(arreglo) {
    let max = arreglo[0];
    for (let i = 1; i < arreglo.length; i++) {
        if (arreglo[i] > max) {
            max = arreglo[i];
        }
    }
    return max;
}

function findMaxNumber() {
    const maxArrayInput = document.getElementById('maxArrayInput');
    const maxNumberResult = document.getElementById('maxNumberResult');

    const inputArray = maxArrayInput.value.split(',').map(element => parseFloat(element.trim()));

    if (inputArray.some(isNaN)) {
        maxNumberResult.textContent = 'Ingresa valores numéricos válidos.';
        return;
    }

    const maxWithoutMathMax = findMaxNumberWithoutMathMax(inputArray);
    const maxWithMathMax = Math.max(...inputArray);

    maxNumberResult.innerHTML = `Máximo sin Math.max: ${maxWithoutMathMax}<br>Máximo con Math.max: ${maxWithMathMax}`;
}

// Mostrar la primera sección por defecto
showSection('imc');






