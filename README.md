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

- **Blur Hash:** Displays a friendly blur placeholder for images before download completion.

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
- Blur hash downloading images
- Auto focus search
- Loading state while search
- Empty state for no data
- Load more on scroll with indicator
- Auto select search on research
- Clear search

### Composables

`useFetch()`
`useMedia()`
`useInView()`

### Libraries and APIs

- Radix UI: handles the accessible modal
- Axios: Data fetching
- Intersection Observer: Enables efficient scroll-based image loading
- JS blur-hash: for better UX

### Font

Uses Google's Plus Jakarta Sans, chosen for its close match to the intended UI aesthetic.

### Notes & Future Improvements

- A custom third-party JS masonry layout can better handle column arrangements. The CSS masonry layout, while straightforward, currently lacks broad support
- BlurHash hint (Done)
- Download image
- Custom Error and empty states
- API Rate Limitation: Unsplash demo apps are restricted to 50 requests per hour. Upon reaching this limit, you may encounter repeated images or an empty state
