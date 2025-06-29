🕒 Clock
Clock is a modern, responsive web-based clock built using HTML, CSS, and JavaScript. It displays the local time with smooth, animated transitions and offers a clean design that works on both desktop and mobile devices.

🚀 Features
Real-time updating: Displays current hours, minutes, and seconds with smooth tick animations.

Responsive design: Adapts elegantly to various screen sizes using flexible CSS and layout.

Customizable styling: Easily tweak colors, fonts, and layouts via CSS variables.

Lightweight & dependency-free: Pure vanilla JavaScript—no libraries or frameworks required.

⚙️ Tech Stack
HTML5 for semantic structure

CSS3 (with custom properties) for styling & animations

JavaScript for timekeeping and DOM manipulation

📁 Project Structure
graphql
Copy
Edit
/
├── index.html        # Main HTML entry point
├── style.css         # Styling, layout, and animations
└── script.js         # Clock logic and time updates
🎨 Usage
Clone the repo:

bash
Copy
Edit
git clone https://github.com/PranavDoke/clock.git
cd clock
Open in your browser:
Simply open index.html in any modern web browser.

Customize styling:
Edit CSS variables in :root (e.g., --bg-color, --hand-color) to refresh the look dynamically.

Embed in your site:
Copy the HTML clock container and append the relevant CSS and JS for seamless integration.

🛠️ How It Works
script.js

Initializes clock hands and updates them every second using setInterval.

Calculates rotation angles based on current time:

Hours → 30° per hour + smooth minute offset

Minutes → 6° per minute

Seconds → 6° per second

Applies CSS transforms directly to the SVG or HTML elements for real-time display.

CSS Animations

Smooth transitions via transition on rotation properties.

Responsive sizing using relative units (vw, vh, %).

✅ Customization Tips
Change colors & theme: Modify CSS variables at the top of style.css.

Adjust size: Use CSS to set width/height of the clock container or wrap it as needed.

Add analog/digital toggle: Enhance script.js to switch between analog visuals and a digital readout.

🧩 Potential Enhancements
Add support for multiple time zones.

Provide digital clock mode (HH:MM:SS).

Offer dark/light theme switching.

Optimize for battery efficiency (e.g., pausing animation when tab inactive).
