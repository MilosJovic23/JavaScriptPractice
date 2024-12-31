//
//

var gradovi = [];

//
document.getElementById("dodajGrad").addEventListener("click", function () {
	var grad = prompt("Upisite grad i temperaturu");
	grad = grad.split(" ");
	var privremeniGrad = {
		ime: grad[0],
		temperatura: grad[1],
	};
	gradovi.push(privremeniGrad);
});
//
document.getElementById("topliGradovi").addEventListener("click", function () {
	ispisTempHot = document.getElementById("toplaTemperatura");
	ispisTempHot.innerHTML = " ";
	ispisTempHot.style.color += "white";
	ispisTempHot.style.display = "flex";
	ispisTempHot.style.flexWrap = "wrap";
	ispisTempHot.style.gap = "2px";

	for (var grad in gradovi) {
		if (gradovi[grad].temperatura >= 12) {
			var pgrafHot = document.createElement("p");
			var pgrafHotText = document.createTextNode(
				gradovi[grad].ime + " " + gradovi[grad].temperatura
			);
			pgrafHot.append(pgrafHotText);
			document.getElementById("toplaTemperatura").append(pgrafHot);
			pgrafHot.style.backgroundColor = "red";
			pgrafHot.style.borderRadius = "20px";
			pgrafHot.style.padding = "5px";
			pgrafHot.style.gap = "2px";
		}
	}
});

//

document.getElementById("hladniGradovi").addEventListener("click", function () {
	var ispisTempCold = document.getElementById("hladnaTemperatura");
	ispisTempCold.innerHTML = " ";
	ispisTempCold.style.color += "white";
	ispisTempCold.style.display = "flex";
	ispisTempCold.style.gap = "2px";

	for (var grad in gradovi) {
		if (gradovi[grad].temperatura < 12) {
			var pgrafCold = document.createElement("p");
			var pgrafColdText = document.createTextNode(
				gradovi[grad].ime + " " + gradovi[grad].temperatura
			);
			pgrafCold.append(pgrafColdText);
			document.getElementById("hladnaTemperatura").append(pgrafCold);
			pgrafCold.style.backgroundColor = "blue";
			pgrafCold.style.borderRadius = "20px";
			pgrafCold.style.padding = "5px";
		}
	}
});
