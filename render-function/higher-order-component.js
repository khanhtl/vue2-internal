function fetchAvatar(cb) {
setTimeout(() => {
    cb('https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/vue/vue.png')
}, 500);
}

const Avatar = {
    props: ['src'],
    template: '<img :src="src"></img>'
}

function withAvatarURL(InnerComponent) {
    return {
        data() {
            return {
                url: 'https://placehold.co/288x288'
            }
        },
        created() {
            fetchAvatar((src) => this.url= src)
        },
        render(h) {
            return h(InnerComponent, {
                props: {
                    src: this.url
                }
            })
        }
    }
}

const SmartAvatar = withAvatarURL(Avatar);
new Vue({
    el: "#app",
    components: {SmartAvatar}
});