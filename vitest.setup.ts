import "@testing-library/jest-dom/vitest";
import { afterEach } from "vitest";
import { cleanup } from "@testing-library/react";

// El componente usa una variable de entorno (NEXT_PUBLIC_REDIRECT_URL) para armar los enlaces de login/registro. 
// En los tests esa variable no existe, así que aquí le ponemos un valor falso conocido. 
// Así el enlace será https://app.telar.test/sign-in y podemos comprobarlo.
process.env.NEXT_PUBLIC_REDIRECT_URL = "https://app.telar.test";

// Después de cada test, limpia el navegador falso.
afterEach(() => {
  cleanup();
});