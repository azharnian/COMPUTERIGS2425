document.getElementById("bmiForm").addEventListener('submit', function(event){
    event.preventDefault();
    // console.log("Submitted!");

    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);

    const bmi = weight / Math.pow((height/100), 2);

    let status;
    if (bmi < 18.5)
        status = 'Kekurangan Berat Badan';
    else if(bmi < 24.9)
        status = 'Ideal';
    else if(bmi < 30)
        status = 'Kelebihan Berat Badan';
    else 
        status = 'Obesitas';

    // console.log(status);

    const result = `<p>Your BMI is ${Number(bmi).toFixed(2)} and The Result is ${status}</p>`;
    document.getElementById("result").innerHTML = result;
    this.reset();
})