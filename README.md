# Whether Weather App Overview
Whether Weather is a multi page static weather forecasting website built using Eleventy, HTML, CSS, Bulma, Nunjucks and deployment on Netlify, developed to utilize knowledge of web development.
All data in this project is hard-coded, and the project demonstrates templating, reusable components, multi-page navigation, user interface design, static deployment on Netlify and the use of Git version control.

## Tech Stack
- **Eleventy (11ty)**: Static site generator for building the site
- **HTML5**: Semantic markup
 **CSS**: [Bulma CSS Framework](https://bulma.io/) v1.0.4 (via CDN)
- **JavaScript**: Vanilla JS for interactive components
- **Nunjucks**: Templating language
- **Netlify**: Deployment hosting
- **Images**: Unsplash for placeholder images

## Project Structure
```bash
whether-weather-app/
│
├── eleventy.js
├── .gitignore
├── city-helsinki.njk
├── city-lisbon.njk
├── city-stockholm.njk
├── preferences
├── index.njk
├── package-lock.json
├── package.json
├── README.md
│
├── _includes/
│   ├── footer.njk    
│   ├── header.njk
│   ├── layout.njk
│   ├── nav.njk  
│   └── components/   
│       ├── city-breadcrumbs.njk
│       ├── dashboard-card.njk
│       ├── hourly-forecast-card.njk
│       └── weather-table.njk
│   
└── images/
    ├── cloudy.png
    ├── logo.png
    ├── misty.png
    ├── night-cloudy.png
    ├── night-rain.png
    ├── rainy-sunny.png
    ├── rainy.png
    └── sunny.png
```

## Getting Started

### Prerequisites

- **Node.js** (v22 or higher) and npm
- A modern web browser (Chrome, Firefox, Safari, Edge)

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/BoonChinLook/whether-weather-app.git
cd whether-weather-app
```

2. **Install dependencies**

Install the project dependencies:
```bash
npm install
```

3. **Run the development server**

If you have eleventy installed

```bash
eleventy --serve
```
You could also use npx.

```bash
npx @11ty/eleventy --serve
```

4. **Access the application**
   
   Navigate to `http://localhost:8080` in your browser (Eleventy's default port)
   
   The development server will:
   - Watch for file changes
   - Automatically rebuild the site
   - Live reload the browser


## Development

### Eleventy Configuration

The `.eleventy.js` file configures how Eleventy processes your site and enables the Navigation Plugin.

```javascript
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("images");  
  eleventyConfig.addPlugin(eleventyNavigationPlugin);
};
```

This configuration ensures that CSS, JavaScript, and images are copied directly to the `_site/` output directory without processing.

### Making Changes

1. **Edit source files** - Make changes to `index.html`, `images/`, etc.
2. **Eleventy watches and rebuilds** - If the dev server is running, changes are detected automatically
3. **View changes** - Browser automatically reloads with updates
4. **Built files** - Generated output appears in `_site/` directory

**Note:** Never edit files directly in the `_site/` directory - they will be overwritten on the next build.

### Available Commands

```bash
# Build the site once
npx @11ty/eleventy

# Build and serve with live reload
npx @11ty/eleventy --serve

# Build with detailed output for debugging
npx @11ty/eleventy --quiet=false
```

### Browser Compatibility

- Modern browsers (ES6+ support)
- Responsive design for mobile, tablet, and desktop

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/[name-of-feature-branch]`)
3. Commit your changes (`git commit -m 'Add some [name-of-feature]'`)
4. Push to the branch (`git push origin feature/[name-of-feature-branch]`)
5. Open a Pull Request

## References







## Images used:









## License

This project is open source and available for educational purposes.

## Credits

Developed by Boon Chin Look - 2025
This project is part of a Web Development project showcasing knowledge of Eleventy, HTML, CSS, Bulma, Nunjucks and deployment on Netlify.
All images and videos are used for educational purposes only.