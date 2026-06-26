Absolutely. Including the **Master Prompt** directly in your `IMPLEMENTATION.md` file is a brilliant move—it turns your documentation into a "living" resource that any AI or developer can use to jumpstart the coding process immediately.

Here is the updated, comprehensive `IMPLEMENTATION.md` that includes the asset management and the master prompt.

---

# Implementation Plan: AGT Technology Website Modernization

This document outlines the technical strategy for updating the **AGT Technology Limited** website from its current state ([agttechnology.github.io](https://agttechnology.github.io/)) to a high-performance corporate platform.

## 1. Project Overview

* **Company:** AGT Technology Limited
* **Current State:** Single-page HTML/GitHub Pages.
* **Objective:** Modernize UI/UX, improve mobile responsiveness, and optimize SEO.
* **Primary Market:** Nigeria (Tech/Lounge/Corporate sectors).

## 2. Technical Stack

* **Framework:** Next.js 14+ (App Router)
* **Styling:** Tailwind CSS (Dark Theme focus)
* **Animations:** Framer Motion
* **Icons:** Lucide React
* **Deployment:** Vercel (recommended) or GitHub Pages.

## 3. Asset Inventory

The following assets from the existing repository must be migrated to the `/public` folder of the new project:

* `logo.png`
* `facebook-logo.png`
* `twitter.png`
* `linkedin_icon.png`

---

## 4. Master AI Generation Prompt

*Copy and paste the following prompt into Gemini or a similar LLM to generate the entire codebase.*

> **Role:** Senior Full-Stack Engineer.
> **Context:** Rebuild the corporate website for **AGT Technology Limited**.
> **Existing Assets (in `/public`):** `logo.png`, `facebook-logo.png`, `twitter.png`, `linkedin_icon.png`.
> **Task:** Generate a production-ready Next.js 14+ (TypeScript) codebase using Tailwind CSS.
> **1. Theme & Config:** Create a `tailwind.config.ts` with a "Premium Tech" dark theme (Background: `#0f172a`, Primary Accent: Cyan/Teal).
> **2. Layout:** Build `app/layout.tsx` with a sticky glassmorphic Navbar using `logo.png`.
> **3. Main Page (`app/page.tsx`):**
> * **Hero:** High-impact text ("Innovative Solutions for a Digital World") with Framer Motion entry effects.
> * **Services/Solutions:** 3-column grids for Consulting, Development, Cloud, AI/ML, Cybersecurity, and IoT using Lucide icons.
> * **Testimonials:** Clean cards for "Universal Insurance Plc" and "Early Sunrise Guide."
> * **Contact & Footer:** Professional form + Footer with address (16 Fasanya Street, Fadeyi, Lagos) and social icons linked to the provided image files.
> 
> 
> **Constraints:** Use `<Image />` component for all assets. Ensure full mobile responsiveness and clean, documented TypeScript code.

---

## 5. Development Roadmap

1. **Phase 1:** Initialize Next.js app and configure `tailwind.config.ts`.
2. **Phase 2:** Build shared components (Navbar, Footer, Button).
3. **Phase 3:** Develop the landing page sections with scroll animations.
4. **Phase 4:** SEO Audit (Meta tags, OpenGraph for Lagos market).
5. **Phase 5:** Deployment & Domain Mapping.

## 6. Content Reference

* **Mission:** "Transforming businesses with cutting-edge technology and exceptional service."
* **Values:** Innovation, Integrity, Customer Focus, Excellence.
