# DESIGN.md — Isabella Salón · propuesta de contenido

## Tokens
- Fondo claro: `--cream #F8F1E7` · fondo oscuro: `--chocolate #221510` / `#2E1D14`
- Secundario: `--moca #6E4B33` · acento único: `--champagne #C9A24B` (CTA, hairlines, badges <5%)
- Tinta: `--ink #2B1D14` · muted: `#6F5B45` · líneas: tinta 16%
- Tipos: Cormorant Garamond (display serif, itálicas de énfasis) + Jost (sans/labels). Google Fonts, display=swap.
- Radio: 3–4px tarjetas, pill en CTAs/badges (carácter editorial, no tech).

## Overview
Lenguaje editorial de belleza cálido: titular serif gigante con itálica champán, numeración de capítulos (01/02/03), hairlines doradas, marquee de servicios, galería como "planchas" numeradas con badge IA. Una firma por página: home = hero asimétrico con marco dorado rotado; galería = plachas editoriales; calendario = filas día-por-día; contacto = tarjeta + formulario mailto con consentimiento.

## Layout / Motion
- Hero: grid asimétrico 1.08/0.92, H1 clamp(3rem,8.4vw,6.4rem), reveal por máscara de línea + stagger IO.
- Motion: entrance 0.8s var(--ease) (expo.out), marquee lineal 30s, hover ≤1.035 en imágenes. Rama prefers-reduced-motion + fallback que revela todo a los 3s (nada queda en opacity 0).
- Una sola cosa cromática hace el trabajo de CTA (champagne); jerarquía por opacidad, no por colores nuevos.

## Known gaps (honestidad)
- Sin fotos reales del salón: las 4 imágenes son IA, marcadas en cada aparición (badge + aviso + términos).
- Sin backend: el formulario arma un mailto a contact@tiyandegital.com (declarado en la página).
- Horarios del calendario = sugerencias generales, marcadas como ejemplo.
- Contraste verificado por cálculo (ver QA): muted #6F5B45 sobre cream ≈ 5.2:1; champagne sobre chocolate solo en texto grande/CTAs.
- Pendiente de verificación con navegador real: screenshots 1440/768/390 (sin acceso a browser en este worker — CSS defensivo: overflow-x hidden, imágenes 100%, grid→1col en breakpoints).
