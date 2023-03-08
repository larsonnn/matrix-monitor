import { reactive } from "vue";


export const matrixStore = reactive({
    isLoggedIn: false,
    auth: {}
  });
export const appStore = reactive({
    state: 'before'
})