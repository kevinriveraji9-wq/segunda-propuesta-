# Frontend Development Guidelines

> Conventions for the Calzado Leidy Carolina catalog site (Pitalito, Huila).

---

## Overview

A **static, no-build** catalog site: plain HTML + one CSS file + vanilla JavaScript.
No framework, no bundler, no npm dependencies, no backend. Orders happen in WhatsApp
through `wa.me` links. The page must open from any static host (Netlify, GitHub Pages)
and from `python -m http.server`.

Art direction: **"the page is the object"**. The page is a shoebox: kraft cardboard
ground, white paper labels on top (hero label, printed catalog sheet with scalloped edges,
receipt slip with zigzag edge, cut-out coupon with notches).

---

## Pre-Development Checklist

Before changing any file, read:

1. [Directory Structure](./directory-structure.md): where things live
2. [Component Guidelines](./component-guidelines.md): the stationery pieces and how to add sections
3. [State Management](./state-management.md): the single `estado` object and render functions
4. [Quality Guidelines](./quality-guidelines.md): design house rules + the two automated gates
5. [Type Safety](./type-safety.md): data contract of `js/productos.js`

## Quality Check

- `node <taste-skill>/scripts/lint.mjs index.html css js` gives 0 FAIL
- `node <taste-skill>/scripts/inspect.mjs http://localhost:5173` gives 0 FAIL (1 WARN `no-footage` is accepted, see quality guidelines)
- Manual: talla filter, product dialog, coupon validation, no console errors, 390px width

## Guidelines Index

| Guide | Description | Status |
|-------|-------------|--------|
| [Directory Structure](./directory-structure.md) | File layout of the static site | Filled |
| [Component Guidelines](./component-guidelines.md) | Sections, stationery pieces, markup patterns | Filled |
| [Hook Guidelines](./hook-guidelines.md) | Not applicable (no framework) | N/A |
| [State Management](./state-management.md) | `estado`, render functions, observers, coupon contract | Filled |
| [Quality Guidelines](./quality-guidelines.md) | House rules, gates, accessibility | Filled |
| [Type Safety](./type-safety.md) | Product data contract | Filled |

---

**Language**: All documentation should be written in **English**. User-facing copy on the site is **Spanish (Colombia)**.
