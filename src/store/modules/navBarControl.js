export default {
  namespace: 'true',
  state() {
    return {
      navBarControl: {
        position: '',
      }, 
    }
  },
  mutations: {
    saveNavBarControl(state, navBarControl) {
     state.position = navBarControl.position;
    }, 
  },
  actions: {
    updateNavBarControl(context, navBarControl) {
      context.commit("saveNavBarControl", navBarControl);
    },
  },
  getters: {
    navBarControl(state) {
      return state.navBarControl;
    }
  }
}