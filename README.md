# Telar Landing Page

Landing page principal de **Telar**, construida con **Next.js (App Router)**, **TypeScript** y **CSS**.

## Tecnologías

- Next.js
- TypeScript
- CSS

## Requisitos

- Node.js 22 (recomendado)
- pnpm

## Estructura del proyecto

- `app/`: App Router de Next.js (`layout.tsx`, `page.tsx`, `globals.css`)
- `components/`: Componentes React de la landing (`landing-page.tsx`)
- `types/`: Tipos TypeScript para planes, features y testimonios

## Levantamiento en local

Instala dependencias:

```bash
pnpm install
```

Inicia el entorno de desarrollo:

```bash
pnpm dev
```

La aplicación quedará disponible en:

```text
http://localhost:3000
```

## Build de producción

Genera el build:

```bash
pnpm build
```

Inicia en modo producción:

```bash
pnpm start
```

## Calidad de código

Ejecuta lint:

```bash
pnpm lint
```
