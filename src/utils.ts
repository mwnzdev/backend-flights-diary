import { NewPatient, Gender } from "./types";

type Fields = { name: unknown, dateOfBirth: unknown, ssn: unknown, gender: unknown, occupation: unknown };

export const toNewPatient = ({ name, dateOfBirth, ssn, gender, occupation }: Fields): NewPatient => {
	const newEntry: NewPatient = {
		name: parseField(name, 'name'),
		dateOfBirth: parseDateOfBirth(dateOfBirth),
		ssn: parseField(ssn, 'ssn'),
		gender: parseGender(gender),
		occupation: parseField(occupation, 'occupation')
	};
	return newEntry;
};

const parseField = (value: unknown, field: string): string => {
	if (!value || !isString(value)) {
		throw new Error('Incorrect or missing ' + field);
	}
	return value;
};


const isString = (text: unknown): text is string => {
	return typeof text === 'string' || text instanceof String;
};

const isDate = (date: string): boolean => {
	return Boolean(Date.parse(date));
};

const parseDateOfBirth = (dateOfBirth: unknown): string => {
	if (!dateOfBirth || !isString(dateOfBirth) || !isDate(dateOfBirth)) {
		throw new Error('Incorrect or missing date: ' + dateOfBirth);
	}
	return dateOfBirth;
};


// 'includes' check would not compile with 'string' param
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


// eslint-disable-next-line @typescript-eslint/no-explicit-any
