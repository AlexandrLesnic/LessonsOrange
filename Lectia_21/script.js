//Vadim și Alex încearcă să-și compare BMI (indicele de masă corporală), care este calculat folosind formula: BMI = masă / înălțime ** 2. (masa în kg și înălțimea în metri).

//Varinata 1
// BMI Vadim
let greutateVadim = 78;
let inaltimeVadim = 1.69;
let BMIVadim = greutateVadim / (inaltimeVadim ** 2);

// BMI Alex
let greutateAlex = 92;
let inaltimeAlex = 1.95;
let BMIAlex = greutateAlex / (inaltimeAlex ** 2);

//Bolean
let BMIbolean = BMIVadim > BMIAlex;

console.log('VARINATA 1');
console.log('<< BMI Vadim >>');
console.log('Vadim BMI este: ' + BMIVadim.toFixed(0) + ';');
console.log('<< BMI Alex >>');
console.log('Alex BMI este: ' + BMIAlex.toFixed(0) + ';');
console.log('BMI Vadim mai mare ca BMI Alex: ' + BMIbolean + ';');

//Varinata 2
// BMI Vadim
let greutateVadim2 = 95;
let inaltimeVadim2 = 1.88;
let BMIVadim2 = greutateVadim2 / (inaltimeVadim2 ** 2);

// BMI Alex
let greutateAlex2 = 85;
let inaltimeAlex2 = 1.76;
let BMIAlex2 = greutateAlex2 / (inaltimeAlex2 ** 2);

//Bolean
let BMIbolean2 = BMIVadim2 > BMIAlex2;

console.log('VARINATA 2');
console.log('<< BMI Vadim >>');
console.log('Vadim BMI este: ' + BMIVadim2.toFixed(0) + ';');
console.log('<< BMI Alex >>');
console.log('Alex BMI este: ' + BMIAlex2.toFixed(0) + ';');
console.log('BMI Vadim mai mare ca BMI Alex: ' + BMIbolean2 + ';');