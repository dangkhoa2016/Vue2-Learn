<template>
  <div class='d-flex flex-column flex-shrink-0 p-3 text-white panel'>
    <span class='fs-4 fw-bold text-danger'>Statistics</span>
    <hr>
    <div class='d-grid gap-2'>
      <template v-for='button in Object.keys(buttonVariants)'>
        <component :is="'button-counted'" :variant='button'></component>
      </template>

      <total-claps></total-claps>
    </div>
  </div>
</template>

<script>
  export default {
    computed: {
      ...Vuex.mapGetters({
        buttonVariants: 'buttonStore/getVariants',
      }),
    },
  }
</script>
