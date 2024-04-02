import { Combobox, Transition } from "@headlessui/react"
import Image from "next/image"

import { Fragment, useState } from "react"

import { SearchManufacturerProps } from "@/Types/Index"

import { manufacturers } from "@/constants"

const SearchManufacturer = ({ manufacturer, setManufacturer}: SearchManufacturerProps) => {

  const [query, setQuery] = useState("");

  // Querry on the car manuacturers list to show them to the user based on the input.
  const filteredManufacturers =
    query === ""
      ? manufacturers
      : manufacturers.filter((item)=> (
        item.toLowerCase()
        .replace(/\s+/g, "")
        .includes(query.toLowerCase().replace(/\s+/g, ""))
      ))

  return (
    <div className="search-manufacturer">
      <Combobox value={manufacturer} onChange={setManufacturer}>
        <div className="relative w-full">
          <Combobox.Button className="absolute top-[14px]">
            <Image src="/car-logo.svg" width={20} height={20} className="ml-4" alt="car logo"/>
          </Combobox.Button>
          <Combobox.Input
            className="search-manufacturer__input"
            displayValue={(item: string)=> item}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Volkswagen"
          />
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={()=> setQuery('')}
          >
            <Combobox.Options>
              {filteredManufacturers.length === 0 && query !== "" ? (
                <Combobox.Option
                  value={query}
                  className="search-manufacturer__option"
                >
                  no match for: "{query}"
                </Combobox.Option>
              ) : (
                filteredManufacturers.map((item)=>(
                  <Combobox.Option
                    key={item}
                    className={({active}) => `search-manufacturer__option ${active ? 'bg-primary-blue text-white' : 'text-gray-900'}`}
                    value={item}
                  >
                    {item}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  )
}

export default SearchManufacturer