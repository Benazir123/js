import router from '@/router';
import store from '@/store';
import db from './FirebaseConfig';
import moment from 'moment';

class Helper {
  public currentUser: any;
  logout() {
    store.commit('LogoutUser');
    db.disconnectFirebase();
    localStorage.clear();
    router.push('/login');
  }

  loginResponse(response: any) {
    localStorage.setItem('loginData', JSON.stringify(response));
  }

  firebaseResponse(response: any) {
    localStorage.setItem('firebase', JSON.stringify(response));
  }

  getLoginUser(): String {
    const getUserData = localStorage.getItem('loginData') as any;
    this.currentUser = JSON.parse(getUserData);
    return this.currentUser && this.currentUser.user ? this.currentUser.user : '';
  }

  getAppMenu(): String {
    var loginData = localStorage.getItem('loginData') as any;
    loginData = JSON.parse(loginData);
    return loginData && loginData.menu ? loginData.menu : '';
  }

  getFirebaseData(): object {
    let firebase = {} as any;
    firebase = localStorage.getItem('firebase');
    firebase = JSON.parse(firebase);
    return firebase ? firebase : {};
  }

  setCompanyData(response: any) {
    sessionStorage.setItem('companyData', JSON.stringify(response)) as any;
  }

  checkTimediff(endTime: any) {
    const currentTime = new Date();
    const meetingEndTime = new Date(endTime);
    if (meetingEndTime.getTime() < currentTime.getTime()) {
      return false;
    } else {
      return true;
    }
  }

  setEngMenu(response: any) {
    localStorage.setItem('engMenu', JSON.stringify(response)) as any;
  }

  getEngMenu(): any {
    let menu = localStorage.getItem('engMenu') as any;
    menu = JSON.parse(menu);
    return menu;
  }

  getCompanyData(): string {
    let companyData = sessionStorage.getItem('companyData') as any;
    companyData = JSON.parse(companyData);
    return companyData ? companyData : '';
  }

  getCurrentYearDateFormat(isshow: any) {
    let localtime;
    if (isshow === 'start') {
      localtime =
        moment()
          .startOf('year')
          .format('YYYY-MM-DD') + 'T00:00:00.000Z';
    } else {
      localtime =
        moment()
          .endOf('year')
          .format('YYYY-MM-DD') + 'T23:59:59.000Z';
    }

    const covertUtcTime = moment(localtime)
      .utc()
      .format();
    console.log(localtime, covertUtcTime);
    return covertUtcTime;
  }

  setFilterData(response: any) {
    localStorage.setItem('filterData', JSON.stringify(response)) as any;
  }

  getFilterData(): string {
    let filterData = localStorage.getItem('filterData') as any;
    filterData = JSON.parse(filterData);
    return filterData ? filterData : '';
  }

  daysInMonth(month: any, year: any) {
    return new Date(year, month, 0).getDate();
  }

  convertToUTC(date: any) {
    const isoDate = new Date(date).toISOString();
    return isoDate;
  }

  commonFormatForDropdown(array: any, key1: any = '', key2: any = '') {
    let i;
    for (i = 0; i < array.length; i++) {
      if (key1) {
        array[i].label = array[i][key1];
        // delete array[i][key1];
      }
      if (key2) {
        array[i].id = array[i][key2];
        // delete array[i][key2];
      }
    }
    return array;
  }

  dateFormat(date: any) {
    return moment(date).format('MMM DD, YYYY h :mm a');
  }

  dateFormatCaps(date: any) {
    return moment(date).format('MMM DD, YYYY h :mm A');
  }

  dateFormatWithOutTime(date: any) {
    return moment(date).format('MMM DD, YYYY');
  }

  dateStartWithMonth(date: any) {
    return moment(date).format('MMM D, y, h:mm a');
  }

  dateStartWithMonthAndCaps(date: any) {
    return moment(date).format('MMM D, y h:mm A');
  }
}
export default new Helper();
