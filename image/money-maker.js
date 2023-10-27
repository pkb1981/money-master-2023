
// calculate the expense by mouse eventlistener function

document.getElementById('btn-calculate').addEventListener('click', function () {
    // getting income input
    const incomeField = document.getElementById('income-input');
    const incomeFieldInput = incomeField.value;
    const incomeFieldValue = parseFloat(incomeFieldInput);
    incomeField.value = '';
    // food input
    const foodExpenseInput = document.getElementById('food');
    const foodExpenseInputString = foodExpenseInput.value;
    const foodExpenseInputValue = parseFloat(foodExpenseInputString);

    //rent input
    const rentExpenseInput = document.getElementById('rent');
    const rentExpenseInputString = rentExpenseInput.value;
    const rentExpenseInputValue = parseFloat(rentExpenseInputString);

    // clothes input
    const clothesExpenseInput = document.getElementById('clothes');
    const clothesExpenseInputString = clothesExpenseInput.value;
    const clothesExpenseInputValue = parseFloat(clothesExpenseInputString);

    // total expense
    const totalExpensesArea = document.getElementById('total-expenses');
    const totalExpensesString = totalExpensesArea.innerText;
    const totalExpensesValue = parseFloat(totalExpensesString);
    const currentExpensesValue = totalExpensesValue + foodExpenseInputValue + rentExpenseInputValue + clothesExpenseInputValue;
    totalExpensesArea.innerText = currentExpensesValue;
    foodExpenseInput.value = '';
    rentExpenseInput.value = '';
    clothesExpenseInput.value = '';

    // Balance calculation
    const balanceField = document.getElementById('balance');
    const balanceFieldString = balanceField.innerText;
    const balanceFieldValue = parseFloat(balanceFieldString);
    const currentBalance = balanceFieldValue + incomeFieldValue - currentExpensesValue;
    balanceField.innerText = currentBalance;
});

// click add eventlistener mouse function for 20% saving
document.getElementById('btn-save').addEventListener('click', function () {

    // accessing balance access 
    const balanceField = document.getElementById('balance');
    const balanceFieldString = balanceField.innerText;
    const balanceFieldValue = parseFloat(balanceFieldString);
    balanceField.innerText = balanceFieldValue;

    // store income output to saving
    const savingAmountArea = document.getElementById('saving-amount');
    const savingAreaOutput = savingAmountArea.innerText;
    const savingAreaValue = parseFloat(savingAreaOutput);
    const twentyPercentSaving = savingAreaValue + balanceFieldValue * 0.20;
    const savingFixed = twentyPercentSaving.toFixed(2);
    // set saving output
    savingAmountArea.innerText = savingFixed;

    // remaining balance calculation
    const remainingBalanceField = document.getElementById('remaining-balance');
    const remainingBalanceFieldString = remainingBalanceField.innerText;
    const remainingBalanceFieldValue = parseFloat(remainingBalanceFieldString);
    const currentRemainingBalance = remainingBalanceFieldValue + balanceFieldValue - savingFixed;
    const RemainingFixed = currentRemainingBalance.toFixed(2)
    remainingBalanceField.innerText = RemainingFixed;

});