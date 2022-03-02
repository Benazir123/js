import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'Speaker',
  inheritAttrs: false,
  data() {
    return {
      openTickettab: 1,
      isOpenticketdrawer: false,
      isOpenpreview: true,
    };
  },
  setup() {
    const spkuser = ref([]) as any;

    spkuser.value = [
      {
        name: 'Abbas Jonathan',
        username: 'heather@v3devmail.com ',
        date: '08/13/2021 | 8:57 AM',
        subjet: 'Technical',
        meetingid: '----',
        actualid: '----',
      },
      {
        name: ' Sandy Cheung',
        username: 'brucefiredman.md@v3qagmail.com',
        date: '08/13/2021 | 8:57 AM',
        subjet: 'Technical',
        meetingid: '----',
        actualid: '----',
      },
    ];
    return {
      spkuser,
    };
  },
  methods: {
    toggletickettab: function(tabNumber: number) {
      this.openTickettab = tabNumber;
    },
    // OPen Collab meeting Section
    openticket() {
      this.isOpenticketdrawer = !this.isOpenticketdrawer;
    },
    previewimg() {
      this.isOpenpreview = !this.isOpenpreview;
    },
  },
});
