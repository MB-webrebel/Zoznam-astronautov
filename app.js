import { Users } from "./Users.js";


(async () => {
	
	const ul = document.querySelector('.users');
	
	let response = await fetch('https://jsonplaceholder.typicode.com/users');
	let users = await response.json();
	
	users.printAll();
	
})()

