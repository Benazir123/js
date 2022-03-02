import db from '@/globalFunctions/FirebaseConfig';
import Helper from '@/globalFunctions/Helper';
import store from '@/store'; // store

class ServiceLoginRes {
  async LoginRes(data: any) {
    console.log(data);
    const response = {} as any;
    if (data.apiStatus === true && data.adminstatus !== '') {
      store.commit('LoginUser', data.token);
      response.status = true;
      Helper.loginResponse(data);
      if (data && data.firebase) {
        Helper.firebaseResponse(data.firebase);
      }
      response.msg = 'Login Successfully, you are redirecting!!';
      db.connectFirebase;
    } else {
      response.status = false;
      response.msg = data.error.message;
    }
    return response;
  }

  async CompanyRes(data: any) {
    const response = {} as any;
    if (data.apiStatus === true) {
      response.status = true;
      const result = data.result;
      response.company_name = result.company_name;
      response.company_logo = result.company_logo_name;
      response.small_logo = result.small_logo;
      response.is_cancel_with_reason = result.is_cancel_with_reason;

      Helper.setCompanyData(response);
      response.is_success = true;
    } else {
      response.status = false;
    }
    return response;
  }

  async resetPasswordRes(data: any) {
    const response = {} as any;
    if (data.apiStatus === true) {
      response.status = true;
      response.message = data.message;
      response.is_success = true;
    } else {
      response.status = false;
      response.is_success = false;
      response.message = data.error.message;
    }
    return response;
  }
}
export default new ServiceLoginRes();
