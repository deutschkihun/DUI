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


## Comming soon

1. [Modal](#modal)
1. [Card](#card)

