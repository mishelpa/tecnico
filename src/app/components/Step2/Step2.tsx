"use client";
import React, { useContext, useEffect } from "react";
import Image from "next/image";
import { Context } from "@/app/store/appContext";

function Step2() {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.getUser();
  }, []);
  return (
    <div className="py-12 sm:w-3/4">
      <p className="text-4xl font-bold mb-3">Resumen del seguro</p>
      <div className="w-full p-4 bg-white border border-gray-200 rounded-lg shadow-xl sm:p-8">
        <div className="font-black font-xs">
          <p>Precios calculados para:</p>
          <div className="flex space-x-2">
            <Image
              width={24}
              height={24}
              className=""
              src="../../../gl_family.svg"
              alt="imagen familia"
            ></Image>
            {store.user && (
              <span className="font-xl">
                {store.user.name} {store.user.lastName}
              </span>
            )}
          </div>
        </div>
        <div className="border border-[#D7DBF5] my-4"></div>
        <div>
          <p className="font-bold text-base mb-2">Responsable de pago</p>
          {store.formData && (
            <div className="flex flex-col">
              <span className="mb-2">
                {store.formData.type}: {store.formData.numberType}
              </span>
              <span className="mb-2">Celular: {store.formData.celular}</span>{" "}
            </div>
          )}
        </div>
        <div>
          <p className="font-bold text-base mb-2">Plan Elegido</p>
          <div className="flex flex-col">
            <span className="mb-2">{store.planSelected.name}</span>
            <span className="mb-2">
              Costo del plan: ${store.pricePlan} al mes
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Step2;
