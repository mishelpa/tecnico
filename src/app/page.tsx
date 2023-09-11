'use client'
import FormInitial from './components/FormInitial/FormInitial';
import Navbar from './components/Navbar/Navbar';
import Image from "next/image";
import Resumen from './components/Step2/Step2';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar/>
    <section className='section-body flex'>
      <div className='hidden sm:flex section-body__left basis-1/2 py-8 px-16 '>
        <Image
          width={480}
          height={560}
          className="section-body__image"
          src="./family.svg"
          alt="imagen familia"
        ></Image>
      </div>
      <div className="section-body__right p-4 sm:basis-1/3 sm:p-0">
        <div className="description flex sm:block">
          <div className="description-container">
            <h1 className="title w-40">Seguro Salud Flexible</h1>
            <p className="subtitle font-bold">Creado para ti y tu familia</p>
          </div>
          <Image
          width={160}
          height={160}
          className="img-mobile ml-2 flex sm:hidden"
          src="./family.svg"
          alt="imagen familia"
        ></Image>
        </div>
        <div className='border border-[#CCD1EE] m-6'></div>
        <div className="description-form">
          <p className='font-bold text-sm mb-6'>Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe nuestra asesoría. 100% online.</p>
          <FormInitial/>
        </div>
    </div>
    </section>
    </main>
  )
}
