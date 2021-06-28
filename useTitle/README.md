# @jooks/use-title

React Hook to update your document's title.

## Installation

#### yarn

`yarn add @jooks/use-title`

#### npm

`npm i @jooks/use-title`

## Usage

```js
import React from "react";
import useTitle from "@jooks/use-title";

function App() {
  useTitle("Welcome");
  return <h1>Welcome</h1>;
}
```

### Arguments

| Argument | Type   | Description                                | Required |
| -------- | ------ | ------------------------------------------ | -------- |
| title    | string | The title you want to use on your document | yes      |
