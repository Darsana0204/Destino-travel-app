
const budgetInput = document.getElementById("budget");
const tripCostInput = document.getElementById("tripCost");
const checkButton = document.getElementById("checkBudget");
const budgetMessage = document.getElementById("budgetMessage");

checkButton.addEventListener("click", function () {
  const budget = Number(budgetInput.value);
  const tripCost = Number(tripCostInput.value);

  if (budget <= 0 || tripCost <= 0) {
    budgetMessage.textContent =
      "Please enter a valid budget and trip cost.";
  } else if (budget >= tripCost) {
    const remainingMoney = budget - tripCost;

    budgetMessage.textContent =
      `Amazing! Your trip is affordable. You'll have ₹${remainingMoney} left!`;
  } else {
    const extraMoney = tripCost - budget;

    budgetMessage.textContent =
      `Not quite yet! You need ₹${extraMoney} more to afford this trip.`;
  }
});
