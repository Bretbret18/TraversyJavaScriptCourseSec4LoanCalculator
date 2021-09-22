// Listen for submit
document.querySelector('#loan-form')
.addEventListener('submit', calculateResults);

// Calculate Results
function calculateResults(e) {
console.log("calculating...");
// UI Variables
const amount = document.querySelector('#amount');
const interest = document.querySelector('#interest');
const years = document.querySelector('#years');

const monthlyPayment = document.querySelector('#monthly-payment');
const totalPayment = document.querySelector('#total-payment');
const totalInterest = document.querySelector('#total-interest');

// parseFloat() turns into decimal (or float)
const principal = parseFloat(amount.value);
const calculatedInterest = 
parseFloat(interest.value) / 100 / 12;
const calculatedPayments = parseFloat(years.value) * 12;

// Compute monthly payment 
// Math.pow(number, how many times number is multiplied)
const x = Math.pow(1 + calculatedInterest, calculatedPayments);
const monthly = (principal * x * calculatedInterest) / (x - 1);

if(isFinite(monthly)) {
    // toFixed(set number of decimals)
    monthlyPayment.value = monthly.toFixed(2);
    totalPayment.value = (monthly * calculatedPayments).toFixed(2);
    totalInterest.value = ((monthly * calculatedPayments) - principal).toFixed(2);
} else {
    showError('Please check your numbers');
} 

    e.preventDefault();
};

// showError function 
function showError(error) {
    // Create div
    const errorDiv = document.createElement('div');

    // Get Elements
    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading')

    // Add class
    errorDiv.className = 'alert alert-danger';
    
    // Create text node and append to div
    errorDiv.appendChild(document.createTextNode(error));

    // Insert error above heading
    // Call insertBefore() on a parent
    // then pass in element you want to put in (error)
    // put in whatever you want to insert (heading)
    card.insertBefore(errorDiv, heading);

    // setTimeout()
    // Clear error after 3 seconds
    // here we call clearError instead of writing out a 
    // callback function in its' place
    setTimeout(clearError, 3000);
};

function clearError() {
    document.querySelector('.alert').remove();
}












