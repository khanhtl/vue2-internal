
Vue.component('dynamic', {
    props: ['tags'],
    render(h) {
        return h('div', this.tags.map((tag, i) => h(tag, i)))
    }
})

const vm = new Vue({
  el: "#app",
});