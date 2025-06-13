# @infusedui/navigation

`@infusedui/navigation` exposes a small set of navigation helpers for React applications. It includes a context provider and a pagination component that can be consumed directly in your project.

## Installation

This package is hosted on GitHub Packages. Add a `.npmrc` file next to your `package.json` with the following line:

```npmrc
@infusedui:registry=https://npm.pkg.github.com
```

Then install the dependency:

```bash
npm install @infusedui/navigation
```

## Usage

### Provider

Wrap your application with `NavigationProvider` so that the navigation state is available everywhere:

```tsx
import { NavigationProvider } from '@infusedui/navigation'

function App() {
  return (
    <NavigationProvider>
      {/* the rest of your app */}
    </NavigationProvider>
  );
}
```

Inside your components you can access the context:

```tsx
import { useContext } from 'react'
import { NavigationContext } from '@infusedui/navigation'

const {
  appActualPage,
  setAppActualPage,
  appActualSubPage,
  setAppActualSubPage,
  appActualCategory,
  setAppActualCategory,
  appMenuVisibility,
  setAppMenuVisibility
} = useContext(NavigationContext);
```

### Pagination

Use the `Pagination` component to navigate between pages:

```tsx
import { Pagination } from '@infusedui/navigation'

<Pagination page={page} setPage={setPage} pages={totalPages} />
```

## Build from source

If you are working on the library itself, build the project with:

```bash
npm install
npm run build
```

This command compiles the TypeScript sources with `tsup` and outputs the files in the `dist` directory.
