import React, { useContext, useEffect } from "react";
import { Context } from "@/app/store/appContext";
import CardPlanDescription from "../CardPlanDescription/CardPlanDescription";
import CardInitial from "../CardPlan/CardInitial";
import './Step1.scss'
import { Plan } from "@/app/models/plan.interface";

function Step1() {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.getUser();
  }, []);

  useEffect(() => {
    actions.getPlans();
  }, []);

  return (
    <>
      <div className="container-step1 flex w-full p-6 sm:m-10 justify-center">
        <div className="container-step1__body flex flex-col space-y-3 w-full sm:w-2/5">
          <p className="text-4xl font-bold sm:text-center mb-3">
            {store.user.name} ¿Para quién deseas cotizar?
          </p>
          <span>Selecciona la opción que se ajuste más a tus necesidades.</span>
          <ul className="flex gap-6 flex-col sm:flex-row">
            <li>
              <CardInitial
                img="onlyme"
                title="Para mí"
                description="Cotiza tu seguro de salud y agrega familiares si así lo deseas."
                valueRadio="option1"
              />
            </li>
            <li>
              <CardInitial
                img="other"
                title="Para alguien más"
                description="Realiza una cotización para uno de tus familiares o cualquier persona."
                valueRadio="option2"
              />
            </li>
          </ul>
        </div>
      </div>
      <div className="grid sm:grid-cols-3 gap-4 px-12">
            {store && store.plans && store.optionSelected !== ""
              ? store.plans.filter((plan: Plan)=> plan.age > store.ageUser).map((plan: any) => (
                  <CardPlanDescription
                    key={plan.name}
                    plan={plan}
                  ></CardPlanDescription>
                ))
              : ""}
          </div>
    </>
  );
}

export default Step1;
