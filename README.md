# Our Lady of Assumption Church — Ramadurgam

A responsive parish website for **Our Lady of Assumption Church, Ramadurgam, Andhra Pradesh**, with parish information, Holy Mass timings, a historical timeline, recurring feast dates, church photographs and contact links.

## Run locally

Requirements: Node.js and npm.

```bash
npm install
npm run dev
```

Create a production build with:

```bash
npm run build
npm run preview
```

## Built with

- React 18
- Vite 6
- Lucide React icons
- CSS responsive layouts and reduced-motion support

## Parish content and verification

The site uses parish details and historical notes already present in the project. Historical dates and former-priest names are retained from the supplied list and should be checked against parish or diocesan records before being treated as definitive. Feast dates are recurring calendar dates, not confirmed upcoming event announcements. Mass times can change; visitors are encouraged to contact the parish before travelling.

## Church photographs

The homepage carousel and gallery use the designated assets in `public/`:

- `public/church-tower.jpg` — first carousel slide
- `public/church-hill.jpg`
- `public/church-view.jpg`

The original image files at the repository root are preserved. Historical images remain in `public/history/` and are not used in the homepage carousel or main church gallery.

## Accessibility and responsive design

- Semantic page sections and labelled navigation
- Keyboard-accessible menu and carousel controls
- Visible focus indicators
- Searchable former-priest list
- Reduced-motion-aware carousel behavior
- Keyboard-accessible photo lightbox with Escape-to-close
- Responsive events and pastoral-information sections
- Mobile, tablet and desktop layouts

## Items to verify

- Confirm current Holy Mass timings and parish contact number.
- Verify historical timeline entries and former-priest name spellings.
- Add official parish event announcements only when confirmed.
- Confirm that the deployed site reflects the latest `main` commit.
- Confirm whether the existing parish archive URL remains authoritative.

## License

No license has been declared for this repository. Please contact the repository owner before reusing its content or photographs.
