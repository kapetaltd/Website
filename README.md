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

## Deployment

Pushes to `main` deploy to production on Vercel; other branches and pull requests get preview deployments.
`vercel.json` rewrites routes such as `/privacy` to the single-page app.
