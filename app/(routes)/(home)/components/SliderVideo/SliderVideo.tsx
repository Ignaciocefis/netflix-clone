"use client";

import { Play, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export function SliderVideo() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  
  return (
    <div className="relative w-full -[80vw] md_h-[56.25vw] lg:h-[45vw]">
      {isClient && (
        <video autoPlay loop muted className="brightness-50 object-fill w-full h-[80vw] md:[56.25vw] lg:h-[45vw]" src="/videos/Interstellar.mp4" />
      )}
      <div className="flex flex-col justify-end absolute w-full md:w-[36%] px-4 md:px-0 md:left-[4%] z-20 top-0 -bottom-7 md:bottom-[36%]">
        <div className="pt-24 md:pt-0">
          <h2 className="text-2xl md:text-5xl ls:text-8xl font-bold drop-shadow-xl">
            Interstellar
          </h2>
          <p className="max-w-md mt-2 text-xs md:text-base">
            Al ver que la vida en la Tierra está llegando a su fin, un grupo de exploradores dirigidos por el piloto Cooper (McConaughey) y la científica Amelia (Hathaway) emprende una misión que puede ser la más importante de la historia de la humanidad: viajar más allá de nuestra galaxia para descubrir algún planeta en otra que pueda garantizar el futuro de la raza humana.
          </p>
          <div className="flex flex-col md:flex-row gap-4 mt-5">
            <Button size="lg" variant="secondary">
              <Play className="h-6 w-6 mr-2 fill-black" />
              Reproducir
            </Button>
            <Button size="lg" className="bg-gray-500/50 hover:bg-gray-500/40">
              <Info className="h-6 w-6 mr-2" />
              Más Información
            </Button>
          </div>
        </div>
      </div>
      <div className="bg-transparent bg-no-repeat bg-contain w-full opacity-100 top-auto h-[14.7vw] -bottom-16 absolute bg-gradient-video"/>
    </div>
  );
}