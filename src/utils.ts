import { NewPatient } from "./types";

const toNewPatient = (object: unknown): NewPatient => {
	const newEntry: NewPatient = {
		name: parseName(object.name),
		dateOfBirth: parseDateOfBirth(object.dateOfBirth),
		ssn: parseSsn(object.ssn),
		gender: parseGender(object.gender),
		occupation: parseOccupation(object.occupation)
	};
	return newEntry;
};

export default toNewPatient;

const parseName = (name: unknown): string => {
	if (!name || !isString(name)) {
		throw new Error('Incorrect or missing name: ' + name);
	}
	return name;
};

const isString = (text: unknown): text is string => {
	return typeof text === 'string' || text instanceof String;
};

const parseDateOfBirth = (dateOfBirth: unknown): string => {
	if (!dateOfBirth || !isString(dateOfBirth) || isDate(dateOfBirth)) {
		throw new Error('Incorrect or missing date: ' + dateOfBirth);
	}
	return dateOfBirth;
};

const isDate = (date: string) => {
	return Boolean(Date.parse(date));
};

const parseSsn = (ssn: unknown): string => {
	if (!ssn || !isString(ssn)) {
		throw new Error('Incorrect or missing ssn: ' + ssn);
	}
	return ssn;
};

