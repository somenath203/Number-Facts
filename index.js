const fact = document.querySelector('#fact');
const wrapperFact = document.querySelector('.wrapper-fact');
const factText = document.querySelector('#factTextBox');
const numberInput = document.querySelector('#numberInput');
const numberSpan = document.querySelector('span');


numberInput.addEventListener('input', () => {

    const number = numberInput.value;


    fetch(`http://numbersapi.com/${number}`)
        .then(response => response.text())
        .then(data => {

            if (number === '') {

                fact.style.display = 'none';

                wrapperFact.style.display = 'none';

            }

            if (number !== '') {

                fact.style.display = 'block';

                wrapperFact.style.display = 'block';

                factText.textContent = data;

                numberSpan.textContent = number;

            }
        })
        .catch(err => console.log(err));

});

