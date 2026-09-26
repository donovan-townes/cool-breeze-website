# Updating the Cool Breeze Records website

This is the repeatable process for Donovan or any coding agent making a site update. The GitHub `main` branch deploys to Vercel, so pushing to `main` is the publication step.

## Before every update

- [ ] Open this folder in a terminal.
- [ ] Run `git status` and make sure you understand every existing change. Do not erase work that is already there.
- [ ] Run `git pull --ff-only` to start from the current GitHub version.
- [ ] Run `npm ci` if `node_modules` is missing or `package-lock.json` changed.

## Seasonal era change

- [ ] Open `data/site.ts`.
- [ ] Change `season.name`, `season.period`, and `season.announcement`.
- [ ] Open the `:root` block at the top of `app/globals.css` and replace the seasonal color values with the approved palette.
- [ ] If the visual motif changes, update `components/autumn-leaves.tsx` or replace it with the next season’s motif component.
- [ ] Search for the old era name with `rg "Fall Breeze"` and review every result before replacing it.

## New release or catalog correction

- [ ] Put square cover art in `public/releases` using a short lowercase filename such as `artist-release-title.webp`.
- [ ] Add or edit the release in `data/releases.ts`.
- [ ] Keep each `slug` short, lowercase, and hyphenated. The permanent page will be `/listen/[slug]`.
- [ ] Confirm the title, artist styling, release date, catalog number, artwork path, and listening link.
- [ ] Move the release to the top of the list only when it should become the featured release.

## Newsletter, links, and contact details

- [ ] Newsletter form IDs and social profile URLs live in `data/site.ts`.
- [ ] The `/go` destination buttons live in `app/go/page.tsx`.
- [ ] Do not change the Kit form IDs unless a replacement Kit form has already been created and tested.
- [ ] Do not change Namecheap DNS for an ordinary content or design update.

## Check the work before publishing

- [ ] Run `npm run typecheck`.
- [ ] Run `npm run build`.
- [ ] Run `npm run dev` and check `/`, `/catalog`, `/go`, `/privacy`, and at least one `/listen/[slug]` page on desktop and mobile widths.
- [ ] Test the featured listen button, newsletter forms, social links, and any new artwork.
- [ ] Run `git status` and confirm only the intended files changed.

## Publish through GitHub and Vercel

- [ ] Run `git status`, then stage the exact files you meant to change with `git add path/to/file`. Do not use a broad add command when unrelated work is present.
- [ ] Commit with a plain description, for example `git commit -m "Launch Fall Breeze era"`.
- [ ] Run `git push origin main` only after the update is approved for the live site.
- [ ] Watch the new deployment in the Vercel project and wait for it to report success.
- [ ] Open `https://coolbreezerecords.com` in a fresh/private window and repeat the critical checks.

## If something goes wrong

Do not delete the repository or change the domain. Use Vercel’s deployment history to restore the previous successful deployment, or revert the exact Git commit and push the revert. Record what failed before trying another change.

## Agent handoff note

Agents should read `AGENTS.md` and this file first, preserve all unrelated work, run the required checks, and report whether changes are only local or have been pushed. Never push, alter DNS, or replace newsletter forms without Donovan’s explicit instruction.
