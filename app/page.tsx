import Hero from "@/components/Hero";
import Image from "next/image";

import SearchBar from "@/components/SearchBar";
import CustomFilter from "@/components/CustomFilter";
import CarCard from "@/components/CarCard";
// import { fetchCars } from "@/Utils/Index";

// Fake data
import { carsDetails, fuels, yearsOfProduction } from "@/constants";

export default async function Home() {

  // We can not fetch items because the api is banned in iran
  // instead i created some fake data in the constants folder named carsDetails
  // const allCars = await fetchCars();
  // console.log(carsDetails);


  return (
    <main className="overflow-hidden">
      <  Hero/>

      <div className='mt-12 padding-x padding-y max-width' id='discover'>
        <div className='home__text-container'>
          <h1 className='text-4xl font-extrabold'>Car Catalogue</h1>
          <p>Explore out cars you might like</p>
        </div>

        <div className='home__filters'>
          <SearchBar />
          <div className='home__filter-container'>
            <CustomFilter title="fuel" options={fuels} />
            <CustomFilter title="year" options={yearsOfProduction} />
          </div>
        </div>

        { carsDetails
          ? 
            <section>
              <div className="home__cars-wrapper">
                {carsDetails?.map((car)=> <CarCard car={car} />)}
              </div>
            </section>
          : (
            <div className="home__error-container">
              <h2 className="text-black text-xl font-bold">oops! Somthings wrong! Please refresh page.</h2>
            </div>
          ) 
        }
      </div>
    </main>
  );
}
