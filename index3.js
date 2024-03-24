function calculateNetSalary(basicSalary, benefits) {
    const taxRates = [
        { threshold: 24000, rate: 0.1 },
        { threshold: 32333, rate: 0.25 },
        { threshold: 500000, rate: 0.3 },
        { threshold: 800000, rate: 0.325 },
        { threshold: Infinity, rate: 0.35 }
    ];

    const nhifRates = [
        { threshold: 5999, deduction: 150 },
        { threshold: 7999, deduction: 300 },
        { threshold: 11999, deduction: 400 },
        { threshold: 14999, deduction: 500 },
        { threshold: 19999, deduction: 600 },
        { threshold: 24999, deduction: 700 },
        { threshold: 29999, deduction: 750 },
        { threshold: 34999, deduction: 850 },
        { threshold: 39999, deduction: 900 },
        { threshold: 44999, deduction: 950 },
        { threshold: 49999, deduction: 1000 },
        { threshold: 59999, deduction: 1100 },
        { threshold: 69999, deduction: 1200 },
        { threshold: 79999, deduction: 1300 },
        { threshold: 89999, deduction: 1400 },
        { threshold: 99999, deduction: 1500 },
        { threshold: Infinity, deduction: 1600 }
    ];

    const nssfRates = 0.06;

    // Gross Salary calculation
    let grossSalary = basicSalary + benefits;

    // Tax calculation
    let tax = 0;
    for (const { threshold,rate} of taxRates) {
        if (grossSalary > threshold) {
            tax += (grossSalary,threshold) * rate;
            break;
        }
    }

    // NHIF calculation
    let nhif = 0;
    for (const { threshold, deduction } of nhifRates){
        if (grossSalary > threshold) {
            nhif = deduction;
            break;
        }
    }
        

    // NSSF calculation
    let nssf = grossSalary * nssfRates;

    // Net Salary calculation
    let netSalary = grossSalary - tax - nhif - nssf;

    return {
        grossSalary,
        tax,
        nhif,
        nssf,
        netSalary
    };
}


console.log(calculateNetSalary(25000, 5000));
