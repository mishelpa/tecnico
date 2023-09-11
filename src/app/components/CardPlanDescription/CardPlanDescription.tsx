import React, { useContext } from "react";
import { Plan } from "@/app/models/plan.interface";
import { Context } from "@/app/store/appContext";
import { useRouter } from 'next/navigation'

function CardPlanDescription({ plan }: { plan: Plan }) {
  const { store, actions } = useContext(Context);
  const router = useRouter()

  const changePlan = (plan: Plan) => {
    actions.getPlanSelected(plan)
    actions.getPricePlan(plan.price)
    router.push('/pages/resumen')
   }

  return (
    <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow-xl sm:p-8">
      <h5 className="mb-4 text-2xl font-black text-black">
        {plan.name}
      </h5>

      <div className="flex flex-col items-baseline text-gray-900 dark:text-white">
        <span className="ml-1 text-sm font-semibold text-gray-400">
          COSTO DEL PLAN
        </span>
        <span className="text-3xl font-semibold">${plan.price} al mes</span>
      </div>
      <div className="border border-[#D7DBF5] mt-5"></div>
      <ul className="space-y-5 my-7 list-disc">
        { plan.description ? plan.description.map((desc: string) => (
        <li key={desc} className="flex space-x-3 items-center">
        <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
          {desc}
        </span>
      </li>
        )) : ''}
      </ul>
      <button
        type="button"
        onClick={()=> changePlan(plan)}
        className="text-white bg-[#FF1C44] hover:bg-[#FF1C44]-700 font-medium rounded-2xl text-sm px-5 py-2.5 inline-flex justify-center w-full text-center"
      >
        Seleccionar plan
      </button>
    </div>
  );
}

export default CardPlanDescription;
