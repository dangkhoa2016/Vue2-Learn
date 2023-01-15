<template>
  <div class='text-center mt-3'>
    <b-button class='btn' variant='success' v-b-toggle.sidebar-backdrop>Toggle Sidebar</b-button>

    <b-sidebar
      id='sidebar-backdrop'
      title='Sidebar with backdrop'
      :backdrop-variant='variant'
      backdrop
      shadow
      no-header-close
    >
      <div class='px-3 py-2'>
        <b-form-group label='Backdrop variant'
        label-for='backdrop-variant' label-class='mb-2'>
          <b-form-select id='backdrop-variant'
          :value='variant'
          class='form-select'
          :options='variants'
          @change='setVariant'>
          </b-form-select>
        </b-form-group>
        
        <total-claps text-color='text-success'></total-claps>
      </div>

      <template #footer='{ hide }'>
       <div class='d-flex bg-dark text-light align-items-center px-3 py-2'>
        <b-button size='sm' @click='hide'>Close</b-button>
       </div>
      </template>
    </b-sidebar>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        defaultVariant: 'info',
        variants: [
          'transparent',
          'white',
          'light',
          'dark',
          'primary',
          'secondary',
          'success',
          'danger',
          'warning',
          'info',
        ]
      };
    },
    computed: {
      ...Vuex.mapGetters({
        variant: 'sidebarStore/getVariant',
      }),
    },
    mounted() {
      // console.log('sidebar', this.$store.state.sidebarStore);
      this.setVariant(this.defaultVariant);
    },
    methods: {
      ...Vuex.mapActions({
        setVariant: 'sidebarStore/setVariant'
      }),
    },
  }
</script>
