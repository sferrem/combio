async function convertCurrency(currencyBase, valueBase){
	let response = await fetch(`https://economia.awesomeapi.com.br/json/last/${currencyBase}`);
	let data = await response.json();
	console.log(data);
	let result = calculateCurrency(valueBase, data.USDBRL.ask);
	document.getElementById("text").innerHTML = `
	<h3>${result}</h3>
	`
}

function calculateCurrency(valueBase, currencyExchangeRate){
	const value = valueBase * currencyExchangeRate;
	return value;
}
async function getRecipe(){
   let response = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
   let data = await response.json();
   console.log(data);
   let recipe = data.meals[0];
   console.log(recipe);

   document.getElementById("recipe").innerHTML = `
   <h3>${recipe.strMeal}</h3>
   <img width="150px" src="${recipe.strMealThumb}"></img>
   <p>${recipe.strInstructions}</p>
   `;
}
