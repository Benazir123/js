import { defineComponent, ref } from 'vue';
import LeftMenu from './../LeftMenu/LeftMenu.vue';

export default defineComponent({
  name: 'Aligment',
  components: {
    'left-menu': LeftMenu,
  },
  data() {
    return {  
      titleicon :''
    };
  },
 
});

    