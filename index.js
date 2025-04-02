
const originalPriceInput = document.getElementById("original-price-input");
const discountPercentageInput = document.getElementById("discount-percentage-input");
const priceWithDiscountInput = document.getElementById("price-with-discount-input");
const calculateButton = document.getElementById("calculate-button");


originalPriceInput.addEventListener("blur", validateInput);
discountPercentageInput.addEventListener("blur", validateInput);
// priceWithDiscountInput.addEventListener("blur", validateInput);

function validateInput(event) {
    if (event.target.value === "") {
        console.log("no hay nada")
    }
}

function calculateDiscount(price, discount) {
    const priceWithDiscount = (price * discount) / 100;
    return priceWithDiscount
}

calculateButton.addEventListener("click", (event) => {
    event.preventDefault();
    const price = originalPriceInput.value;
    const discount = discountPercentageInput.value;
    const finalPrice = calculateDiscount(price, discount);
    priceWithDiscountInput.value = finalPrice;
})

