# @deutschkihun/ui

ui template structured by react,typescript. designed by css and scss. bundled by rollup

### Install the library

```
npm install @deutschkihun/ui
```



## Components Tutorial 

1. [Button](#button)
1. [Pagination](#pagination)

## Button

@deutschkihun/ui provides button component. This component has following options 

- size: 'sm' | 'md' | 'lg' (no size option will redirect to default setting)
- variant: 'success' | 'error' | 'warning' (no variant option will redirect to default setting)
- label: [write your button text here]
- disabled: false | true (default=false)
- onClick: onClick event (try to use this with react hook or callback function)

example 

```jsx
import { Button } from '@deutschkihun/ui';

const MyApp = () => {
  return (
    <div>
      <Button disabled={true} size='sm' variant='warning' label='click me' onClick={() => alert("hello world")}  />
    </div>
  )
}
```


## Pagination

@deutschkihun/ui provides pagination component. This component has following options 

- total: total number of content that should be handled by pagination option
- limit: limit of the content in one page
- page: current page
- setPage: set here to change selected page (use here with react hook)

example: item presentation from backend fetching by pagination

```jsx
import React, { useState } from 'react'
import { Button } from '@deutschkihun/ui';

const MyApp = () => {
    const [limit, setLimit] = useState(8)
    const [page, setPage] = useState(1)
    const [items, setItems] = useState([])

    // fetching data from backend
    const getAllProducts = async () => {
        await axios.get('/api/v1/products').then(response => {
            if (response.data.length > 0) setItems(response.data.d3react)
        })
    }

    useEffect(() => {
        getAllProducts();
    }, [])

    return (
        <div>
            {/* add your rendering logic of items */}
            <Pagination total={items.length} limit={limit} page={page} setPage={setPage} />
        </div>
    )
}
```

## Comming soon

1. [Modal](#modal)
1. [Card](#card)

