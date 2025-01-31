import Link from "next/link"
import Image from "next/image"

import { footerLinks } from "@/constants"

const Footer = () => {
  return (
    <footer className="flex flex-col text-black-100 mt-5 border-t border-gray-100">
        <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
            <div className='flex flex-col justify-start items-start gap-6'>
                < Image src="/logo.svg" alt="logo" width={118} height={18} className="object-contain"/>
                <p className="text-base text-gray-700">
                    Car Hub<br/>
                    All Rights Reserved &copy;
                </p>
            </div>
            <div className="footer__links">
                {footerLinks.map((item)=> (
                    <div key={item.title} className="footer__link">
                        <h3 className="font-bold">{item.title}</h3>
                        <div className="flex flex-col gap-5">
                            {item.links.map((link)=> (
                                <Link className="text-gray-500" href={link.url} key={link.title}>
                                    {link.title}
                                </Link>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
        <div className="flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 py-10">
            <p>@2023 Car Hub. All Rights Reserved</p>
            <div className="footer__copyrights-link">
                <Link href='/' className="text-gray-500">Privecy & Policy</Link>
                <Link href='/' className="text-gray-500">Terms & Condition</Link>
            </div>
        </div>
    </footer>
  )
}

export default Footer