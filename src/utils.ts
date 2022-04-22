import { NewPatient, Gender } from "./types";

type Fields = { name: unknown, dateOfBirth: unknown, ssn: unknown, gender: unknown, occupation: unknown };

const toNewPatient = ({ name, dateOfBirth, ssn, gender, occupation }: Fields): NewPatient => {
	const newEntry: NewPatient = {
		name: parseName(name),
		dateOfBirth: parseDateOfBirth(dateOfBirth),
		ssn: parseSsn(ssn),
		gender: parseGender(gender),
		occupation: parseOccupation(occupation)
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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const isGender = (param: any): param is Gender => {
	// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
	return Object.values(Gender).includes(param);
};

const parseGender = (gender: unknown): Gender => {
	if (!gender || !isGender(gender)) {
		throw new Error('Incorrect or missing gender: ' + gender);
	}
	return gender;
};

const parseOccupation = (occupation: unknown): string => {
	if (!occupation || !isString(occupation)) {
		throw new Error('Incorrect or missing occupation: ' + occupation);
	}
	return occupation;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
