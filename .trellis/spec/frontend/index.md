# Frontend Development Guidelines

> Conventions for the Calzado Leidy Carolina catalog site (Pitalito, Huila).

## Overview

A **static, no-build** catalog site: plain HTML + one CSS file + vanilla JavaScript.
No framework, no bundler, no npm dependencies, no backend. Orders happen in WhatsApp
through `wa.me` links.

Art direction (task `11-07-rediseno-profesional`, replaces the old kraft "shoebox"
direction): **restrained professional retail**, distilled from a study of recognised shoe
stores (Nike, Adidas, Skechers, Clarks, Steve Madden, Vélez, Bosi, Bata, Crocs). Study files:
`.trellis/tasks/archive/*/11-07-rediseno-profesional/research/`.

## Pre-Development Checklist

1. [Directory Structure](./directory-structure.md)
2. [Component Guidelines](./component-guidelines.md): page regions and their patterns
3. [State Management](./state-management.md): `estado`, render functions, order form contract
4. [Quality Guidelines](./quality-guidelines.md): visual system, accessibility, business-fact guard
5. [Type Safety](./type-safety.md): data contract of `js/productos.js`

## Quality Check

- `node --check js/app.js` and `node --check js/productos.js`
- Browser at 1440 / 768 / 390: no horizontal page scroll, console clean
- Filters (category, type, size, price, search, sort), empty state, product dialog (size required), size guide, filter sheet, menu drawer, floating WhatsApp menu, quick-order form
- design-taste-frontend lint/inspector are **advisory** for this direction (see quality guidelines for accepted findings)

## Guidelines Index

| Guide | Description | Status |
|-------|-------------|--------|
| [Directory Structure](./directory-structure.md) | File layout of the static site | Filled |
| [Component Guidelines](./component-guidelines.md) | Header, filters, cards, dialogs, order form | Filled |
| [Hook Guidelines](./hook-guidelines.md) | Not applicable (no framework) | N/A |
| [State Management](./state-management.md) | `estado`, render functions, focus restore, order form | Filled |
| [Quality Guidelines](./quality-guidelines.md) | Visual system, a11y, business-fact guard | Filled |
| [Type Safety](./type-safety.md) | Product + TIENDA data contract | Filled |

**Language**: documentation in English; user-facing copy in Spanish (Colombia), sentence case.
