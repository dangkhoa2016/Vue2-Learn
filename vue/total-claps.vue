<template>
  <div class='card border border-danger mt-5 ps-3'>
    <div class='row'>
      <label for='total-claps' class='col col-form-label text-start' :class='textColor'>Total claps: </label>
      <div class='col'>
        <input type='text' readonly='readonly' id='total-claps' :value='totalclaps'
          class='form-control-plaintext fw-bold' />
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      textColor: {
        type: String,
        default: 'text-dark',
      },
    },
    computed: {
      ...Vuex.mapGetters({
        buttonVariants: 'buttonStore/getVariants',
      }),
      totalclaps() {
        try {
          var data = this.buttonVariants || {};
          return Object.keys(data)
            .map(x => parseInt(data[x]))
            .reduce(function (a, b) { return a + b; }, 0);
        } catch(ex) {
          console.log('Error sum', ex);
          return 0;
        }
      },
    },
  }
</script>
