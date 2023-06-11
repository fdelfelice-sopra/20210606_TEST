"use strict";
import { test } from "node:test";
import employees from "./classes/employees";

function main() {
	// TODO load employee from file
	const employeeFileData: string = `Doe, John, 1982/10/08, john.doe@foobar.com
	Ann, Mary, 1975/06/12, mary.ann@foobar.com
	Doe, John2, 1982/10/08, john.doe@foobar.com
	Ann, Mary2, 1975/11/11, mary.ann@foobar.com
	Doe, John3, 1982/12/08, john.doe@foobar.com
	Ann, Mary3, 1975/02/11, mary.ann@foobar.com`;

	const employeesGroup = new employees(employeeFileData);
	employeesGroup.sendBirthdayGreetings();
}

main();