import Navbar from "@/app/components/Navbar/Navbar";
import Step2 from "@/app/components/Step2/Step2";
import StepperR from "@/app/components/Stepper/StepperR";
import React from "react";

function page() {
  return (
    <>
      <Navbar />
      <StepperR step1="inactive" step2="active"></StepperR>
      <div className="flex w-full justify-center">
      <Step2></Step2>
      </div>
    </>
  );
}

export default page;
