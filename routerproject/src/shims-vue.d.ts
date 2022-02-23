/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

//typescript definition for filter
interface BasicFilter {
  value: string
  keys: string[]
  exact?: boolean
}

declare module "vuejs-smart-table"
declare module "vue3-google-oauth2"
