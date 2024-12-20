"use client"

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function NotFinish() {

const router = useRouter();

const Checkout = () => {
    router.push("/");

}
    return (

   
        <div className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
          <div className="text-center">
            <p className="text-base font-semibold text-pink-600">404</p>
            <h1 className="mt-4 text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">
  Page not finished
</h1>
<p className="mt-6 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
  Sorry, this page is still under construction. Please check back later.
</p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button
                onClick={Checkout}
         
              >
                Go back home
              </Button>
            
            </div>
          </div>
        </div>

    )
  }
  