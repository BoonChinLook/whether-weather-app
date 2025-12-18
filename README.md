# Whether Weather App Overview
Whether Weather is a multi page static weather forecasting website built using Eleventy, HTML, CSS, Bulma, Nunjucks and deployment on Netlify, developed to utilize knowledge of web development.
All data in this project is hard-coded, and the project demonstrates templating, reusable components, multi-page navigation, user interface design, static deployment on Netlify and the use of Git version control.

## Features
- **Additional Weather Insights**: Highlights key statistics such as average temperature, highest and lowest temperatures, strongest winds, and rainiest day.
- **Bulma Framework**: Utilizing Bulma CSS for consistent, responsive design
- **City Dashboard**: Ability to switch between cities (Lisbon, Helsinki, Stockholm) to view their current weeks weather conditions.
- **Clean UI with Weather Icons**: Visual indicators for conditions (sun, rain, mist, etc.) enhance readability and user experience.
- **Contact Section**: Contact form with name, email, and message fields, along with additional company details (email and phone number).
- **Current Weather Overview**: Displays today’s weather with temperature, condition (e.g., misty, sunny), wind speed, and precipitation chance.
- **Hourly Forecast**: Provides detailed hourly weather details including temperature, wind, and chances of precipation, with weather icons for easy visualization.
- **Responsive Navigation**: Mobile-friendly navbar with hamburger menu
- **Weekly Forecast Table**: Shows a structured 7‑day table with max/min temperatures, wind speeds, and precipitation chances with a summary of the weather for the week.

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
├── contact.njk
├── preferences.njk
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
│       ├── additional-weather-message.njk
│       ├── city-breadcrumbs.njk
│       ├── dashboard-card.njk
│       ├── hourly-forecast-card.njk
│       ├── weather-table.njk
│       └── weather-today.njk
├── css/
│       └── style.css
│
├── js/
│       └── modal.js
│   
└── images/
    ├── cloudy.png
    ├── logo.png
    ├── misty.png
    ├── night-cloudy.png
    ├── night-rain.png
    └── rainy.png
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

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("js");
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
# Build the site once creating a  `_site/` directory.
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

## License

This project is open source and available for educational purposes.

## Credits

Developed by Boon Chin Look - 2025
This project is part of a Web Development project showcasing knowledge of Eleventy, HTML, CSS, Bulma, Nunjucks and deployment on Netlify.
All images and videos are used for educational purposes only.

## Acknowledgments

- [Eleventy](https://www.11ty.dev/) for the fast and flexible static site generator
- [Bulma CSS Framework](https://bulma.io/) for the responsive design system
- [Unsplash](https://unsplash.com/) for placeholder images
- [Flaticon](https://www.flaticon.com/) for weather icons

## References
Bulma: 
- Box: https://bulma.io/documentation/elements/box/
- Breadcrumb: https://bulma.io/documentation/components/breadcrumb/
- Button: https://bulma.io/documentation/elements/button/
- Card: https://bulma.io/documentation/components/card/
- Checkbox: https://bulma.io/documentation/form/checkbox/
- Color: https://bulma.io/documentation/helpers/color-helpers/
- Color Palette: https://bulma.io/documentation/helpers/palette-helpers/
- Create a Modal (Popup) with HTML/CSS and JavaScript (8:30): https://www.youtube.com/watch?v=XH5OW46yO8I&t=365s
- Dropdown: https://bulma.io/documentation/components/dropdown/
- Flexbox: https://bulma.io/documentation/helpers/flexbox-helpers/
- Footer: https://bulma.io/documentation/layout/footer/
- Form: https://bulma.io/documentation/form/general/
- Form Group: https://www.geeksforgeeks.org/css/bulma-form-group/
- Hero: https://bulma.io/documentation/layout/hero/ 
- Images: https://bulma.io/documentation/elements/image/
- Message: https://bulma.io/documentation/components/message/
- Modal: https://bulma.io/documentation/components/modal/
- Navbar: https://bulma.io/documentation/components/navbar/
- Radio Button: https://bulma.io/documentation/form/radio/
- Responsive Helpers: https://bulma.io/documentation/helpers/visibility-helpers/
- Select: https://bulma.io/documentation/form/select/
- Spacing: https://bulma.io/documentation/helpers/spacing-helpers/
- Table: https://bulma.io/documentation/elements/table/
- Tags: https://bulma.io/documentation/elements/tag/
- Textarea: https://bulma.io/documentation/form/textarea/
- Typography: https://bulma.io/documentation/helpers/typography-helpers/

Eleventy: 
- Navigation: https://www.11ty.dev/docs/plugins/navigation/

Nunjucks:
- https://mozilla.github.io/nunjucks/templating.html
- https://bryanlrobinson.com/blog/using-nunjucks-if-expressions-to-create-an-active-navigation-state-in-11ty/

Weather:
- Helsinki: https://www.msn.com/en-ie/weather/forecast/in-Helsinki,Uusimaa?loc=eyJsIjoiSGVsc2lua2kiLCJyIjoiVXVzaW1hYSIsInIyIjoiSGVsc2lua2kgc3ViLXJlZ2lvbiIsImMiOiJGaW5sYW5kIiwiaSI6IkZJIiwiZyI6ImVuLWllIiwieCI6IjI0Ljk0MzUiLCJ5IjoiNjAuMTY2NiJ9&weadegreetype=C
- Lisbon: https://www.weather25.com/europe/portugal/lisboa/lisbon?page=today
- Stockholm: https://www.accuweather.com/en/se/stockholm/314929/weather-forecast/314929

## Images used:
Unsplashed:
ht tps://unsplash.com/photos/white-concrete-mosque-near-body-of-water-bpDJvls-h-0
https://unsplash.com/photos/a-view-of-a-city-from-a-hill-EmYQOQ6f4Wg
https://unsplash.com/photos/scenery-of-a-body-of-water-beside-a-city-jxfe3orC4G8

Flaticon: 
https://www.flaticon.com/free-icon/clouds_704794?term=cloudy&page=1&position=10&origin=tag&related_id=704794
https://www.flaticon.com/free-icon/foog_1163589?term=weather&related_id=1163589
https://www.flaticon.com/free-icon/cloudy-night_4834498?term=moon+cloud&related_id=4834498
https://www.flaticon.com/free-icon/rain_4834431?term=moon+cloud&related_id=4834431
https://www.flaticon.com/free-icon/rainy-day_4723914?term=weather&related_id=4723914
