"use client";

import { CustomButtonProps } from "@/Types/Index";
import Image from "next/image"

const CustomButton = ({ title, containerStyles, handleClick, btnType, textStyles, rightIcon, isDisabled }: CustomButtonProps) => {
  return (
    <button
        className={`custom-btn ${containerStyles}`}
        disabled={false}
        type={ btnType || "button"}
        onClick={handleClick}

    >
        <span className={`flex-1 ${textStyles}`}>
            {title}
        </span>
        { rightIcon && (
          <div className="relative w-6 h-6">
            <Image src={rightIcon} alt="right icon" fill className="object-contain"/>
          </div>
        )

        }
    </button>
  )
}

export default CustomButton