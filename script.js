let button = document.getElementById('btn');

button.addEventListener('click', () => {
    const age = parseInt(document.getElementById('age').value);
    const height = parseInt(document.getElementById('height').value);
    const weight = parseInt(document.getElementById('weight').value);
    const result = document.getElementById('output');
    let age_status = false,height_status = false, weight_status = false;

    if (age === '' || isNaN(age) || (age <= 0)) {
        document.getElementById('age_error').innerHTML = 'Please provide a age';
    } else {
        document.getElementById('age_error').innerHTML = '';
        age_status = true;
    }

    if (height === '' || isNaN(height) || (height <= 0)) {
        document.getElementById('height_error').innerHTML = 'Please provide a valid height';
    } else {
        document.getElementById('height_error').innerHTML = '';
        height_status = true;
    }

    if (weight === '' || isNaN(weight) || (weight <= 0)) {
        document.getElementById('weight_error').innerHTML = 'Please provide a valid weight';
    } else {
        document.getElementById('weight_error').innerHTML = '';
        weight_status = true;
    }

    if (height_status && weight_status) {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);

        if (bmi < 18.6) {
            result.innerHTML = 'Under weight: ' + bmi;
        } else if (bmi >= 18.6 && bmi < 24.9) {
            result.innerHTML = 'Normal : ' + bmi;
        } else {
            result.innerHTML = 'Over weight : ' + bmi;
        }
    } else {
        alert('Error');
        result.innerHTML ='';

    }
});