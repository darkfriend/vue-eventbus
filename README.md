Vue eventBus
=====

How install
==

```
npm i vue-eventbus -S
```

How use
==

```js
import eventBus from 'vue-eventbus';

// send
let args = {param1: 'value1', param2: 'value2'};
eventBus.$emit('eventName', args);

// listen
eventBus.$on('eventName', (eventData) => {
    console.log(eventData);
});
```