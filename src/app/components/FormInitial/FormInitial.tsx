"use client";
import React, {useContext, useState} from "react";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import { Context } from "@/app/store/appContext";
import { TypeDocument } from "@/app/models/typeDocument.interface";
import { useRouter } from 'next/navigation'

export default function FormInitial() {
  const { store, actions } = useContext(Context);
  const router = useRouter()

  const [type, setType] = useState("DNI");
  const [numberType, setNumberType] = useState("");
  const [celular, setCelular] = useState("");
  const [privacy, setPrivacy] = useState(false);
  const [comercial, setComercial] = useState(false);

  const handleSubmit = (event: any) => {
    
    event.preventDefault();

    const dataForm = {
      type,
      numberType,
      celular,
      privacy,
      comercial,
    }
    
    actions.getFormData(dataForm);

    localStorage.setItem('dataForm', JSON.stringify(dataForm))

    router.push('/pages/plans')
  };

  return (
    <>
      <form onSubmit={(event) => handleSubmit(event)}>
        <div className="grid mb-6 md:grid-cols-1 w-full">
          <div className="flex">
            <TextField
              id="outlined-select-currency"
              select
              defaultValue="DNI"
              name="type"
              className="w-32"
              onChange={(event) => {
                setType(event.target.value);
              }}
            >
              {store.typeDocument &&
                store.typeDocument.map((option: TypeDocument) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
            </TextField>
            <TextField
              id="outlined-basic"
              label="Nro. de documento"
              variant="outlined"
              required
              className="w-80"
              onChange={(event) => {
                setNumberType(event.target.value);
              }}
            />
          </div>
          <div className="mt-6">
            <TextField
              id="outlined-basic"
              label="Celular"
              className="w-full"
              variant="outlined"
              required
              onChange={(event) => {
                setCelular(event.target.value);
              }}
            />
          </div>
          <div className="my-6">
            <div className="flex items-center mb-4 w-full">
              <input
                id="default-checkbox"
                type="checkbox"
                value=""
                onChange={(event) => {
                  setPrivacy(event.target.checked);
                }}
                className="w-4 h-4 text-black bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
              />
              <label
                htmlFor="default-checkbox"
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Acepto lo Política de Privacidad
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="checked-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                onChange={(event) => {
                  setComercial(event.target.checked);
                }}
              />
              <label
                htmlFor="checked-checkbox"
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Acepto la Política Comunicaciones Comerciales
              </label>
            </div>
          </div>
          <div className="font-semibold text-sm underline">
            <span>Aplican Términos y Condiciones.</span>
          </div>
        </div>
        <button
          type="submit"
          className="text-white bg-black font-bold rounded-3xl text-sm w-full sm:w-40 px-5 py-2.5 text-center"
        >
          Cotiza aquí
        </button>
      </form>
    </>
  );
}
