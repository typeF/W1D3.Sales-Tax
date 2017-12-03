var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

var companies = {};

function sum(sales){
  var total = 0;
  sales.forEach(function(daily){
    total += daily;
  });
  return total;
}

function taxes(company){
  var taxRate = 0;
  for (provincialRates in salesTaxRates){
    if (company.province == provincialRates){
      taxRate = salesTaxRates[provincialRates];
    }
  }
  return taxRate;
}


function calculateSalesTax(salesData, taxRates) {
  for (var i = 0; i < salesData.length; i++){
    var company = salesData[i];
    var companyName = salesData[i].name;
    var sales = salesData[i].sales

    if (companies[companyName] === undefined) {
      companies[companyName] = {};
    }

    // Totals calculation
    var totalSales = sum(sales);

    // Tax calculation
    var taxRate = taxes(company);

    if (companies[companyName]["totalSales"] === undefined) {
      companies[companyName]["totalSales"] = 0;
    }

    if (companies[companyName]["totalTaxes"] === undefined) {
      companies[companyName]["totalTaxes"] = 0;
    }

    companies[companyName]["totalSales"] += totalSales;
    companies[companyName]["totalTaxes"] += (totalSales * taxRate);

  }
  console.log(companies);
}

var results = calculateSalesTax(companySalesData, salesTaxRates);

