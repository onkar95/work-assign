import * as React from "react"

// import { Card, CardContent } from "../ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "../ui/carousel"
import UserCard from "../widgets/UserCard"
import { UserData } from "../../db"

export function CarouselSize() {
    return (
        <Carousel
            opts={{
                align: "start",
            }}
            className="self-center px-11 "
        >
            <CarouselContent className='p-0'>
                {UserData && UserData.map((val, index) => (
                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/8 pl-1">
                        <UserCard user={val.adviser} data={val} />
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className="bg-white ml-13  " />
            <CarouselNext className="bg-white mr-13"  />
        </Carousel>
    )
}
