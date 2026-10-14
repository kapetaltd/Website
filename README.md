# kapetalabs.com

Corporate website for Kapeta Labs. Built with React, Vite, TypeScript and Tailwind CSS.

## Develop

```bash
npm install
npm run dev      # local dev server
npm run build    # type-check and production build to dist/
npm run preview  # serve the production build
```

## Editing content

- `src/content/site.ts` holds the contact email (currently a placeholder), domain and year.
- `src/content/products.ts` holds the product portfolio. Add a product here and it appears in every section.
- `src/assets/products/` holds product logos.
- `src/components/Wordmark.tsx` holds the text wordmark; swap in the final logo asset there.
- `src/pages/LegalPlaceholder.tsx` renders `/privacy` and `/terms` until the legal text is ready.
- `/shedlock` and `/shedlock/privacy` are the Shedlock game page and its privacy policy
  (`src/pages/Shedlock*.tsx`, details in `src/content/shedlock.ts`). The privacy policy URL is
  used by Google Play and AdMob, so keep it stable.
- `/stackecho/privacy` is the Stack Echo privacy policy (`src/pages/StackEchoPrivacy.tsx`, details in
  `src/content/stackecho.ts`). It is used by Google Play, so keep the URL stable.
- `public/app-ads.txt` authorises Kapeta's AdMob account to sell ads in Kapeta's apps. It must
  stay at `https://kapetalabs.com/app-ads.txt`.

## Deployment

Pushes to `main` deploy to production on Vercel; other branches and pull requests get preview deployments.
`vercel.json` rewrites routes such as `/privacy` to the single-page app.
