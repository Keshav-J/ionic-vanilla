const reasonInput = document.querySelector('#input-reason');
const amountInput = document.querySelector('#input-amount');

const cancelButton = document.querySelector('#btn-cancel');
const confirmButton = document.querySelector('#btn-confirm');

const expensesList = document.querySelector('#expenses-list');

const totalExpensesOutput = document.querySelector('#total-expenses');
let totalExpenses = 0;

const alertController = document.querySelector('ion-alert-controller');

const clear = () => {
    reasonInput.value = '';
    amountInput.value = '';
}

confirmButton.addEventListener('click', () => {
    console.log('It works!');
    const enteredReason = reasonInput.value;
    const enteredAmount = amountInput.value;
    
    if (enteredReason.trim().length <= 0 || enteredAmount <= 0 || enteredAmount.trim().length <= 0) {
        alertController.create({
            header: 'Invalid inputs',
            message: 'Please enter valid reason and amount.',
            buttons: ['Okay']
        }).then(alertElement => {
            alertElement.present();
        });
        return;
    }

    const newItem = document.createElement('ion-item');
    newItem.textContent = enteredReason + ': $' + enteredAmount;

    expensesList.appendChild(newItem);

    totalExpenses += +enteredAmount;
    totalExpensesOutput.textContent = totalExpenses;
    clear();

    console.log(enteredReason, enteredAmount);
});

cancelButton.addEventListener('click', clear);
