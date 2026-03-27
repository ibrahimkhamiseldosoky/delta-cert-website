# Delta Cert Website

## Color Scheme

- **Primary Color**: `#0e78d4` (Blue)
- **Secondary Color**: `#ffffff` (White)
- **Primary Dark**: `#0a5fa0`
- **Primary Light**: `#3a95e0`

## Project Structure

```
deltacert.com/
├── index.html                      # Homepage
├── css/
│   └── style.css                   # Main stylesheet
├── js/
│   └── main.js                     # Main JavaScript
├── courses/
│   └── index.html                  # Training courses page
├── faq/
│   └── index.html                  # FAQ page
├── certified-company-search/
│   └── index.html                  # Certificate verification
├── personal-certifications/
│   └── index.html                  # Personal certifications
└── README.md                        # This file
```

## Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Modern UI**: Clean, professional design with smooth animations
- **Interactive Elements**: FAQ accordion, search functionality, mobile menu
- **Certificate Verification**: Company certificate verification system
- **Training Courses**: Comprehensive course listings
- **Personal Certifications**: Professional certification programs

## Pages

1. **Homepage** (`index.html`)
   - Hero section with call-to-action
   - Services overview
   - Why choose us section
   - Contact CTA

2. **Training Courses** (`courses/index.html`)
   - Course listings with details
   - Course categories
   - Training program information

3. **FAQ** (`faq/index.html`)
   - Accordion-style FAQ
   - Category filtering
   - Comprehensive Q&A

4. **Certificate Verification** (`certified-company-search/index.html`)
   - Certificate search form
   - Verification results
   - Company certificate lookup

5. **Personal Certifications** (`personal-certifications/index.html`)
   - Professional certification programs
   - Certification details
   - Career advancement information

## Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with CSS variables, flexbox, and grid
- **JavaScript**: Vanilla JavaScript for interactivity
- **Font Awesome**: Icons
- **Google Fonts**: Cairo and Roboto fonts

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Customization

### Changing Colors

Edit the CSS variables in `css/style.css`:

```css
:root {
    --primary-color: #0e78d4;
    --primary-dark: #0a5fa0;
    --primary-light: #3a95e0;
    /* ... */
}
```

### Adding New Pages

1. Create a new HTML file in the appropriate directory
2. Copy the header and footer structure from existing pages
3. Update navigation links as needed
4. Add page-specific styles if required

## Development

To run locally:

1. Clone or download the project
2. Open `index.html` in a web browser
3. For development, use a local server (e.g., `python -m http.server` or `npx serve`)

## Notes

- This is a static website (no backend required)
- Certificate verification is currently simulated (would need backend integration)
- All forms are client-side only (would need backend for submission)
- Images are placeholder (replace with actual images)

## License

© 2026 Delta Cert. All rights reserved.
