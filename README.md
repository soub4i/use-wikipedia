# 🧰 useWikipedia: React Hook for query wikipedia API
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

A hook to help you to query a [wikipedia search API](https://www.mediawiki.org/wiki/API:Search)


### install

```sh
yarn add @soubai/use-wikipedia
```

### Usage


```js

import useWikipedia from '@soubai/use-wikipedia';

function MyComponent() {
  const { data , error} = useDocumentTitle('Morocco');
  return <div/>;
}

```

* OR

```js

import useWikipedia from '@soubai/use-wikipedia';
const [error, setError] = useState(null);
const [data, setData] = useState([]);
const [q, setQ] = useState("");
const { query } = useWikipedia();

 const search = async () => {
    const { data, error } = await query(q)
    setData(data)
    setError(error)
  }

```
