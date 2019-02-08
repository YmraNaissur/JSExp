function createNewObject() {
	var o = {};
	return o;
}

function createNewPerson(n, a) {
	var person = {name:n, age:a}; // it is now empty
	// delete person.age;
	
	if ("age" in person) {
		alert("Свойство age существует.");
	} else {
		alert("Свойство age НЕ существует.");
	}
	
	alert(person.lalala); // undefined, т.к. нет свойства с ключом lalala
	
	return person;
}

function showPersonDetails(person) {
	document.getElementById("personDetails").innerHTML =
		"Name is " + person.name + "; age is " + person.age;
}