
const Foo =  {
    render: (h) => h('div', 'foo')
}

const Bar =  {
    render: (h) => h('div', 'bar')
}

Vue.component('dynamic', {
    props: ['ok'],
    render(h) {
        return this.ok ? h(Foo) : h(Bar)
    }
})

const vm = new Vue({
    el: "#app",
    data: {
    ok: true
  }
});