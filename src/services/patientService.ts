import data from '../../data/patients';
import { v1 as uuid } from 'uuid';


import { NonSensitivePatients, Patient, NewPatient } from '../types';
import patientsData from '../../data/patients';

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

const getById = (id: string): Patient | undefined => {
	const foundPatient = patientsData.find(p => p.id === id);
	return foundPatient;
};



export default {
	getPatients,
	addPatient,
	getById,
};