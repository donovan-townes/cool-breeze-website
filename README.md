# Cool Breeze Records

The Vercel-ready website for `coolbreezerecords.com`.

## Pages

- `/` — label homepage and main newsletter signup
- `/catalog` — complete supplied catalog
- `/go` — mobile-first social link hub and dedicated `/go` signup form
- `/listen/[slug]` — reusable release smart-link pages
- `/privacy` — draft privacy information

## Content updates

Seasonal messaging, newsletter forms, and social links live in `data/site.ts`. Release data lives in `data/releases.ts`. Images live in `public/releases`, and the current brand assets live in `public/brand`.

Follow the step-by-step checklist in `UPDATING.md` before publishing any change.

## Local use

```text
npm install
npm run dev
```

Run `npm run typecheck` and `npm run build` before deployment.

## Vercel and Namecheap

1. Push this folder to a GitHub repository.
2. Import that repository into Vercel and accept the detected Next.js settings.
3. Add `coolbreezerecords.com` and `www.coolbreezerecords.com` in the Vercel project’s Domains settings.
4. In Namecheap’s Advanced DNS screen, add the exact DNS records Vercel shows for those domains. Remove only conflicting parking records for `@` or `www`; preserve MX, TXT, DKIM, and other email records.
5. Wait for Vercel to verify the domain and issue HTTPS.

Never replace the full Namecheap nameserver or DNS zone merely to connect the website unless there is a separate, intentional DNS migration plan. This protects the existing Cool Breeze email configuration.
