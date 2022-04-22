import data from '../../data/patients';
import { v1 as uuid } from 'uuid';


import { NonSensitivePatients, Patient, NewPatient } from '../types';

// excluding ssn key 
const getPatients = (): NonSensitivePatients[] => {
	return data.map(({ id, name, dateOfBirth, gender, occupation }) => ({
		id,
		name,
		dateOfBirth,
		gender,
		occupation
	}));
};

const addPatient = (newPatientEntry: NewPatient): Patient => {

	const newPatient = {
		id: uuid(),
		...newPatientEntry
	};

	data.push(newPatient);
	return newPatient;

};



export default {
	getPatients,
	addPatient,
};