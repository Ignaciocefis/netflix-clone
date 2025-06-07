"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";

export function Terms() {
  const [showExtraTerms, setShowExtraTerms] = useState(false);

  return (
    <div className="test-xs mt-4 mb-10 text-gray-600 max-w-72">
      <div className="mb-5">
        <span>
          Está página está protegida por reCAPTCHA para verificar que no eres un
          robot.
        </span>
        <Button
          variant="ghost"
          onClick={() => setShowExtraTerms(!showExtraTerms)}
          className="opacity-1 text-[#0071eb] hober:bg-transparent p-0 ml-1 h-fit"
        >
          Más información
        </Button>
      </div>
      <div>
        {showExtraTerms && (
          <p>
            Para proteger nuestros formularios contra el uso indebido y
            garantizar la seguridad de nuestros usuarios, utilizamos Google
            reCAPTCHA. Esta herramienta ayuda a distinguir entre interacciones
            humanas y actividades automatizadas (bots), evitando así el envío de
            spam y otros intentos de abuso.
          </p>
        )}
      </div>
    </div>
  );
}
