#!/usr/bin/env node
// @flow
"use strict";

const mappedOptions = [];
const clonedProcessArgs = process.argv.slice(2);

while (clonedProcessArgs.length) {
	let key = clonedProcessArgs.shift();
	let value = clonedProcessArgs.shift();
	mappedOptions.push({ key, value });
}

module.exports = (...keys) => {
	const key = keys.find(filteredKey => !!filteredKey);
	return (mappedOptions.find(cliArg => cliArg.key === key) || {}).value;
}

