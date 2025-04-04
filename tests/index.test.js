
const originalPriceInput = document.getElementById("original-price-input");
const discountPercentageInput = document.getElementById("discount-percentage-input");
const priceWithDiscountInput = document.getElementById("price-with-discount-input");
const calculateButton = document.getElementById("calculate-button");
const originalCurrencySelect = document.getElementById("select-currency");
const totalCurrencySelect = document.getElementById("output-select-currency");
const root = document.querySelector("html");
const themeButton = document.querySelector(".theme-button");

themeButton.addEventListener("click", () => {

    if (root.classList.contains("dark")) {
        root.classList.remove("dark");
        root.classList.add("light")
    } else {
        root.classList.remove("light");
        root.classList.add("dark")
    }
})


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

    totalCurrencySelect.value = originalCurrencySelect.value
})