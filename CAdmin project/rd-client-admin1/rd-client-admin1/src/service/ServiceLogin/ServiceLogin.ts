import axios from '../';
import ServiceLoginRes from './ServiceLoginRes';

class ServiceLogin {
  async Login(response: object) {
    const data = await axios({ requiresAuth: false }).post('/client_admin/sign_in', response);
    const res = await ServiceLoginRes.LoginRes(data.data);
    return res;
  }

  async getCompany() {
    const data = await axios({ requiresAuth: false }).get('/company_logo');
    const res = await ServiceLoginRes.CompanyRes(data.data);
    return res;
  }

  async resetPassword(response: object) {
    const data = await axios({ requiresAuth: false }).post('/client_admin/reset_password', response);
    const res = await ServiceLoginRes.resetPasswordRes(data.data);
    return res;
  }
}
export default new ServiceLogin();
