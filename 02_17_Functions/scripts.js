var name = 'Вася'; // global variable

function showMessage() {
	name = 'Петя'; // assigning value to the external variable
	
	var message = 'Привет! Я - ' + name + '!';
	alert(message);
}

function showMessage(from, text) {
	from = "** " + from + " **"; // there may be complicated formatting code
	alert(from + ' : ' + text);
}

function count() {
	var name = 'Иван';
	var i,j; // moved variables' declarations to beginning
	for (i = 1; i < 4; i++) {
		j = i * 2;
	}
	
	document.write(name); // external variable
	document.write(i); // i = 4, on this value loop ended.
	document.write(j); // j = 6, the last value which has been calculated in loop
}

function checkAge(age) {
	if (age > 18) {
		return alert('Проходи');
	}
	
	return confirm('Родители разрешили?');
}