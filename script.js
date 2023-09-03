const form = document.getElementById('form');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const weigth = document.getElementById('weight').value;
    const heigth = document.getElementById('height').value;

    const bmi = (weigth / (heigth * heigth)).toFixed(2);

    const value = document.getElementById('value');
    let description = '';

    value.classList.add('attention');

    document.getElementById('infos').classList.remove('hidden');

    if (bmi < 18.5) {
        description = 'Cuidado! Você está magro mizera';
    } else if (bmi >= 18.5 && bmi <= 25){
        description = 'Tu ta no peso certo!';
    } else if (bmi >= 25 && bmi <= 30){
        description = "Cuidado! Tu ta com sobrepeso";
    } else if (bmi >= 30 && bmi <= 35){
        description = "Cuidado! Tu ta com obesidade moderada";
    } else if (bmi >= 35 && bmi <= 40){
        description = "Cuidado! Tu ta com Obesidade moderada";
    } else {
        description = "Cuidado! Tu ta gordo feito a mizera";
    }

    value.textContent = bmi.replace('.' , ',');
    document.getElementById('description').textContent = description;
});