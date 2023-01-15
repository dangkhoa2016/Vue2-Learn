const state = {
  variant: ''
};

const mutations = {
  SET_VARIANT(state, payload) {
    // console.log('SET_VARIANT', state, payload);
    state.variant = payload;
  },
};

const actions = {
  setVariant(context, payload) {
    // console.log('setVariant', context, payload);
    const { commit } = context;
    commit("SET_VARIANT", payload);
  },
};

const getters = {
  getVariant: (state) => state.variant,
};

if (!window['store'])
  window['store'] = {};
window['store']['sidebarStore'] = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
