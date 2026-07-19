# Threshold (working name)

Short, guided practices for directly experiencing what contemplative and
psychological traditions point to — Zen, Advaita, Kashmir Śaivism, Taoism,
Theravāda, Stoicism, Focusing, Krishnamurti's choiceless awareness, and
Gestalt therapy — not more explanation of what they mean. Secular by design:
no devotional or deity-address practices.

**Live:** [threshold-gray.vercel.app](https://threshold-gray.vercel.app)
(placeholder domain — see Open Items below for a real one).

## Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Stack

Next.js (App Router) + TypeScript + Tailwind v4, deployed on Vercel.

## Reflections (optional)

After a practice, visitors can leave a short reflection (typed, or spoken via
the browser's Web Speech API where supported) — this is what eventually
becomes real, unedited testimonial content on each practice page. It's
entirely optional infrastructure: without it configured, the capture form and
the "what people noticed" section on practice pages both just don't render.

To turn it on:

1. Copy `.env.example` to `.env.local`.
2. Create a free project at [supabase.com](https://supabase.com).
3. Run `supabase/migrations/0001_reflections.sql` in that project's SQL editor.
4. Copy the Project URL and anon/public key (Project Settings → API) into
   `NEXT_PUBLIC_SUPABASE_URL` / `NEXT_PUBLIC_SUPABASE_ANON_KEY` in `.env.local`.

**Moderation**: nothing submitted goes public automatically — every row is
inserted with `approved = false`, and Row Level Security only allows reading
`approved = true` rows. Review new submissions in the Supabase table editor
(`reflections` table) and flip `approved` to `true` for anything worth
showing. There's no admin UI for this in v1 — the Supabase dashboard already
does the job.

## Open items

- **Final name/branding** — "Threshold" is a working name, not decided.
- **Real domain** — currently live on the Vercel-assigned URL. Once a domain
  is bought, point it at this Vercel project and update `NEXT_PUBLIC_SITE_URL`
  (both in Vercel's project env vars and `.env.example`).
- **Search Console** — verify the domain and submit `/sitemap.xml` once a
  real domain is live (Vercel URLs can be verified too, but re-verification
  will be needed after a domain switch anyway).
- **Reflections backend** — Supabase project not yet created; see above.
