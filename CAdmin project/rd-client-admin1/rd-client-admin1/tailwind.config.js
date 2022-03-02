const colors = require('tailwindcss/colors')
const path = require('path');
module.exports = {
  purge: [
    './public/**/*.html',
    './src/**/*.vue',
    path.resolve(__dirname, './node_modules/litepie-datepicker/**/*.js')
  ],
  theme: {
    extend: {
      colors: {
        white: '#fff',
        menubar: '#828389',
        darkgrey: '#7C8AB5',
        menuliteblue: '#62a7ff',
        black: '#000',
        rightmenu: '#696969',
        loginlabelcolor: '#393939',
        bluesecondary: '#325edc',
        themegreen: '#22B3AC',
        greytxt:'#1B2559',
        labelcolor: '#666666',
        semired:'#ff0000',
        checkcolor:'#061B45',
        yellow:'#FFA61B',
        green: '#3EA54E',
        dateange: '#181819',
        textblue:'#185DDC',
        engvalue:'#1D1C1C',
        secgrey:'#1B2559',
        secsemigrey:'#7C8AB5',
        lightpink:'#F92461',
        bluetxt:'#328DFF',
        accepttxt:'#05CD99',
        clrtxt:'#2D3748',
        formlabel:"#405267",
        dashselect:"#595959",
        filterdash:"#132954",
        approvebtn:'rgb(255, 166, 27)',
        accgrey:'#32373F',
        notfound:'#9B9BA0',
        confirtext: 'rgba(50, 55, 63, 0.87)',
        logininputtext: '#929191',
        greenclr: '#0ACF83',
        darkpink:'#FF5A89',
        additionalinfo: '#394166',
        specili: '#7F8084',
        spkfilter: '#525F7F',
        contype: '#74869A',
        darkred: '#BB2255',
        liteblue: '#66A8FA',
        caltextid: '#27272E',
        caltext: '#425466',
        swtichclr:'#282828',
        maptooltiptit: '#23194D',
        maptooltipcon: '#3A3B41',
        contextmap: "#79787C",
      actiongreens:'rgb(62, 165, 78)',
      upcome:'rgb(50, 141, 255)',
      graydark:'#54618A',
      ffstext:'#11A49D',
      ffstitle:'#121315',
      successgreen: 'rgba(76, 175, 80, 1)',
      dangertext:'rgba(221, 66, 90, 1)',
      textdarkblue:'#0980EF',
      doctext: '#383B40',
      mbcolor: '#89919F'
      },
      backgroundColor: {
      'primary': '#22B3AC',
      'secondary': '#ffed4a',
      'danger': '#e3342f',
      'lite-blue-bg': '#f8faff',
      'white': '#fff',
      'menuactive': '#325edc',
      'bluesecondary': '#0a1b45',        
      'pink':'#FFF1F5',
      'skyblue':'#EDF5FF',
      'lightgreen': '#E4FDE8',
      'lightorange': '#FEE1B2',
      'lightblue':'#ECEBFB',
      'lightyellow':'#FFF6E8',
      'green': 'rgba(228, 253, 232, 0.99);',
      'secgrey':'#1B2559',
      'graymenu': '#E6E9EE',
      'blue':'#185DDC',
      'profilebg':'#F6F5FF',
      'revert':'#657279',
      'yellow':'#FFA61B',
      'stpink':'#FF457A',
      'join':'#0ACF83',
      'tabactiveblue': '#F7F8FB',
      'speconbg': '#F9FCFF',
      'accpectbtn':'rgba(5, 205, 153, 0.1)',
      'darkpink':'#FF5A89',
      'clrbtn':'#EDF2F7',    
      'collabbg': '#eeeeee',
      'bigfil': '#E1EBFF',
      'smfil': '#F4F7FE',
      'attcount': '#546F90',
      'approvebtn':'rgb(255, 166, 27)',
      'precribe':'#005e93',
      'loaderbg': 'rgba(242, 242, 245, 0.8)',
      'profilegrey': '#7C8AB5',
      'speconatagbg': '#F1FFFF',
      'innerboxtitlebg': '#F5F8FF',
      'checkgreen': '#00C45A',
      'utilihr': '#1B2559',
      'collafilter': '#115ED7',
      'accept': '#E5FAF5',
      'avbg': '#F9F9F9',
      'await':'rgb(255, 246, 232)',
      'toggleclr':'#0ACF83',
      'actiongreen': 'darkseagreen',
      'upcomebg':'rgb(237, 245, 255)',
      'diablebg':'rgba(196, 196, 196, 0.22)',
      'chatright':'#EBE7FE',
      'chatbottom':'#E7EFFF',
      'deactiveclass': 'rgba(124, 138, 181, 0.5)',
      'greenscomp' : '#E7FAF9',
'totalspend': 'rgba(244, 239, 255, 1)',
'budgetwavebg':'rgba(123, 51, 255, 1)',
'remaining': 'rgba(255, 246, 244, 1)',
'allocated':'rgba(255, 249, 232, 1)',
'unallocated':'rgba(239, 251, 255, 1)',
'unallocateicon':'rgba(0, 179, 255, 1)',
'allocatteicon':'rgba(255, 184, 0, 1)',
'remainicon': 'rgba(255, 87, 24, 1)',
'btnbudget': '#E9F0FF',
'greendark': '#3EA54E',
'drakgblue': '#ECEBFB',
'projectdocupload': '#F6F9FF'
      },
      divideColor: {
        'engborder': '#F7F8FB',
      },
      fontFamily: {
        sans: ['Mulish', 'sans-serif'],
        serif: ['Mulish', 'serif'],
        inter: ['Inter', 'sans-serif']
      },
      fontSize: {
        base11: '11px',
        base15: '15px',
        fs8: '8.25px',
        fs11: '11px',
        xsm: '12px',
        fs12: '12px',
        base: '16px',
        fs14: '14px',
        fs13: '13px',
        fs16: '16px',
        fs18: '18px',
        fs20: '20px',
        fs34: '34px',
        fs24: '24px',
        fs10: '10px',
        fs28: '28px',
        fs9: '9px',
  
      },
      borderWidth: {
        '4px': '4px',
        '1.0263px': '1.0263px',
      },
      borderColor: {
        rightmenuborder: '#eeeeee',
        white: '#ffffff',
        graymenu: '#D2D2D2',
        companyinputbox: 'rgba(102, 102, 102, 0.24)',
        tablebottom:'#E9ECEF',
        searchbox:'#F3F3F3',
        tabactbor:'#185DDC',
        black: 'rgba(0,0,0,var(--tw-border-opacity))',
        transparent: '#ffffff00',
        filtertitle: '#BABABA',
        toggleborder: '#858585',
        filtercheckbox: '#F0EEEE',
        profilemenu: '#E4ECFF',
        speconribo: '#22B3AC',
        innerbox: '#F3F4F6',
        contrectbox: '#EDF5FF',
        spkfilterborder: '#F4F4F4',
        spkfilterinnerborder: '#F0F1F2',
        tabborder: '#F7F8FB',
        probor:'rgba(0, 0, 0, 0.15)',
        uploadarea:'#CDCDCD',
        officebor:'#F5F3F3',
        eportbtn: '#D6D6D8',
        editbot: '#328DFF',
        logbor: '1px solid rgba(102, 102, 102, 0.24);',
        accodianborder  : 'rgba(102, 102, 102, 0.24)',
        accodiantable: '(0, 0, 0, 0.06)',
        swtichbor: '#85858575',
        projectupload: '#07AAF2'
      },
      
      minHeight: {
        '300px': '300px',
        'screen50': 'calc(100vh - 50px)',
      },
      width: {
        '328px': '328px',
        '200px': '200px',
        '300px': '300px',
        '150px': '150px',
        '100px': '100px',
        '20px': '20px',
        '54px': '54px',
        '56px': '56px',
        '137px': '137px',
        'spright': 'calc(100vw - 485px)',
        '250px': '250px',
        '550px': '560px',
        '500px':'500px',
        '335px': '335px',
        '350':'350px',
        '420':'420px',
        '800':'800px'
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
        '54':"54px"
      },

      lineHeight: {
        'extra-loose': '2.5',
        '12': '3rem',
       },
      borderRadius: {
        '4xl': '2rem',
        'radius3': '3px',
        'radius5': '5px',
        'radius4': '4px',
        'radius7': '7px',
        'radius10': '10px',
        'radius8': '8px',
        'radius9': '9px',
        'radius6': '6px',
        'radius16': '16px',
        'radius100': '100%',
        'none': '0',
        'radius15': '15px',
        'radius40': '20px',
        'radius12': '12px',
      },
      boxShadow: {
        none: 'none',
        filtershadow: '0px 10px 20px rgba(207, 207, 207, 0.25);',
        budgetshadow:'drop-shadow(0px 18px 40px rgba(112, 144, 176, 0.12))',
        profilemenubox: ' 0px 10px 20px rgba(204, 204, 204, 0.25);',
        innerbox: '0px 4px 30px rgba(104, 117, 130, 0.05);',
        calbox: '0px 3px 8px -1px rgba(50, 50, 71, 0.50);',
        cardshadow:'0px 20px 15px rgba(232, 231, 231, 0.15)',
        maptooltip: '1px 2px 16px rgba(186, 149, 158, 0.2)',
        myprofileshadow: '0px 10px 20px rgba(196, 196, 196, 0.25)',
        accodiantableshadow: '0px 10px 40px rgba(196, 196, 196, 0.25)'
      },
      dropShadow: {
        '5xl':'0px 18px 40px rgba(112, 144, 176, 0.12)'
      },
      height: {
        '200': '450px',
        '500':'700px',
        '20px': '20px',
        '56px': '56px',
        '2px': '2px',
        '300': '350px',
        '76': '76px',
        '485': '485px'

       },
       zIndex: {
        '60': '60',
        '300': '300'
       }
    }
  },
  variants: {
    extend: {
      opacity: ['disabled'],
      gridColumn: ['responsive', 'hover'],
      display: ['responsive', 'hover', 'focus', 'group-hover'],
      appearance: ['hover', 'focus'],
      backgroundImage: ['active', 'hover', 'group-hover'],
      fontWeight: ['hover', 'focus'],
      borderRadius: ['hover', 'focus'],
      dropShadow: ['hover', 'focus'],
    
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    
  ],
  
}
