// import store from '@/store'

const { body } = document
const WIDTH = 992 // refer to Bootstrap's responsive design

export default {
  watch: {
    $route(route) {
      if (this.device === 'mobile' && this.sidebar.opened) {
        // store.dispatch('app/closeSideBar', { withoutAnimation: false })
        this.onChangeValue({ sidebar: { opened: false, withoutAnimation: false }})
      }
    }
  },
  beforeMount() {
    window.addEventListener('resize', this.$_resizeHandler)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.$_resizeHandler)
  },
  mounted() {
    const isMobile = this.$_isMobile()
    if (isMobile && !this.autoSize) {
      // store.dispatch('app/toggleDevice', 'mobile')
      // store.dispatch('app/closeSideBar', { withoutAnimation: true })
      this.onChangeValue({
        sidebar: { opened: false, withoutAnimation: true }
        // device: 'mobile',
      })
    }
  },
  methods: {
    // use $_ for mixins properties
    // https://vuejs.org/v2/style-guide/index.html#Private-property-names-essential
    $_isMobile() {
      const rect = body.getBoundingClientRect()
      return rect.width - 1 < WIDTH
    },
    $_resizeHandler() {
      if (!document.hidden) {
        const isMobile = this.$_isMobile()
        const sidebar = { opened: false, withoutAnimation: true }
        let nextLayoutState = {}
        if (isMobile) nextLayoutState = { sidebar }
        this.onChangeValue(nextLayoutState)
        // store.dispatch('app/toggleDevice', isMobile ? 'mobile' : 'desktop')

        // if (isMobile) {
        //   store.dispatch('app/closeSideBar', { withoutAnimation: true })
        // }
      }
    }
  }
}
