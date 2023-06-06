"use strict";

class employees {
	employeesList: any[] = []; 
	messageTemplate: string = "Hi {name}, happy birthday";

	constructor (
		private roughArray: string[],
		) {}

	// public getRoughArray () {
	// 	return this.roughArray;
	// }

	public checkBirthday (): void {

		this.roughArray.forEach((i,e)=>{
			const employeeData: string[] = i.split(',');
			this.employeesList.push(employeeData);

			// testing
			if (this.isBirthday(employeeData)) {
				const name: string = this.getName(employeeData);
				console.log(this.setMessage(name));
			}

		})
		// console.log(this.employeesList);
	}

	private isBirthday(employee):boolean {
		// TODO check if today is employee Birthday
		return true;
	}

	private setMessage (name:string) {
		return this.messageTemplate.replace('{name}', name );
	}

	private getName (employee) {
		return `${employee[1]} ${employee[0]}`;
	}

	private getEmail (employee) {
		return employee[3];
	}

	private getBirthday (employee) {
		return employee[2];
	}
}

export default employees;