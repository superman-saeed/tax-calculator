const TAX_TABLE = [
[288,0],
[100,5],
[140,10],
[3000,17.5],
[16472,25],
[Number.POSITIVE_INFINITY, 30]
]
const SSNIT = 5.5/100;

function taxCalculator(salary,allowance){
  if(!(isPositiveNumber(salary))) throw new Error("Expects a positive number as gross income");
  if(!(isPositiveNumber(allowance))) throw new Error("Expects a positive number as allowance");
  const  ssnit = salary * SSNIT;
  console.log(ssnit);
  const taxableIncome = (salary + allowance) - ssnit;
  return {
  ssnitDeduction: ssnit,
  ...computeTax(TAX_TABLE,taxableIncome),
  }

}
function computeTax(table,income, allowance, annual=false){
  let taxableIncome = income, totalTax =0;
    if(taxableIncome > 0){
    for(var row=0; row< table.length; row++){
        var [taxableAmount, taxRate]= table[row],
        taxable = (taxableIncome > taxableAmount)
        ? taxableAmount : taxableIncome;

        var trancheTax = (taxable * taxRate)/100;
        totalTax += trancheTax;
        taxableIncome -=taxable;
    }
}
    return {netIncome: (income-totalTax), taxDeduction:totalTax}
}

function isPositiveNumber(number) {
  const positiveNumberRegex = /^[+]?([0-9]+(?:[.][0-9]*)?|\.[0-9]+)$/;
  return positiveNumberRegex.test(number);
}

export default taxCalculator;
