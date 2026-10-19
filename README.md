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

The home-page carousel and gallery use the existing root-level image files:

- `public/church-hill.jpg` (or root-served `/church-hill.jpg`)
- `public/church-tower.jpg` (or root-served `/church-tower.jpg`)
- `public/church-view.jpg` (or root-served `/church-view.jpg`)

Keep these files at the project root if the current Vite setup serves them there, or move them to `public/` and keep the same URL paths.

## Accessibility and responsive design

- Semantic page sections and labelled navigation
- Keyboard-accessible menu and carousel controls
- Visible focus indicators
- Searchable former-priest list
- Reduced-motion preference support
- Mobile, tablet and desktop layouts

## Items to verify

- Confirm current Holy Mass timings and parish contact number.
- Verify historical timeline entries and former-priest name spellings.
- Add official parish event announcements only when confirmed.
- Confirm whether the existing parish archive URL remains authoritative.

## License

No license has been declared for this repository. Please contact the repository owner before reusing its content or photographs.
