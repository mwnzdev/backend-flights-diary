import express from 'express';
import { toNewPatient } from '../utils';
import patientService from '../services/patientService';

const router = express.Router();

router.get('/', (_req, res) => {
	res.send(patientService.getPatients());
});

router.get('/:id', (req, res) => {
	const patient = patientService.getById(req.params.id);
	if (patient) {
		res.send(patient);
	} else {
		res.sendStatus(404);
	}
});

router.post('/', (req, res) => {

	try {
		// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
		const newPatient = toNewPatient(req.body);
		const addedPatient = patientService.addPatient(newPatient);
		res.json(addedPatient);
	} catch (error: unknown) {
		let errorMessage = 'Something went wrong.';
		if (error instanceof Error) {
			errorMessage += ' Error: ' + error.message;
		}
		res.status(400).send(errorMessage);
	}
});

export default router;