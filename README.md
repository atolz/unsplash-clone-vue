# Unsplash Clone

[Unsplash clone](https://unsplash-clone-vue.vercel.app/) built with Vite, Vue 3 (Composition API), and SCSS.

### Run Locally

To start the app in development mode, use:

```bash
npm run dev
```

### Features

- Photo Search: Includes router state search, loading indicators, result clearing, re-search, and an overlay effect for better readability.

- **Infinite Scrolling:** Loads additional images as you scroll to the bottom.

- Photo Grid Layout: Displays photos with a custom grid where the first row overlaps the search bar backdrop.

- Modal View: Opens photos in a modal with a low-resolution preview that upgrades to a higher-quality image once loaded (optimized for accessibility).

- Responsive Design: Fully responsive on mobile, with adaptive behaviors using JavaScript and CSS.

- Font Size Optimization: Base font size set to 62.5% (1rem = 10px) for consistent sizing workflow.

### Algorithm

- `getMinHeightDistribution`: Distributes photos into columns to minimize height differences visually, using aspect ratio data from the Unsplash API for calculation.</br>
<div style="text-align: center;">
Example:</div> ![App Screenshot](https://github.com/atolz/Unsplash-Clone-Vue/blob/main/shot-1.png?raw=true) to ![App Screenshot 2](https://github.com/atolz/Unsplash-Clone-Vue/blob/main/shot-2.png?raw=true)

### Composables

`useFetch()`
`useMedia()`
`useInView()`

### Libraries and APIs

- Radix UI: handles the accessible modal.
- Axios: Data fetching
- Intersection Observer: Enables efficient scroll-based image loading.

### Font

Uses Google's Plus Jakarta Sans, chosen for its close match to the intended UI aesthetic.

### Notes & Future Improvements

- A custom masonry layout could better handle column arrangements, though CSS masonry layout lacks broad support currently.
- Download
- Custom Error and empty states
