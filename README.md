# Unsplash Clone

[Unsplash clone](https://unsplash-clone-vue.vercel.app/) built with Vite, Vue 3 (Composition API), and SCSS.

### Run Locally

To start the app in development mode, use:

```bash
npm run dev
```

### Features

- **Photo Search:** Includes router state search, loading indicators, result clearing, re-search, and an overlay effect for better readability.

- **Infinite Scrolling:** Loads additional images as you scroll to the bottom.

- **Photo Grid Layout:** Displays photos with a custom grid where the first row overlaps the search bar backdrop.

- **Modal View:** Opens photos in a modal with a low-resolution preview that upgrades to a higher-quality image once loaded (optimized for accessibility).

- **Responsive Design:** Fully responsive on mobile, with adaptive behaviors using JavaScript and CSS.

- **Font Size Optimization:** Base font size set to 62.5% (1rem = 10px) for consistent sizing workflow.

### Algorithm

- `getMinHeightDistribution`: Distributes photos into columns to minimize height differences visually, using aspect ratio data from the Unsplash API for calculation.</br>
<div align="center">
Example:</div>
<p align="center">
  <img src="https://github.com/atolz/Unsplash-Clone-Vue/blob/main/public/shot-1.png?raw=true" height="350" alt="default layout" title="From this">
  <img src="https://github.com/atolz/Unsplash-Clone-Vue/blob/main/public/shot-2.png?raw=true" height="350" alt="optimized layout after algorith" title="To this">
</p>

### UI/UX

- Overlay effect for better readability
- Clear search
- Blur hash downloading images
- Loading state while search
- Empty state for no data
- Load more on scroll with indicator
- Auto select search on research

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
- BlurHash hint
- Download image
- Custom Error and empty states
- API Rate Limitation: Unsplash demo apps are restricted to 50 requests per hour. Upon reaching this limit, you may encounter repeated images or an empty state.
