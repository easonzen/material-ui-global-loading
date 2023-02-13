# material-ui-global-loading

> Confirming user choice is a good thing to do, it should also be easy to do.

This package provides simple global loading built on top of [@mui/material](https://mui.com/)
and straightforward to use thanks to React Hooks.

## Installation

```sh
npm install --save material-ui-global-loading
```

## Usage

Wrap your app inside the `GlobalLoadingProvider` component.\
_Note: If you're using Material UI `ThemeProvider`, make sure `GlobalLoadingProvider` is a child of it._

```js
import React from "react";
import { GlobalLoadingProvider } from "material-ui-global-loading";

const App = () => {
  return <GlobalLoadingProvider>{/* ... */}</GlobalLoadingProvider>;
};

export default App;
```

Call the `useGlobalLoading` hook wherever you need the `openLoading`,`closeLoading` function.\
_Note: A component calling `useGlobalLoading` must be a child of `GlobalLoadingProvider`._

```js
import React from "react";
import Button from "@mui/material/Button";
import { useGlobalLoading } from "material-ui-global-loading";

const Item = () => {
  const { openLoading, closeLoading } = useGlobalLoading();

  const handleClick = async() => {
    openLoading();

    try {
        {/* ... */}
    } catch(error) {
        {/* ... */}
    }

    closeLoading();
  };

  return <Button onClick={handleClick}>Click</Button>;
};

export default Item;
```
