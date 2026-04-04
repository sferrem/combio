document
	.getElementById("convertButton")
	.addEventListener("click", handleConvert);

document
	.getElementById("getLocationButton")
	.addEventListener("click", requestLocation);

const SELECT = document.getElementById("currency");
console.log(SELECT);
const selectValue = SELECT.value;
console.log(selectValue);

async function handleConvert(){
	console.log(selectValue)
	let quote = await getQuote(`USD-${SELECT.value}`);
	let priceInput = document.getElementById("price-input").value;
	let newValue = calculateCurrency(priceInput, quote);

	renderRealValue(newValue);
}
async function getQuote(currency){
	let response = await fetch(`https://economia.awesomeapi.com.br/json/last/${currency}`);
	let data = await response.json();
	const key = Object.keys(data)[0];
	return data[key].ask;
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

function requestLocation(){
	if (navigator.geolocation){
		console.log("There's goelocation")
		navigator.geolocation.getCurrentPosition((position) => {
			console.log(position.coords.latitude);
			console.log("YES");
			console.log(position.coords.longitude);
},
	(error) => {
		console.error("Erro completo:", error);
	});
	}
	else {
		alert("Your current browser does not suport the Geolocation feature.")
	}
}
