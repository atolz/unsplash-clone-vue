# Frontend Test Cowrywise

[Unsplash clone](https://unsplash-clone-vue.vercel.app/) built with Vite + Vue 3(Composition API), SCSS,

```bash
npm run dev
```

# Features

- search photos +(loading, result, clear, research, image overlay for readability)
- grid to present photos from the API, the first row containing the photos overlap the backdrop behind the search bar.
- modal view (small downloaded image shown as fallback before higher quality one is downloaded with sensible accessibility)
- mobile responsive
- Load more images
- base font size is 62.5% (1rem = 10px) for sizing workflow

# Algorithm

- getMinHeightColumnDistribution: Algorithm that takes in an array of photos and distributes into columns sections in such a way that the height difference is minimal visually.
  This uses the aspect ratio (widht/height) from the unsplash api for calculation

# Composables

`useFetch()`
`useMedia()`
`useInView()`

# Libraries and APIs

- Radix UI: handles the accessible modal.
- Axios: Data fetching
- Intersection Observer

# Font

Googles Plus+Jakarta+Sans font. Closest match to the ui that could be found

# Considerations, observations, todos

- An easier way to handle the column layouts would be to implement a custom masonry layout as css masonry layout is not widely supported
