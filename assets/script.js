
(async function () {

  const { loadModule, vueVersion } = window['vue2-sfc-loader'];

  const options = {
    moduleCache: {
      vue: Vue,
      myData: {
        vueVersion,
      }
    },
    async getFile(url) {
      const res = await fetch(url);
      if (!res.ok)
        throw Object.assign(new Error(url + ' ' + res.statusText), { res });
      return await res.text();
    },
    addStyle() { /* unused here */ },
  }
  
  let app = {};
  
  const loadHtml = function (file) {
    return new Promise((resolve, reject) => {
      fetch(file)
        .then(res => res.text())
        .then(html => {
          app.html = html;
          resolve();
        }).catch(ex => console.log(ex));
    });
  };
  const loadStore = function (file) {
    return loadJs(`/stores/${file}.js`);
  };
  const loadComponent = function (file) {
    return loadJs(`/components/${file}.js`);
  };
  const loadJs = function (file) {
    return new Promise((resolve, reject) => {
      fetch(file)
        .then(res => res.text())
        .then(js => {
          eval(js);
          resolve();
        }).catch(ex => console.log(ex));
    });
  };
  
  await Promise.all([
    loadHtml('/assets/app.html'),
    loadStore('buttonStore'), loadStore('sidebarStore'),
    loadComponent('button-counter'), loadComponent('button-counted')
  ]);

  const store = new Vuex.Store({
    modules: {
      buttonStore: window['store'].buttonStore,
      sidebarStore: window['store'].sidebarStore,
    }
  });

  const rightPanel = await loadModule('/vue/right-panel.vue', options);
  const sidebar = await loadModule('/vue/sidebar.vue', options);

  const totalclaps = await loadModule('/vue/total-claps.vue', options);
  Vue.component('total-claps', totalclaps);

  app = new Vue({
    el: '#app',
    store,
    components: {
      'sidebar': sidebar,
      'right-panel': rightPanel,
    },
    data() {
      return {
        myData: 'Super cool Vue 2 JS application 🖖',
      };
    },
    template: app.html,
  });

  // window.app = app;
})();
