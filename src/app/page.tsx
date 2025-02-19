"use client"

import * as React from "react"

import { Checkbox } from "@/components/ui/checkbox"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import { Input } from "@/components/ui/input"

 
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"


 

import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
 
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"



export default function Home() {
  
  const [date, setDate] = React.useState<Date>()
  
  return ( 

    <main>

      
      <div className="header_placeholder">
      <h1 className="indent">NOW SERVING AWS APPLICANTS</h1>
      <h1 className="indent_right">FEB 19-24, 2024</h1>
      <h4 className="indent">LEARN AND UPSKILL</h4>
      <h6 className="indent_white">DEVELOPED BY AWS DEVELOPERS</h6>
      <br />
      </div>

      <div className="fillup_form">

        <h5 className="label"><strong>Enter your Full Name</strong></h5>
        
        
        <Input type="name" placeholder="Juan T. Cruz" className="padleft"/>

        <h5 className="label"><strong>Email:</strong></h5>
        

        <Input type="email" placeholder="juantamad@gmail.com" className="padleft"/>

        <h5 className="label"><strong>School:</strong></h5>
       
        <div className="padleft">
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select a School" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>School</SelectLabel>
                <SelectItem value="Arellano">Arellano</SelectItem>
                <SelectItem value="LPU">LPU</SelectItem>
                <SelectItem value="Lyceum">Lyceum</SelectItem>
                <SelectItem value="TIP">TIP</SelectItem>
                <SelectItem value="UST">UST</SelectItem>
                <SelectItem value="UP">UP</SelectItem>
                <SelectItem value="Public School">Public School</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

            

        <h5 className="label"><strong>Date for F2F interview</strong></h5>
        <br />

        <div className="padleft">
            <Popover>
          <PopoverTrigger asChild>
            <Button
              variant={"outline"}
              className={cn(
                "w-[280px] justify-start text-left font-normal",
                !date && "text-muted-foreground"
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {date ? format(date, "PPP") : <span>Pick a date</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              initialFocus
            />
          </PopoverContent>
        </Popover>        
        </div>
        <br />

        <div className="padleft">
            <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="outline">Submit</Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action attempts only 1 submission per email. This will serve as your only submisssion and 
                attempt.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction>Continue</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
        </div>

        <br />
        
        





      </div>
    </main>
    
    
    
  
  );
}



{/* <div className="center">
    <main>
      <h1>View your options</h1>
      <Drawer>
  <DrawerTrigger>Open</DrawerTrigger>
  <DrawerContent>
    <DrawerHeader>
      <DrawerTitle>Are you absolutely sure?</DrawerTitle>
      <DrawerDescription>This action cannot be undone.</DrawerDescription>
    </DrawerHeader>
    <DrawerFooter>
      <Button>Submit</Button>
      <DrawerClose>
        <Button variant="outline">Cancel</Button>
      </DrawerClose>
    </DrawerFooter>
  </DrawerContent>
</Drawer>
<br />
      <Button>welp</Button>
    
    </main>
  </div>  */}
