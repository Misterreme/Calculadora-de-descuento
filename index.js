
const originalPriceInput = document.getElementById("original-price-input");
const discountPercentageInput = document.getElementById("discount-percentage-input");
const priceWithDiscountInput = document.getElementById("price-with-discount-input");
const calculateButton = document.getElementById("calculate-button");
const originalCurrency = document.querySelector(".original-currency");
const totalCurrency = document.querySelector(".total-currency");


originalPriceInput.addEventListener("blur", validateInput);
discountPercentageInput.addEventListener("blur", validateInput);
// priceWithDiscountInput.addEventListener("blur", validateInput);

function validateInput(event) {
    if (event.target.value === "") {
        console.log("no hay nada")
    }
}

// function calculateDiscount(price, discount) {
//     const priceWithDiscount = (price * discount) / 100;
//     return priceWithDiscount
// }

function calculateDiscount(price, discount) {
    const finalPrice = price * ((100 - discount) / 100);
    return finalPrice;
}

calculateButton.addEventListener("click", (event) => {
    event.preventDefault();
    const price = originalPriceInput.value;
    const discount = discountPercentageInput.value;
    const finalPrice = calculateDiscount(price, discount);
    priceWithDiscountInput.value = finalPrice;
    
    totalCurrency.innerText = originalCurrency.innerText;
})

