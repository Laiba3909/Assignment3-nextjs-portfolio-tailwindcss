import React from "react"
import Link from "next/link"
export default function Header(){
    return(
        <div>

            <div className="flex justify-between text-black bg-orange-400 rounded font-serif 
            lg:text-3xl lg:gap-7 lg:h-20 ">
                
                 <div>
                   <ul className="inline-flex gap-9 h-9 mt-2 ml-2 cursor-pointer lg:text-center lg:ml-60 
                   lg:font-bold lg:mt-5">
                        <li><Link href={'#home'}>Home</Link></li>
                        <li><Link href={'#about'}>About me</Link></li>
                        <li><Link href={'#skill'}>Skills</Link></li>
                        <li><Link href={'#contact'}>Contact</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}