const state = {
  variants: {}
};

const mutations = {
  INCREASE_COUNT(state, payload) {
    // console.log('INCREASE_COUNT', state, payload);
    state.variants = Object.assign({}, state.variants, { [payload]: ++state.variants[payload] })
  },
  SET_VARIANT(state, payload) {
    // console.log('SET_VARIANT', state, payload);
    state.variants[payload] = 0;
  },
};

const actions = {
  setVariant(context, payload) {
    // console.log('setVariant', context, payload);
    const { commit } = context;
    commit("SET_VARIANT", payload);
  },
  increaseCount(context, payload) {
    // console.log('increaseCount', context, payload);
    const { commit } = context;
    commit("INCREASE_COUNT", payload);
  },
};

const getters = {
  getVariants: (state) => state.variants,
  getCountByVariant: (state) => (variant) => {
    return state.variants[variant];
  }
};

if (!window['store'])
  window['store'] = {};
window['store']['buttonStore'] = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
