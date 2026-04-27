# Landing Page Telar (Next.js + TypeScript)

Proyecto migrado desde un borrador HTML a una landing funcional en Next.js con TypeScript.

## Estructura creada

- `app/`: App Router de Next.js (`layout.tsx`, `page.tsx`, `globals.css`)
- `components/`: componentes React de la landing (`landing-page.tsx`)
- `types/`: tipos TypeScript para planes, features y testimonios
- `home.html`: borrador original conservado como referencia

## Funcionalidades incluidas

- Navegacion responsive con menu movil
- Seccion de precios con cambio mensual/anual
- Carrusel de testimonios automatico y con controles
- Formulario de contacto con validacion basica

## Ejecutar con pnpm

```bash
pnpm install
pnpm dev
```

Abrir: `http://localhost:3000`

## Comandos utiles

```bash
pnpm build
pnpm start
pnpm lint
```