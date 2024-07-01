function calculateNetSalary() {
    // Get the basic salary and benefits from the input fields
    const basicSalary = parseFloat(document.getElementById('basicSalary').value);
    const benefits = parseFloat(document.getElementById('benefits').value);

    // Calculate the gross salary by adding basic salary and benefits
    const grossSalary = basicSalary + benefits;

    // Calculate NSSF deduction
    const nssfDeduction = calculateNSSF(grossSalary);

    // Calculate NHIF deduction
    const nhifDeduction = calculateNHIF(grossSalary);

    // Calculate PAYE tax on the taxable income (gross salary - NSSF deduction)
    const payeeTax = calculatePAYE(grossSalary - nssfDeduction);

    // Calculate the net salary by subtracting deductions from the gross salary
    const netSalary = grossSalary - nssfDeduction - nhifDeduction - payeeTax;

    // Display the results in the result element
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

    // Calculate NSSF deduction and ensure it doesn't exceed the maximum of Ksh 1080
    return Math.min(grossSalary * nssfRate, 1080); 
}

function calculateNHIF(grossSalary) {
    // NHIF deductions based on gross salary brackets
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
        // 10% tax rate for income up to 24,000 Ksh
        tax = taxableIncome * 0.1;
    } else if (taxableIncome <= 32333) {
        // 10% on the first 24,000 Ksh plus 25% on the amount over 24,000 Ksh up to 32,333 Ksh
        tax = 2400 + (taxableIncome - 24000) * 0.25;
    } else {
        // 10% on the first 24,000 Ksh plus 25% on the next 8,333 Ksh (from 24,001 to 32,333) plus 30% on the remaining amount
        tax = 2400 + 2083.25 + (taxableIncome - 32333) * 0.3;
    }
    return tax;
}
