
import diagnoses from '../../data/diagnoses';

import { Diagnose } from '../types';


const getDiagnoses = (): Array<Diagnose> => {
	return diagnoses;
};

const addDiagnosis = () => {
	return null;
};

export default {
	getDiagnoses,
	addDiagnosis
};
