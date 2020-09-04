Vue eventBus
=====

Easy eventbus for vue.js.

## How install
```bash
npm i vue_eventbus -S
```

## How use

###### global init
```javascript
import Vue from 'vue';
import eventBus from 'vue_eventbus';

Vue.use(eventBus);

new Vue({
    mounted() {
        // listen event
        this.eventBus.$on('eventName', (eventData) => {
            console.log(eventData); // {param1: 'value1', param2: 'value2'}
        });

        // send event with args
        let args = {param1: 'value1', param2: 'value2'};
        this.eventBus.$emit('eventName', args);
    }
});
```
_The use `eventBus` component options._
```javascript
new Vue({
  eventBus: {
    eventName(eventData){
       console.log(eventData)    
    }
  }  
})
```

---

###### local init
```javascript
import eventBus from 'vue_eventbus';

// send
let args = {param1: 'value1', param2: 'value2'};
eventBus.$emit('eventName', args);

// listen
eventBus.$on('eventName', (eventData) => {
    console.log(eventData);
});
```

## Methods
Method              | Params            | Description                                                                | Docs
------------------- | ----------------- | -------------------------------------------------------------------------- | ---------------------------------------------
`eventBus.$emit`  | `event, payload`  | Emit the event with the given payload.                                     | [vm.$emit](https://vuejs.org/v2/api/#vm-emit)
`eventBus.$on`    | `event, callback` | Listen for the event with the given callback.                              | [vm.$on](https://vuejs.org/v2/api/#vm-on)
`eventBus.listen` | `event, callback` | Listen for the event with the given callback. _Alias for `vm.$events.$on`_ | [vm.$on](https://vuejs.org/v2/api/#vm-on)
`eventBus.$off`   | `event, callback` | Remove event listener(s) for the event                                     | [vm.$off](https://vuejs.org/v2/api/#vm-off)
`eventBus.$once`   | `event, callback` | Listen for a custom event, but only once                                      | [vm.$once](https://vuejs.org/v2/api/#vm-once)
