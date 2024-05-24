import Image from "next/image";
import MainButton from "../ui/main-button";

export default function Projects() { 
   //might want to move bento box data into array

    return ( 
        <section className="flex flex-col gap-4 items-center">
            <div className="grid grid-cols-6 gap-4 w-full">
                <div className="col-span-2 row-span-3 bg-gray-100 rounded-md p-6 h-80 flex flex-col justify-end gap-4">
                    <h2 className="text-5xl font-bold">Check out my latest projects</h2>
                    <div className="flex items-center gap-1 cursor-pointer">
                        <p className="text-sm">View all projects</p>
                        <Image src="/images/right-arrow.svg" alt="right arrow" width={20} height={5} />
                    </div>
                </div>
                <div className="cursor-pointer col-span-4 row-span-3 bg-gray-100 rounded-md p-4">
                    <span>Project One</span>
                </div>
                <div className="cursor-pointer col-span-4 row-span-2 bg-gray-100 h-80 rounded-md p-4">
                    <span>Project Two</span>
                </div>
                <div className="cursor-pointer col-span-2 row-span-2 bg-gray-100 rounded-md p-4">
                    <span>Project Three</span>
                </div>
            </div>
        </section>
    )  
}