class Guess{
    constructor(num){
        this.num = num;
    }
}

class UI{
    checkNumber(num){
        const random = document.getElementById('random');
        const element = document.createElement('div');
        let result;
        const randomNum = Math.floor(Math.random() * 11);

        if (num == randomNum) {
            result = 'Win!';
        }else {
            result = 'Loose!';
        }

        element.innerHTML = `
            <div class="card text-center mb-4">
                <div class="card-body">
                    <span class="h3 text-danger">You ${result}</span> 
                    <strong class="text-warning">Your number is ${num} and the answer is ${randomNum}.</strong>
                </div>
            </div>
        `;

        random.appendChild(element);
    }

    resetForm(){
        document.getElementById('play-form').resetForm();
    }
}

//DOM EVENTS
document.getElementById('play-form').addEventListener('submit', function(e){
    const num = document.getElementById('user-number').value;

    let guess = new Guess();

    let ui = new UI();

    guess = {
        num
    }

    console.log(guess.num);

    ui.checkNumber(guess.num);

    e.preventDefault();
    
});