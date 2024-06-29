function calculateNetSalary() {
    const basicSalary = parseFloat(document.getElementById('basicSalary').value);
    const benefits = parseFloat(document.getElementById('benefits').value);
    const grossSalary = basicSalary + benefits;

    const nssfDeduction = calculateNSSF(grossSalary);
    const nhifDeduction = calculateNHIF(grossSalary);
    const payeeTax = calculatePAYE(grossSalary - nssfDeduction);

    const netSalary = grossSalary - nssfDeduction - nhifDeduction - payeeTax;

    document.getElementById('result').textContent = `
        Gross Salary: ${grossSalary.toFixed(2)} 
        NSSF Deduction: ${nssfDeduction.toFixed(2)} 
        NHIF Deduction: ${nhifDeduction.toFixed(2)} 
        PAYE Tax: ${payeeTax.toFixed(2)} 
        Net Salary: ${netSalary.toFixed(2)}
    `;
}

function calculateNSSF(grossSalary) {
    // Assume a fixed NSSF deduction rate (e.g., 6% of gross salary)
    const nssfRate = 0.06;
    return Math.min(grossSalary * nssfRate, 1080); // Maximum NSSF deduction in Kenya is Ksh 1080
}

function calculateNHIF(grossSalary) {
    // NHIF deductions are based on gross salary brackets
    if (grossSalary <= 5999) return 150;
    if (grossSalary <= 7999) return 300;
    if (grossSalary <= 11999) return 400;
    if (grossSalary <= 14999) return 500;
    if (grossSalary <= 19999) return 600;
    if (grossSalary <= 24999) return 750;
    if (grossSalary <= 29999) return 850;
    if (grossSalary <= 34999) return 900;
    if (grossSalary <= 39999) return 950;
    if (grossSalary >= 40000) return 1000;
}

function calculatePAYE(taxableIncome) {
    // PAYE calculation based on Kenyan tax brackets
    let tax = 0;
    if (taxableIncome <= 24000) {
        tax = taxableIncome * 0.1;
    } else if (taxableIncome <= 32333) {
        tax = 2400 + (taxableIncome - 24000) * 0.25;
    } else {
        tax = 2400 + 2083.25 + (taxableIncome - 32333) * 0.3;
    }
    return tax;
}
