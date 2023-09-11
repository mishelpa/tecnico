'use client'
import * as React from 'react';
import Navbar from '@/app/components/Navbar/Navbar';
import Step1 from '@/app/components/Step1/Step1';
import StepperR from '@/app/components/Stepper/StepperR';

const steps = ['Planes y coberturas', 'Resumen'];

export default function Page() {
 
  return (
		<>
      <Navbar/>
      <StepperR step1="active" step2="inactive"></StepperR>
			<Step1></Step1>
		</>
  );
}