import { App, getCurrentInstance} from "vue"
export const setupWujie = ()=>{
    if (window.__POWERED_BY_WUJIE__) {
        window.__THIS_WUJIE_VIEW_VM__ = getCurrentInstance();
    }
}
export const install = function (app:App){
    if (window.__POWERED_BY_WUJIE__) {
        window.__THIS_WUJIE_VIEW_VM__ = app;
    }
    app.mixin({
        mounted() {
            if (typeof this.$WUJIE_MOUNTED &&  window.__POWERED_BY_WUJIE__) {
                window.__THIS_WUJIE_VIEW_VM__ = this;
            }
        }
    })
}
export default install
