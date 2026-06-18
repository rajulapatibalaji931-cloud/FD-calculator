document.addEventListener("DOMContentLoaded", function () {
    const investmentInput = document.getElementById("investment");
    const interestInput = document.getElementById("interest");
    const timeInput = document.getElementById("time");

    
    updateInvestmentValue(investmentInput.value);
    updateInterestValue(interestInput.value);
    updateTimeValue(timeInput.value);

    investmentInput.addEventListener("input", function () {
        updateInvestmentValue(this.value);
    });

    interestInput.addEventListener("input", function () {
        updateInterestValue(this.value);
    });

    timeInput.addEventListener("input", function () {
        updateTimeValue(this.value);
    });
});

function updateInvestmentValue(value) {
    document.getElementById("investment-value").innerText =parseFloat(value).toLocaleString("en-IN");
}

function updateInterestValue(value) {
    document.getElementById("interest-value").innerText =parseFloat(value).toFixed(1) + "%";
}

function updateTimeValue(value) {
    document.getElementById("time-value").innerText = value + " Years";
}

function calculator() {
    const p = parseFloat(document.getElementById("investment").value);
    const r = parseFloat(document.getElementById("interest").value);
    const t = parseFloat(document.getElementById("time").value);

   
    const n = 4;

    const amount = p * Math.pow((1 + (r / 100) / n), n * t);
    const interestEarned = amount - p;

    document.getElementById("invested-amount").innerText =p.toLocaleString("en-IN");
    document.getElementById("estimated-returns").innerText =Math.round(interestEarned).toLocaleString("en-IN");
    document.getElementById("total-value").innerText =Math.round(amount).toLocaleString("en-IN");
}