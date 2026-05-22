# Apex Surface Solutions — Website

Professional pressure washing website built with **Next.js 14**, **Tailwind CSS**, and deployable to **Vercel for free**.

---

## Quick Setup

### 1. Install dependencies
```bash
npm install
```

### 2. Run locally
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000)

---

## Deploy to Vercel (Free)

1. Push this folder to a GitHub repo (public or private)
2. Go to [vercel.com](https://vercel.com) → **Add New Project**
3. Import your GitHub repo
4. Click **Deploy** — Vercel auto-detects Next.js, zero config needed
5. Your site is live at `your-project.vercel.app`

### Custom Domain (optional, free on Vercel)
- In your Vercel project → **Settings → Domains**
- Add your domain (e.g. `apexsurfacesolutions.com`)
- Update your DNS records as instructed

---

## Customizing the Site

### Logo
1. Add your logo files to `/public/`:
   - `logo-white.png` — for dark backgrounds (navbar, footer)
   - `logo-black.png` — for light backgrounds if needed
2. In `src/components/Navbar.tsx`, replace the placeholder `<div>` with:
   ```tsx
   <Image src="/logo-white.png" alt="Apex Surface Solutions" width={160} height={40} className="h-10 w-auto" />
   ```
3. Do the same in `src/components/Footer.tsx`

### Phone & Email
Search the project for `555-0100` and `info@apexsurfacesolutions.com` and replace with your real contact info. Files to update:
- `src/components/Contact.tsx`
- `src/components/Footer.tsx`
- `src/app/layout.tsx` (meta description)

### Service Area
Update "Pocono Mountains & Surrounding Areas" in:
- `src/components/Contact.tsx`
- `src/components/Footer.tsx`

### Stats (500+ jobs, etc.)
Update the numbers in `src/components/WhyUs.tsx` → the `stats` array.

### Testimonials
Edit the `testimonials` array in `src/components/Testimonials.tsx` with real reviews.

### Gallery Photos
1. Add your before/after images to `/public/gallery/`
2. In `src/components/Gallery.tsx`, replace the placeholder divs with `<Image>` components:
   ```tsx
   import Image from "next/image";
   // ...
   <Image src="/gallery/driveway-after.jpg" alt="Driveway cleaning result" fill className="object-cover" />
   ```

### Contact Form — Hook it Up
The form in `src/components/Contact.tsx` currently just logs to console. To make it actually send:

**Option A — Formspree (easiest, free)**
1. Sign up at [formspree.io](https://formspree.io)
2. Create a form → get your form ID
3. Change the form's `onSubmit` to fetch:
   ```ts
   await fetch("https://formspree.io/f/YOUR_FORM_ID", {
     method: "POST",
     body: JSON.stringify(form),
     headers: { "Content-Type": "application/json" },
   });
   ```

**Option B — Next.js API Route + Resend/Nodemailer**
- Create `src/app/api/contact/route.ts`
- POST the form data there and send email via Resend (free tier available)

---

## Colors (Tailwind custom palette)

| Token | Hex | Use |
|---|---|---|
| `apex-blue` | `#0A1628` | Main background |
| `apex-mid` | `#0F2347` | Card backgrounds |
| `apex-accent` | `#1E90FF` | Primary blue |
| `apex-bright` | `#38B6FF` | Hover state |
| `apex-steel` | `#8AAEC8` | Body text |
| `apex-light` | `#E8F4FD` | Light accent |

---

## Project Structure

```
apex-surface-solutions/
├── public/
│   └── (add logo-white.png, logo-black.png, gallery/ here)
├── src/
│   ├── app/
│   │   ├── layout.tsx   ← SEO metadata, fonts
│   │   ├── page.tsx     ← Page assembly
│   │   └── globals.css
│   └── components/
│       ├── Navbar.tsx
│       ├── Hero.tsx
│       ├── Services.tsx
│       ├── WhyUs.tsx
│       ├── Gallery.tsx
│       ├── Testimonials.tsx
│       ├── Contact.tsx
│       └── Footer.tsx
├── tailwind.config.ts
├── package.json
└── README.md
```
