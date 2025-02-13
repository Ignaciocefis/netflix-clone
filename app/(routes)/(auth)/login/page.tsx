import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
import { Terms } from "../components/Terms";
import { LoginForm } from "./LoginForm";

export default function LoginPage() {
  return (
    <div>
      <p className="text-3xl font-bold text-left mb-7">Iniciar sesión</p>
      <LoginForm />
      <div className="mt-5 text-center">
        <Link href="/" className="hover:underline hover:opacity-70">
          ¿Has olvidado tu contraseña?
        </Link>
      </div>
      <div className="flex space-x-2 mt-4 items-center">
        <Checkbox id="terms" className="border-white" />
        <label className="peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          Recuérdame
        </label>
      </div>
      <div className="mt-4 flex gap-1">
        <p className="text-white opacity-70">¿No tienes cuenta?</p>
        <Link href="/register" className="opacity-1 text-white">
          Suscribete ya
        </Link>
      </div>
      <Terms />
    </div>
  );
}
