import patients from '../../data/patients';

import { NonSensitivePatients } from '../types';

// excluding ssn key 
const getPatients = (): NonSensitivePatients[] => {
	return patients.map(({ id, name, dateOfBirth, gender, occupation }) => ({
		id,
		name,
		dateOfBirth,
		gender,
		occupation
	}));
};


export default {
	getPatients,
};