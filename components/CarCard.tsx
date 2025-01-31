"use client";
import { carProps } from '@/Types/Index'
import React from 'react'
import CustomButton from './CustomButton';
import { useState } from 'react';
import CarDetailsCom from './CarDetailsCom';

import Image from 'next/image';

interface carCardProps {
  car: carProps;
}

const CarCard = ({ car }: carCardProps) => {

  const { company, model, fuel, producedIn, color, price } = car;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='car-card group'>
      <div className='car-card__content'>
        <h2 className='car-card__content-title'>
        {company} {model}
        </h2>
      </div>
      <p className='flex mt-6 text-[32px] font-extrabold'>
        <span className='self-start text-[14px] font-semibold'>
          ${price}
        </span>
        <span className='self-end text-[10px] font-semibold pl-1'>
          total
        </span>
      </p>
      <div className='relative w-full h-40 my-3 object-contain'>
        <Image src="/hero.png" alt="car model" fill priority className="object-contain"/>
      </div>
      <div className='relative flex w-full mt-2'>
        <div className='flex group-hover:invisible w-full justify-between text-grey'>
          <div className='flex flex-col justify-center items-center gap-2'>
            <Image src='/steering-wheel.svg' width={20} height={20} alt='steering wheel' />
            <p className='text-[14px] leading-[17px]'>
              {color}
            </p>
          </div>
          <div className="car-card__icon">
            <Image src="/tire.svg" width={20} height={20} alt="seat" />
            <p className="car-card__icon-text">
              {producedIn}
            </p>
          </div>
          <div className="car-card__icon">
            <Image src="/gas.svg" width={20} height={20} alt="seat" />
            <p className="car-card__icon-text">
              {fuel}  
            </p>
          </div>
        </div>
        <div className='car-card__btn-container'>
          <CustomButton 
            title='view more'
            containerStyles='w-full py-[16px] rounded-full bg-primary-blue'
            textStyles='text-white text-[14px] leading-[17px] font-bold'
            rightIcon='/right-arrow.svg'
            handleClick={()=> setIsOpen(true)}
          />
        </div>
      </div>
      <CarDetailsCom isOpen={isOpen} closeModel={()=>setIsOpen(false)} car={car}  />
    </div>
  )
}

export default CarCard