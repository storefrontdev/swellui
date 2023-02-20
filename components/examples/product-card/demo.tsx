'use client'

import Image from "next/image"
import Link from "next/link"
import { AspectRatio } from "@/components/ui/aspect-ratio"

// product will be passed in as a prop via swell.js
import { product } from "@/data"

const colors = [
  {
    name: "Black",
    hex: "#000000",
  },
  {
    name: "White",
    hex: "#ffffff",
  },
  {
    name: "Red",
    hex: "#ff0000",
  },
  {
    name: "Green",
    hex: "#00ff00",
  },
  {
    name: "Rose",
    hex: "#ff00ff",
  },
  {
    name: "Navy",
    hex: "#000080",
  },
  {
    name: "Orange",
    hex: "#ff7f00",
  },
  {
    name: "Brown",
    hex: "#a52a2a",
  },
]

const getColor = (name: string) => {
  const color = colors.find((color) => color.name === name)
  return color?.hex
}

export function ProductCardDemo() {

  return (
  
    <div className="relative cursor-pointer w-[400px] h-full bg-white shadow-md rounded-lg">
      <AspectRatio ratio={4/3}>
        <Image
          src={product.images[0].file.url}
          alt={product.name}
          fill
          className={"duration-700 ease-in-out group-hover:opacity-75 transition-all hover:scale-105 object-contain"}
        />
      </AspectRatio>
      <div className="justify-between p-5 bg-gray-50 rounded-lg">
        <div>
          <h3 className="text-sm text-center text-gray-700 font-bold">
            <Link href={`/products/${product.slug}`}>
              <span aria-hidden="true" className="absolute inset-0" />
              {product?.name}
            </Link>
          </h3>
        </div>
        <p className="flex flex-col text-sm font-light items-center text-gray-900">
          <span className="text-xs">
            {" "}
            Price: ${product?.sale_price || product?.price}
          </span>
        </p>
        {product.options?.map((option: any) => {
          if (option.name === "Color") {
            return (

                <div className="flex items-center justify-center space-x-2 mt-3">
                  {option.values.map((value: any) => (
                    <span className="h-6 w-6 rounded-full" style={{ backgroundColor: `${getColor(value.name)}`}}>
                    </span>
                  ))}
                </div>
            )
          }
        })}
      </div>
    </div>
   
  )
}
