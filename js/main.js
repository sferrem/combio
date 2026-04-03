document
	.getElementById("convertButton")
	.addEventListener("click", handleConvert);

async function handleConvert(){
	let quote = await getQuote("USD-BRL");
	let priceInput = document.getElementById("price-input").value;
	let newValue = calculateCurrency(priceInput, quote);

	renderRealValue(newValue);
}
async function getQuote(currency){
	let response = await fetch(`https://economia.awesomeapi.com.br/json/last/${currency}`);
	let data = await response.json();
	
	return data.USDBRL.ask;
}
function renderRealValue(realValue){
	document.getElementById("result").innerHTML = `
	<h3>${realValue}</h3>
	`
}
function calculateCurrency(value, currencyExchangeRate){
	let newValue = value * currencyExchangeRate;
	return newValue;
}
