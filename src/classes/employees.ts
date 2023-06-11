"use strict";

class employees {
	employeesList: any[] = [];
	emailSubject: string = "Happy birthday!";
	messageTemplate: string = "Happy birthday, dear {name}!";

	constructor (private plainData: string) {
		this.setEmployeesArray();
	}

	private setEmployeesArray (): void {
		// transform plain data in array
		const employeesRoughArray: string[] = this.plainData.replace(/\t/g,'').split(/\n/);		
		employeesRoughArray.forEach((i,e)=>{
			const employeeData: string[] = i.split(',');
			this.employeesList.push(employeeData);
		});
	}

	private getName (employee: string[]): string {
		return employee[1].trim();
	}

	private getEmail (employee: string[]): string {
		return employee[3].trim();
	}

	private getBirthday (employee: string[]): string {
		return employee[2].trim();
	}

	private setMessage (name: string): string {
		return this.messageTemplate.replace('{name}', name );
	}

	private isBirthday(employee): boolean {
		const birthday = this.getBirthday(employee);
		const birthdayArr: string[] = birthday.split('/');
		const birth_day: number = parseInt(birthdayArr[2]);
		const birth_month: number = parseInt(birthdayArr[1]);
		
		const today = new Date();
		const today_day = today.getDate();
		const today_month = today.getMonth()+1;
		return (birth_day === today_day && birth_month === today_month);
	}

	public sendBirthdayGreetings (): void {
		this.employeesList.forEach((employeeData, e)=>{
			if (this.isBirthday(employeeData)) {
				const name: string = this.getName(employeeData);
				// TODO send email
				console.log(this.setMessage(name));
			}
		})
	}
}

export default employees;