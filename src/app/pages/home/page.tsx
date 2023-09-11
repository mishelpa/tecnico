import React from 'react'
import Image from "next/image";
import FormInitial from '@/app/components/FormInitial/FormInitial';
import Navbar from '@/app/components/Navbar/Navbar';
import Resumen from '@/app/components/Step2/Step2';

function page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <Navbar/>
    <section className='section-body flex'>
      <div className='section-body__left basis-1/2'>
        <Image
          width={880}
          height={600}
          className=""
          src="./family.svg"
          alt="imagen familia"
        ></Image>
      </div>
      <div className="section-body__right basis-1/2">
        <div className="description">
          <div className="description-container">
            <h1 className="title">Seguro Salud Flexible</h1>
            <p className="subtitle">Creado para ti y tu familia</p>
          </div>
          <Image
          width={290}
          height={200}
          className=""
          src="./family.svg"
          alt="imagen familia"
        ></Image>
        </div>
        <div className="description-form">
          <p>Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe nuestra asesoría. 100% online.</p>
          <FormInitial/>
        </div>
    </div>
    </section>
    </main>
  )
}

export default page