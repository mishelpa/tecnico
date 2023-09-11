import React, { useContext } from "react";
import Image from "next/image";
import { Context } from "@/app/store/appContext";

function CardInitial({
  img,
  title,
  description,
  valueRadio,
}: {
  img: string;
  title: string;
  description: string;
  valueRadio: string;
}) {
const { store, actions } = useContext(Context);
  return (
          <div className="flex flex-col items-center w-full p-5 text-gray-500 bg-white border border-gray-200 focus:border-black rounded-lg cursor-pointer shadow-xl">
            <div className="flex w-full justify-end">
              <input
                type="radio"
                id={img}
                name="plan"
                value={valueRadio}
                className="w-4 h-4 text-[#389e0d] bg-gray-100 border-gray-300 focus:ring-[#389e0d]"
                onChange={(event)=> {actions.getOptionInitial(event.target.value)}}
              />
            </div>

            <label htmlFor={img} className="inline-flex">
              <div className="block">
                <Image
                  width={48}
                  height={48}
                  className=""
                  src={`../../../${img}.svg`}
                  alt="imagen familia"
                ></Image>
                <p className="font-bold text-base text-black">{title}</p>
                <span className="text-sm">{description}</span>
              </div>
            </label>
          </div>
  );
}

export default CardInitial;
