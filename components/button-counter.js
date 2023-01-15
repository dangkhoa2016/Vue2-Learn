Vue.component('button-counter', {
  props: {
    variant: {
      type: String,
      default: 'info'
    },
  },
  created() {
    // console.log('button', this.$store.state.buttonStore);
    this.setVariant(this.variant);
  },
  methods: {
    ...Vuex.mapActions({
      increaseCount: "buttonStore/increaseCount",
      setVariant: "buttonStore/setVariant"
    })
  },
  computed: {
    ...Vuex.mapGetters({
      getCountByVariant: 'buttonStore/getCountByVariant'
    }),
    /*
    ...Vuex.mapState({
      variants: 'buttonStore/variants'
    }),
    */
    ...Vuex.mapState('buttonStore', {
      count() {
        return this.getCountByVariant(this.variant) || 0
      },
    }),
  },
  watch: {
    count: {
      // deep: true,
      handler(newValue, oldValue) {
        // console.log('count change', oldValue, newValue);
      },
    },
  },
  template: `<b-button size="sm" :variant="variant" v-on:click="increaseCount(variant)">{{ count }} 👏 claps</b-button>`
});
