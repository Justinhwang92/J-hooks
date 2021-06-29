# @j-hooks/use-title

React Hook to update your document's title.

## Installation

#### yarn

`yarn add @j-hooks/use-title`

#### npm

`npm i @j-hooks/use-title`

## Usage

```js
import React from "react";
import useTitle from "@j-hooks/use-title";

function App() {
  useTitle("Welcome");
  // const titleUpdater = useTitle("Loading...");
  // setTimeout(()=>titleUpdater("Home"), 5000);
  return <h1>Welcome</h1>;
}
```

### Arguments

| Argument | Type   | Description                                | Required |
| -------- | ------ | ------------------------------------------ | -------- |
| title    | string | The title you want to use on your document | yes      |
