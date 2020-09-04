import Vue from 'vue';

const eventBus = new Vue();

export default {
    install(Vue) {
        Object.defineProperty(Vue.prototype, 'eventBus', {
            get() {
                return eventBus;
            }
        });
        Vue.mixin({
            beforeCreate() {
                if (typeof this.$options.eventBus !== 'object') return;
                let eventMap = {};
                for (let key in this.$options.eventBus) {
                    eventMap[key] = this.$options.eventBus[key].bind(this);
                }
                this.$once('hook:beforeMount', () => {
                    for (let key in eventMap) {
                        eventBus.$on(key, eventMap[key]);
                    }
                });
                this.$once('hook:beforeDestroy', () => {
                    for (let key in eventMap) {
                        eventBus.$off(key, eventMap[key]);
                    }
                    eventMap = null;
                });
            },
            data: () => {
                return {
                    eventBus: eventBus
                };
            },
        });
    },
};

export {eventBus};