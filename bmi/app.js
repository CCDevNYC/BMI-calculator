
  /*Get BMI Body mass index*/
  //1. divide your weight in kilograms (kg) by your height in metres (m)
  // 2. then divide the answer by your height again to get your BMI.
 
    
    var resultOutput = document.getElementById('result');
    var calculate = document.getElementById('calculate');
    var form = document.getElementById('formOne');
    var recalculateLink = document.querySelector('a.hidden');
    var lbs;
    resultOutput.setAttribute('style','display:none');
    calculate.addEventListener('click', compute);

    function compute(){
      
    var lbs = document.getElementById('weightInput');
    var feetInput = document.getElementById('feetInput');
    var inchesInput = document.getElementById('inchesInput');
    
    if (lbs.value == '' || feetInput.value == '' || inchesInput.value == '') {
        alert('One or more fields are empty, please start again!');
        feetInput.value = '';
        inchesInput.value = '';
        weightInput.value = '';
        return;
    }

    var weight = lbs.value;
    var kgVal = 0.453592;
    var kgs = weight * kgVal;
    var feet = feetInput.value;
    var inches = inchesInput.value;
    var heightInMts = (feet / 3.281);
    var term;
    var bmi = (kgs / heightInMts) / heightInMts;
    bmi = bmi.toFixed(2);
    
    if(bmi >= 40){
        term = 'Severily Obese';
      }else if(bmi >= 30 && bmi <= 40){
        term = 'Moderately Obese';
      }    
      else if(bmi >= 25 && bmi <= 29.9){
        term = 'Overweight';
      }else if(bmi >= 18.5 && bmi <= 24.9){
        term = 'Normal';
      }else if(bmi <18.4 && bmi >16 ){
        term = 'Underweight';
      }else if(bmi <16){
        term = 'Severely underweight';
      }

      // Hide the form
      form.setAttribute('style','display: none');
      resultOutput.innerHTML = 'For a height of ' + feet + ' feet' + '-' + inches + ' inches' + ' and a weight of ' + weight + ' pounds' + ' ' + 'Your body mass index is ' + bmi + ' ' + 'and that\'s considered '+ term + '.';
      resultOutput.setAttribute('style', 'display: block');
      recalculateLink.setAttribute('style', 'display: block; color: black');
      let reference = document.getElementById('reference');
      reference.setAttribute('style', 'display: block');
      return bmi;
      
    };

    // Reopen the form and clear all fields
      recalculateLink.addEventListener('click', function () { 
      form.setAttribute('style','display: block');
      recalculateLink.setAttribute('style', 'display: none');
      feetInput.value = '';
      inchesInput.value = '';
      weightInput.value = '';
      resultOutput.setAttribute('style', 'display: none');
      
      reference.setAttribute('style', 'display: none');

  });

