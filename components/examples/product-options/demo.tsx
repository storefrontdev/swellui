'use client'

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

export function ProductOptionsDemo() {

  return (
  
      <div className="flex flex-col space-y-5">

        {product.options?.length > 0 && (
          <div id="variants" className="mt-5 space-y-10">
              {product.options?.map((option: any) => (
                option.input_type === "select" ? (

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

                ) : (

                  <RadioGroup key={option.id} defaultValue="comfortable">
                    <label>{option.name}</label>
                    <div className="flex items-center space-x-2">
                      {option.values.map((value: any) => (
                        <>
                          <RadioGroupItem value={value.id} id={value.id} />
                          <Label htmlFor={value.id}>{value.name}</Label>
                        </>
                      ))}
                    </div>
                  </RadioGroup>
              
                )

              ))}
          </div>
        )}

      </div>
   
  )
}
