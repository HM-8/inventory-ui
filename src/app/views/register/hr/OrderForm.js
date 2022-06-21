import React, { useState } from 'react';
import { Form, Formik } from 'formik';
import { Box, Button, Step, StepLabel, Stepper } from '@mui/material';
import SwipeableViews from 'react-swipeable-views';

import PersonalDetails from './employeeCreation/PersonalDetails';
import EmergencyContact from './employeeCreation/EmergencyContact';
import FamilyBackground from './employeeCreation/FamilyBackground';
import Insurance from './employeeCreation/InsuranceDetail';
import EducationalQualification from './employeeCreation/EducationalQualification';
import Experience from './employeeCreation/WorkExperience';
import Setup from './employeeCreation/EmployeeSetup'
import SalaryDetails from './SalaryDetails';

const steps = [PersonalDetails,Insurance,EducationalQualification,Experience,Setup,SalaryDetails, EmergencyContact];

export default props => {
	const [activeStep, setActiveStep] = useState(0);

	const isLastStep = () => {
		return activeStep === steps.length - 1;
	};

	const handlePrev = () => {
		setActiveStep(Math.max(activeStep - 1, 0));
	};

	const handleNext = () => [
		setActiveStep(Math.min(activeStep + 1, steps.length - 1))
	];

	const onSubmit = (values, formikBag) => {
		const { setSubmitting } = formikBag;

		if (!isLastStep()) {
			setSubmitting(false);
			handleNext();
			return;
		}

		console.log(values);

		setTimeout(() => {
			setSubmitting(false);
		}, 1000);
	};

	const initialValues = steps.reduce(
		(values, { initialValues }) => ({
			...values,
			...initialValues
		}),
		{}
	);
	const ActiveStep = steps[activeStep];
	const validationSchema = ActiveStep.validationSchema;

	return (
		<Formik
			initialValues={initialValues}
			onSubmit={onSubmit}
			validationSchema={validationSchema}
		>
			{({ isSubmitting }) => (
				<>
				<Box py="12px" />
					<Form>
						<Stepper alternativeLabel activeStep={activeStep}>
							{steps.map((step, index) => (
								<Step key={index}>
									<StepLabel>{steps[index].label}</StepLabel>
								</Step>
							))}
						</Stepper>

						<SwipeableViews index={activeStep}>
							{steps.map((step, index) => {
								const Component = steps[index];
								return <Component key={index} />;
							})}
						</SwipeableViews>
							
						<Button
							disabled={activeStep === 0 || isSubmitting}
							onClick={handlePrev}
						>
							Previous
						</Button>
						<Button disabled={isSubmitting} type="submit">
							{isLastStep() ? 'Submit' : 'Next'}
						</Button>
						
					</Form>
					{/* <pre>{JSON.stringify(values, null, 2)}</pre>
					<pre>{JSON.stringify(touched, null, 2)}</pre> */}
				</>
			)}
		</Formik>
	);
};
