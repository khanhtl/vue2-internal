// const Vue = require('vue')

const validationPlugin = {
  install(Vue) {
    Vue.mixin({
      // code validation
      computed: {
        $v() {
          let valid = true;
          const errors = [];
          const validations = this.$options.validations || {}
          Object.keys(validations).forEach(field => {
            // array rule of field need validate
            let rules = validations[field];
            let value = this[field]
            valid = rules.every(rule => {
              let isValid = rule.validate(value);
              if (!isValid) {
                errors.push({
                  field,
                  message: rule.message
                })
              }
              return isValid;
            });
          });
          return { valid, errors }
        }
      }
    });
  },
};
Vue.use(validationPlugin);
const validateEmailRegex = /^\S+@\S+\.\S+$/;
new Vue({
  el: "#app",
  data: { input: ""},
  validations: {
    input: [
      {
        validate: (value) => !!value,
        message: "input is required!",
      },
      {
        validate: (value) => validateEmailRegex.test(value),
        message: "input must be email!",
      }
    ],
  },
});