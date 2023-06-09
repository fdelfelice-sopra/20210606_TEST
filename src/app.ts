"use strict";
import { test } from "node:test";
import employees from "./classes/employees";

function main() {
	//

	const employeesRoughArray: string[] = [
		"Doe, John, 1982/10/08, john.doe@foobar.com",
		"Ann, Mary, 1975/09/11, mary.ann@foobar.com",
		"Ann2, Mary, 1975/09/11, mary.ann@foobar.com",
		"Ann3, Mary, 1975/09/11, mary.ann@foobar.com",
	];

	const employeesGroup = new employees(employeesRoughArray);
	employeesGroup.checkBirthday();

}

main();