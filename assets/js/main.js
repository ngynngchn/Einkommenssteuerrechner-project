//! ============== Variablen ==============

//* Steuerjahre
const year2020 = document.getElementById("year2020");
const year2021 = document.getElementById("year2021");
const year2022 = document.getElementById("year2022");

//* Single oder Couple?
const single = document.getElementById("single");
const couple = document.getElementById("couple");

//* Eingabefeld Einkommen Single
const incomeInput = document.getElementById("incomeInput");

//* Eingabefeld Einkommen Couple
const incomeOne = document.getElementById("incomeInputOne");
const incomeTwo = document.getElementById("incomeInputTwo");

//*  Section des Eingabefeld Couples
const coupleSection = document.querySelector(".coupleSection");

//*  Section des Eingabefeld Singles
const singleSection = document.querySelector(".singleSection");

//* Ausgabefeld Einkommen
const incomeOutput = document.getElementById("incomeOutput");

//* Ausgabefeld Einkommensteuer
const incomeTax = document.getElementById("incomeTax");

//* Ausgewähltes Jahr
const selectedYear = document.querySelector(".selectedYear");
//! ============== Funktionen ==============

//* Einkommensteuerberechnungen pro Jahr

function calculateTax2022(income) {
	let output;

	if (income <= 10347) {
		output = 0;
	} else if (income > 10347 && income <= 14926) {
		let y = (income - 10347) / 10000;
		output = (1088.67 * y + 1400) * y;
	} else if (income > 14926 && income <= 58596) {
		let z = (income - 14926) / 10000;
		output = (206.43 * z + 2397) * z + 869.32;
	} else if (income > 58596 && income <= 277825) {
		output = 0.42 * income - 9336.45;
	} else if (income >= 277825) {
		output = 0.45 * income - 17671.2;
	}
	incomeTax.innerHTML = `${Math.floor(output)},00 €`;
	selectedYear.innerHTML = 2022;
}

function calculateTax2021(income) {
	let output;

	if (income <= 9744) {
		output = 0;
	} else if (income > 9744 && income <= 14753) {
		let y = (income - 9744) / 10000;
		output = (995.21 * y + 1400) * y;
	} else if (income > 9744 && income <= 57918) {
		let z = (income - 14753) / 10000;
		output = (208.85 * z + 2397) * z + 869.32;
	} else if (income > 57918 && income <= 274612) {
		output = 0.42 * income - 9136.63;
	} else if (income >= 274612) {
		output = 0.45 * income - 17374.99;
	}
	incomeTax.innerHTML = `${Math.floor(output)},00 €`;
	selectedYear.innerHTML = 2021;
}

function calculateTax2020(income) {
	let output;

	if (income <= 9408) {
		output = 0;
	} else if (income > 9408 && income <= 14532) {
		let y = (income - 9408) / 10000;
		output = (972.87 * y + 1400) * y;
	} else if (income > 14532 && income <= 57051) {
		let z = (income - 14532) / 10000;
		output = (212.02 * z + 2397) * z + 869.32;
	} else if (income > 57051 && income <= 270500) {
		output = 0.42 * income - 8963.74;
	} else if (income >= 270500) {
		output = 0.45 * income - 17078.74;
	}
	incomeTax.innerHTML = `${Math.floor(output)},00 €`;
	selectedYear.innerHTML = 2020;
}

//* Prüfe ob Single oder Paar

function calculateIncomeTax() {
	let income;
	if (
		incomeInput.value !== "" ||
		incomeOne.value !== "" ||
		incomeTwo.value !== ""
	) {
		if (couple.checked) {
			let totalIncome = parseInt(incomeOne.value) + parseInt(incomeTwo.value);
			incomeOutput.innerHTML = `${totalIncome},00 €`;
			income = totalIncome / 2;
			checkYear(income);
		} else if (single.checked) {
			income = incomeInput.value;
			incomeOutput.innerHTML = `${income},00 €`;
			checkYear(income);
		}
	}
}

//* Prüfe das Jahr
function checkYear(income) {
	if (year2020.checked) {
		calculateTax2020(income);
	} else if (year2021.checked) {
		calculateTax2021(income);
	} else if (year2022.checked) {
		calculateTax2022(income);
	}
}

//* onchange Funktion zum Einblenden und Ausblenden der Sections für Single/Paar
function showCoupleSection() {
	if (couple.checked) {
		coupleSection.classList.add("active");
		singleSection.classList.add("hide");
	} else if (single.checked) {
		coupleSection.classList.remove("active");
		singleSection.classList.remove("hide");
	}
}
