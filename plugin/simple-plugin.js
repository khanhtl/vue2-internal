export const Vue = require('vue')

const RulesPlugin = {
  install(Vue) {
    Vue.mixin({
        created() {
        if (this.$options?.rules) {
          Object.keys(this.$options.rules).forEach((key) => {
            const rule = this.$options.rules[key];
            this.$watch(key, (newValue) => {
              const result = rule.validate(newValue);
              if (!result) {
                console.log(rule.message);
              }
            });
          });
        }
      },
    });
  },
};
Vue.use(RulesPlugin);

const vm = new Vue({
  el: "#app",
  data: { count: 3 },
  rules: {
    count: {
      validate: (value) => value > 1,
      message: "count must be greater than one",
    },
  },
});
vm.count = 0