import { NewPatient } from "./types";

const toNewPatient = (object: unknown): NewPatient => {
	const newEntry: NewPatient = {
		name: parseName(object.name),
		dataOfBirth: parseDataOfBirth(object.dateOfBirth),
		ssn: parseSsn(object.ssn),
		gender: parseGender(object.gender),
		occupation: parseOccupation(object.occupation)
	};
	return newEntry;
};

export default toNewPatient;

const parseName = (name: unknown): string => {
	if (!name || !isString(name)) {
		throw new Error('Incorrect or missing comment');
	}
	return name;
};

const isString = (text: unknown): text is string => {
	return typeof text === 'string' || text instanceof String;
};


