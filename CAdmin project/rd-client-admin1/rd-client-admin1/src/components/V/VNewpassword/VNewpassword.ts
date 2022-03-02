import { defineComponent } from 'vue';
export default defineComponent({
  name: 'VNewpassword',
  props: {
    label: {
      type: String,
      default: ''
    },
    modelValue: {
      type: [String, Number],
      default: ''
    },
  },
  data() {
    return {
      PasswordIcon: require('@/assets/eyeslash.svg'),
      PasswordType: 'password',
    };
  },
  methods: {
    switchVisibility() {
      if (this.PasswordType == "text") {
        this.PasswordType = 'password';
        this.PasswordIcon = require('@/assets/eyeslash.svg');
      } else {
        this.PasswordType = 'text';
        this.PasswordIcon = require('@/assets/eye.svg');
      }
    }
  }

})