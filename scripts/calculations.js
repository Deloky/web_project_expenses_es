let budgetValue = 0;
let totalExpensesValue = 0;
let expenseEntries = [
  ["groceries", 33],
  ["restaurants", 50],
  ["transport", 12],
  ["home", 70],
  ["subscriptions", 14],
  ["groceries", 28],
  ["subscriptions", 12],
];
let balance;
let balanceColor = "green";
const categories = [
  "groceries",
  "restaurants",
  "transport",
  "home",
  "subscriptions",
];

for (const expenseEntrie of expenseEntries) {
  totalExpensesValue = totalExpensesValue + expenseEntrie[1];
}
function calculateAverageExpense() {
  if (expenseEntries.length == 0) {
    return 0;
  } else {
    return totalExpensesValue / expenseEntries.length;
  }
}

function calculateBalance() {
  balance = budgetValue - totalExpensesValue;
  return budgetValue - totalExpensesValue;
}

function updateBalanceColor() {
  if (balance < 0) {
    balanceColor = "red";
  } else if (balance < budgetValue * 0.25) {
    balanceColor = "orange";
  } else {
    balanceColor = "green";
  }
}

function calculateCategoryExpenses(category) {
  let cont = 0;
  for (const expenseEntry of expenseEntries) {
    if (expenseEntry[0] === category) {
      cont = cont + expenseEntry[1];
    }
  }
  return cont;
}

function calculateLargestCategory() {
  let categoriesData = [];
  for (const category of categories) {
    categoriesData.push([category, calculateCategoryExpenses(category)]);
  }
  let maximum = categoriesData[0];
  for (const categorie of categoriesData) {
    if (categorie[1] > maximum[1]) {
      maximum = categorie;
    }
  }
  return maximum[0];
}

function addExpenseEntry(values) {
  expenseEntries.push([values[0], values[1]]);
  totalExpensesValue = totalExpensesValue + values[1];
}
