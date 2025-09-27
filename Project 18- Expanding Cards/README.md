# Expanding Cards

A sleek, animated image gallery where clicking a panel expands it to reveal the full image and title. This project is part of the "50 Projects in 50 Days" challenge and showcases modern CSS techniques for a dynamic user interface.



## ✨ Features

- **Interactive UI:** Click on any panel to expand it, while the others gracefully collapse.
- **Smooth Animations:** Fluid transitions powered by CSS `flex`, `transform`, and `opacity`.
- **Dark & Stylish Theme:** A modern, tech-inspired dark mode aesthetic with a subtle overlay effect.
- **Responsive Design:** Adapts to smaller screens, hiding non-essential panels for a clean mobile experience.
- **Pure Vanilla JS:** Lightweight and dependency-free, with clean and simple event handling.
- **CSS Custom Properties:** Easily customizable theme (colors, timings, etc.) through CSS variables.

## 🛠️ Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

You just need a modern web browser.

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/expanding-cards.git
   ```
2. Navigate to the project directory:
   ```sh
   cd expanding-cards
   ```
3. Open `index.html` in your browser.

## 🎨 Customization

This project is designed to be easily customizable.

### Changing Images and Text

Modify the `background-image` URL and the text within the `<h3>` tags for each `.panel` div in `index.html`.

```html
<div class="panel" style="background-image: url('https://your-image-url.jpg')">
  <h3>Your Awesome Title</h3>
</div>
```

### Adjusting Styles & Animations

Easily tweak the look, feel, and animation timing by changing the CSS Custom Properties (variables) at the top of `style.css`.

```css
:root {
  --panel-transition-duration: 0.7s;
  --text-transition-delay: 0.5s;
  --background-color: #1a1a1a;
  --panel-border-radius: 25px;
  --overlay-color: rgba(0, 0, 0, 0.4);
}
```

## 📂 File Structure

```
├── index.html    # The main HTML structure
├── style.css     # All styles, animations, and the dark theme
└── script.js     # JavaScript for handling click events
```