import { defineComponent, ref } from 'vue';
import ProjectLeftMenu from '../ProjectLeftMenu/ProjectLeftMenu.vue';

export default defineComponent({
  name: 'DocumentProject',
  components: {
    "project-left-menu" : ProjectLeftMenu
    },
  data() {
    return {
      adddocumentproject: false,
      editdocumentproject: false,
    };
  },
  methods: {
    backproject () {
      this.$router.push('/project');
    },
    addcommentproject(){
      this.adddocumentproject = true;
    },
    editcommentproject(){
      this.editdocumentproject = true;
    }
  },
  setup() {
    const docdetails = ref([]) as any;

    docdetails.value = [
      {
        docname: 'Speaker Invitation',
        doctype: 'PDF',
        doc: '',
        action: '',
        id: '',
      },
      {
        docname: 'Product Information (PI)',
        doctype: 'PDF',
        doc: '',
        action: '',
        id: '',
      },
      {
        docname: 'PRC Approved Email template',
        doctype: 'PDF',
        doc: '',
        action: '',
        id: '',
      },
      {
        docname: 'Travel Expenses',
        doctype: 'PDF',
        doc: '',
        action: '',
        id: '',
      },
      {
        docname: 'Sign in QR Code',
        doctype: 'PDF',
        doc: '',
        action: '',
        id: '',
      },
      {
        docname: 'Product Information (PI)',
        doctype: 'PDF',
        doc: '',
        action: '',
        id: '',
      },
      {
        docname: 'PRC Approved Email template',
        doctype: 'PDF',
        doc: '',
        action: '',
        id: '',
      },
      {
        docname: 'Travel Expenses',
        doctype: 'PDF',
        doc: '',
        action: '',
        id: '',
      },
      {
        docname: 'Sign in QR Code',
        doctype: 'PDF',
        doc: '',
        action: '',
        id: '',
      },
    ];
    return {
        docdetails,
      };
},
  computed: {},
});
