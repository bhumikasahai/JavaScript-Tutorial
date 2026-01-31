const form = document.querySelector('form')
form.addEventListener('submit',function(e){
    e.preventDefault()
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')
    if(height === ' ' || height < 0 || isNaN(height)){
        results.innerHTML = `please give valid height ${height}`;
    }else if(weight === ' ' || weight < 0 || isNaN(weight)){
        results.innerHTML = `please enter valid wieght ${weight}`;
    }else{
        const bmi = (weight/((height*height)/10000)).toFixed(2)
        if(bmi<18.6){
            results.innerHTML = `<span>Sorry, your  bmi is under weight ${bmi}</span>`;
        }else if(bmi>18.6 && bmi<24.9){
            results.innerHTML = `<span>Congatulations! your  bmi is is normal range ${bmi}</span>`
        }else{
            results.innerHTML = `<span>Sorry, your  bmi is over weight ${bmi}</span>`;
        }
    }

});