class Guess{
    constructor(num){
        this.num = num;
    }
}

class UI{
    checkNumber(num){
        const random = document.querySelector('#random');
        const element = document.createElement('div');
        let message;
        let cssClass;
        const randomNum = Math.floor(Math.random() * 11);

        if (num == randomNum) {
            message = 'Win!';
            cssClass = 'success';

            this.showMessage(message,cssClass);
        }else {
            message = 'Loose!';
            cssClass = 'danger';

            this.showMessage(message, cssClass);
        }

        element.innerHTML = `
            <div class="card text-center mb-4">
                <div class="card-body alert-${cssClass}">
                    <h3 id="result">Your number is ${num} and the answer is ${randomNum}.</h3>
                </div>
            </div>
        `;

        random.appendChild(element);

        setTimeout(function(){
            document.querySelector('#result').parentElement.parentElement.remove();
        }, 2000);
    }

    showMessage(message, cssClass){
        const div = document.createElement('div');
        
        div.appendChild(document.createTextNode(message));
        div.className = `alert alert-${cssClass} mt-2`;

        // Show in DOM

        const container = document.querySelector('.container');
        const app = document.querySelector('#app');

        container.insertBefore(div,app);

        setTimeout(function(){
            document.querySelector('.alert').remove();
        }, 2000);
    }



    resetForm(){
        document.querySelector('#play-form').reset();
    }
}

//DOM EVENTS
document.querySelector('#play-form').addEventListener('submit', function(e){
    const num = document.querySelector('#user-number').value;

    let guess = new Guess();

    let ui = new UI();

    if (num == 0 ) {
        return ui.showMessage('Insert a number below', 'danger text-center');
    } else if (num < 0 || num > 10) {
        return ui.showMessage('The number must be less than or equal to 10');
    } else{
        guess = {
            num
        }

        ui.checkNumber(guess.num);
        ui.resetForm();
    }

    e.preventDefault();
    
});