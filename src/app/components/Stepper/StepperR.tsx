import React from "react";

function StepperR({step1, step2} : {step1: string, step2: string}) {

  const bgStep: any = {
    'active': 'flex items-center justify-center w-5 h-5 mr-2 text-white text-xs border border-[#4F4FFF] rounded-full shrink-0 bg-[#4F4FFF]',
    'inactive': 'flex items-center justify-center w-5 h-5 mr-2 text-xs border border-gray-500 rounded-full shrink-0 dark:border-gray-400'
  }

  const textStep: any = {
    'active': 'sm:inline-flex sm:ml-2 text-black',
    'inactive': 'sm:inline-flex sm:ml-2'
  }

  return (
    <ol className="flex justify-center w-full p-3 space-x-2 text-sm font-medium text-center text-gray-500 bg-[#EDEFFC] border border-[#EDEFFC] rounded-lg shadow-sm sm:text-base sm:p-4 sm:space-x-4">
      <li className="flex items-center">
        <span className={bgStep[step1]}>
          1
        </span>
        <span className={textStep[step1]}>
          Planes y coberturas
        </span>
        <span className="ml-3"> ---- </span>
      </li>
      <li className="flex items-center">
        <span className={bgStep[step2]}>
          2
        </span>
        <span className={textStep[step2]}>Resumen</span>
      </li>
    </ol>
  );
}

export default StepperR;
