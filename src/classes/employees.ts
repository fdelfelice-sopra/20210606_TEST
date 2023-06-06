"use strict";

class employees {
	employeesList: any[] = []; 

	message: string = "Hi {name}, happy birthbay"


	constructor (
		private roughArray: string[],
		) {}

	// public getRoughArray () {
	// 	return this.roughArray;
	// }

	public setEmployee (): void {

		this.roughArray.forEach((i,e)=>{
			const employeeData: string[] = i.split(',');
			this.employeesList.push(employeeData);

			console.log(this.getName(employeeData));

		})

		// console.log(this.employeesList);
	}

	public setMessage () {
		// set message to send
	}

	public getName (employee) {
		return `${employee[1]} ${employee[0]}`;
	}

	public getEmail (employee) {
		return employee[3];
	}

	public getBirthday (employee) {
		return employee[2];
	}
}

export default employees;