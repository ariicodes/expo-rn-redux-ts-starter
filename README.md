# Expo RN Redux TS Starter (Template Repo)

A minimal, batteries-included starter for **React Native (Expo) + TypeScript + Redux Toolkit** with:
- **Expo Router** (file-based navigation)
- **Redux Toolkit** store + example slice
- **AsyncStorage** hydrate/persist bridge
- **SecureStore** helpers (for tokens)
- **StyleSheet + tokens** (colors/spacing/radii)
- **fetch helper** with simple retry

## Get Started (from this template)
1. Click **Use this template** on GitHub → create your new repo.
2. Clone it, install deps, run:

   ```bash
   npm i
   npx expo start
   ```

## What’s inside
-	app/_layout.tsx — Router layout + Redux Provider + simple persistence bridge
-	app/index.tsx — Example list screen
-	src/store.ts — RTK configureStore
- src/slices/itemsSlice.ts — Example slice (add/remove/setAll)
-	src/lib/* — AsyncStorage, SecureStore, fetch helper
-	src/ui/* — tokens + styles

### Production notes
-	Replace the bridge with redux-persist if you prefer.
-	Use SecureStore for secrets (never AsyncStorage).
-	For multi-screen apps, add routes in app/.
-	Publish a permanent demo link:

    ```bash
    npx expo publish
    ```

### Scripts
-	npm run start / ios / android / web
-	npm run typecheck — TypeScript noEmit

(Optionally add `typecheck` to **package.json**):
  ```json
  "scripts": {
    "start": "expo start",
    "ios": "expo start --ios",
    "android": "expo start --android",
    "web": "expo start --web",
    "typecheck": "tsc --noEmit"
  }
  ```

### License

MIT