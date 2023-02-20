'use client'

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { product } from "@/data"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

export function PurchaseOptionsDemo() {
  return (
    <Tabs defaultValue="subscribe" className="w-[400px] min-h-[300px] h-full">
      <TabsList className="w-full grid grid-cols-2 gap-5">
        <TabsTrigger value="subscribe" className="col-span-1">Subscribe (10% off)</TabsTrigger>
        <TabsTrigger value="one-time" className="col-span-1">One-Time</TabsTrigger>
      </TabsList>
      <TabsContent value="subscribe">
        <Label>Delivery Frequency</Label>
        {product.purchase_options.subscription && (
          <div className="flex flex-col space-y-5">
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a plan" />
              </SelectTrigger>
              <SelectContent>
              {product.purchase_options.subscription?.plans?.map((option, i) => {
                return (
                  <SelectItem key={i} value={option.id}>
                    {option.name} - ${option.price}
                  </SelectItem>
                )
              })}
              </SelectContent>
            </Select>
            <Button>Add to Cart</Button>
          </div>
        )}
      </TabsContent>
      <TabsContent value="one-time">
        <div className="flex flex-col space-y-5">
          <Button>Add to Cart</Button>
        </div>
      </TabsContent>
    </Tabs>
  )
}
