'use client'
import React from "react"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"



// product will be passed in as a prop via swell.js
import { product } from "@/data"
import { getColor } from "@/lib/colors"

export function ProductOptionsDemo() {

  return (
  
      <div className="flex flex-col space-y-5">
          <div id="variants" className="mt-5 space-y-7">
              {product.options?.map((option: any) => (

                <div className="flex items-center space-x-2">
                  {option.name === "Color" && (
                    <RadioGroup key={option.id} defaultValue={option.values[0]}>
                      <Label>{option.name}</Label>
                      <div className="flex items-center space-x-2">
                        {option.values.map((value: any) => (
                          <>
                            <RadioGroupItem value={value} id={value.id} className="p-5" style={{backgroundColor: `${getColor(value.name)}`}} />
                            <Label htmlFor={value.id} className="sr-only">{value.name}</Label>
                          </>
                        ))}
                      </div>
                    </RadioGroup>
                  )}
                  
                  {option.name === "Size" && (
                    <RadioGroup key={option.id} defaultValue={option.values[0]}>
                      <Label>{option.name}</Label>
                      <div className="flex items-center space-x-2">
                        {option.values.map((value: any) => (
                          <>

                            <RadioGroupItem value={value} id={value.id} className="px-4 py-2">
                              <Label htmlFor={value.id}>{value.name}</Label>
                            </RadioGroupItem>
                          </>
                        ))}
                      </div>
                    </RadioGroup>
                  )}

                  {option.name === "Material"  && (
                    <Select key={option.id}>
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder={`Select ${option.name}`} />
                      </SelectTrigger>
                      <SelectContent>
                        {option.values.map((value: any) => (
                          <SelectItem key={value.id} value={value.id}>
                            {value.name}
                          </SelectItem>
                        ))}                  
                      </SelectContent>
                    </Select>
                  )}
                </div>
              ))}
          </div>
      </div>
   
  )
}





