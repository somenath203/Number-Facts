const fact = document.querySelector('#fact');
const wrapperFact = document.querySelector('.wrapper-fact');
const factText = document.querySelector('#factTextBox');
const numberInput = document.querySelector('#numberInput');
const numberSpan = document.querySelector('span');


numberInput.addEventListener('input', () => {
    
    const number = numberInput.value;

    const xhr = new XMLHttpRequest();

    xhr.open('GET', `http//numbersapi.com/${number}`);

    xhr.onload = function() {

        if(number === '') {
            
            fact.style.display = 'none';

            wrapperFact.style.display = 'none';

        }

        if(this.status === 200 && number !== '') {

            numberSpan.textContent = number;

            fact.style.display = 'block';

            wrapperFact.style.display = 'block';

            factText.textContent = this.responseText;


        }

    }


    xhr.send();

});

