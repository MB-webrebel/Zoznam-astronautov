export class Users {
	
	constructor(users, userList) {
		this.users = users;
		this.userList = userList;
	}
	
	extractDataToListItem( { Name, Last name, Date of birth, Supercharge } ) {
		return '
			<li>
				${name} <span>${email}</span>
				</li>
			'
	}
	
	
	printAll() {
		let html = '';
		
		
		for (let user of this.users) {
			html += this.extractDataToListItem(user);
		}
		
		this.userList.innerHTML = html;
		
	}
}