import axios from '../';
import ServiceEngagementRes from './ServiceEngagementRes';
class ServiceEngagement {
  async engList(response: object) {
    const data = await axios({ requiresAuth: true }).post('/engagements', response);
    const res = await ServiceEngagementRes.engListRes(data.data);
    return res;
  }

  async engListExport(response: object) {
    const data = await axios({ requiresAuth: true }).post('/engagements', response);
    const res = await ServiceEngagementRes.engListExportRes(data.data);
    return res;
  }

  async topicList(response: string) {
    const data = await axios({ requiresAuth: true }).get('/topics?' + response);
    const res = await ServiceEngagementRes.topicListRes(data.data);
    return res;
  }

  async engTypeList(response: string) {
    const data = await axios({ requiresAuth: true }).get('/engagement_types?' + response);
    const res = await ServiceEngagementRes.engTypeRes(data.data);
    return res;
  }

  async engStatusList(response: string) {
    const data = await axios({ requiresAuth: true }).get('/engagement_statuses?' + response);
    const res = await ServiceEngagementRes.engStatusRes(data.data);
    return res;
  }

  async engMeetingTypeList(response: string) {
    const data = await axios({ requiresAuth: true }).get('/meeting_types?' + response);
    const res = await ServiceEngagementRes.engMeetingRes(data.data);
    return res;
  }

  async engDetailsTabList(meetingId: any) {
    const data = await axios({ requiresAuth: true }).get('/engagements/' + meetingId + '/menus');
    const res = await ServiceEngagementRes.engDetailsTabListRes(data.data);
    return res;
  }

  async productList(response: string) {
    const data = await axios({ requiresAuth: true }).get('/products?' + response);
    const res = await ServiceEngagementRes.productListRes(data.data);
    return res;
  }

  async engTabList(response: any, method: any = '', postData: any = '') {
    let data: any;
    if (method === 'post') {
      data = await axios({ requiresAuth: true }).post('/engagements/' + response, postData);
    } else {
      data = await axios({ requiresAuth: true }).get('/engagements/' + response);
    }

    const res = await ServiceEngagementRes.engTabListRes(data.data);
    return res;
  }

  async engAV(response: any) {
    const data = await axios({ requiresAuth: true }).get('/engagements/' + response);
    const res = await ServiceEngagementRes.engAVRes(data.data);
    return res;
  }

  async categoryList() {
    const data = await axios({ requiresAuth: true }).get('/engagements/notes_task_categories');
    const res = await ServiceEngagementRes.engTabListRes(data.data);
    return res;
  }

  async addForm(info: any, postData: any, header: any) {
    let data: any;
    if (info.method === 'post') {
      data = await axios({ requiresAuth: true }).post(info.endPoint, postData, {
        headers: {
          'Content-Type': header,
        },
      });
    } else if (info.method === 'put') {
      data = await axios({ requiresAuth: true }).put(info.endPoint, postData, {
        headers: {
          'Content-Type': header,
        },
      });
    }
    const res = await ServiceEngagementRes.addFormRes(data.data);
    console.log('addForm', res);
    return res;
  }

  // Cost Receipt
  async addCostReceipt(info: any, postData: any, header: any) {
    const data = await axios({ requiresAuth: true }).post('/cost_receipts', postData, {
      headers: {
        'Content-Type': header,
      },
    });
    return data;
  }

  async assigneeList() {
    const data = await axios({ requiresAuth: true }).get('/tasks/assignees');
    const res = await ServiceEngagementRes.engTabListRes(data.data);
    return res;
  }

  async expenseTypes(id: any) {
    const data = await axios({ requiresAuth: true }).get('/expense_types?meeting=' + id);
    // const res = await ServiceEngagementRes.engTabListRes(data.data);
    return data.data;
  }

  async engTabCostList(response: any) {
    const data = await axios({ requiresAuth: true }).get('/engagements/' + response);
    const res = await ServiceEngagementRes.engTabCostListRes(data.data);
    return res;
  }

  async engTabLocationList(response: any) {
    const data = await axios({ requiresAuth: true }).get('/engagements/' + response);
    return data.data;
  }

  async payeeName(response: any) {
    const data = await axios({ requiresAuth: true }).get('/cost_payees' + response);
    return data.data;
  }

  async getDegree() {
    const data = await axios({ requiresAuth: true }).get('/degrees');
    return data.data;
  }

  async getSpecialities() {
    const data = await axios({ requiresAuth: true }).get('/specialties');
    return data.data;
  }

  async getStats() {
    const data = await axios({ requiresAuth: true }).get('/states');
    return data.data;
  }

  async docTypeList() {
    const data = await axios({ requiresAuth: true }).get('/document_types');
    const res = await ServiceEngagementRes.engTabListRes(data.data);
    return res;
  }

  async getStatus(param: any) {
    const data = await axios({ requiresAuth: true }).get(param);
    const res = await ServiceEngagementRes.engTabListRes(data.data);
    return res;
  }

  async commonEngPoint(method: any, url: any, param: any = '') {
    let data: any;
    if (method === 'get') {
      data = await axios({ requiresAuth: true }).get(url);
    } else if (method === 'post') {
      data = await axios({ requiresAuth: true }).post(url, param);
    } else if (method === 'delete') {
      data = await axios({ requiresAuth: true }).delete(url);
    }
    const res = await ServiceEngagementRes.engTabListRes(data.data);
    return res;
  }

  async profile(method: any, url: any) {
    let data: any;
    if (method === 'get') {
      data = await axios({ requiresAuth: true }).get(url);
    } else if (method === 'delete') {
      data = await axios({ requiresAuth: true }).delete(url);
    }
    console.log('data', data);
    return data.data;
  }

  async commonEndpoint(method: any, url: any, param: any = '') {
    let data: any;
    if (method === 'get') {
      data = await axios({ requiresAuth: true }).get(url, param);
    } else if (method === 'delete') {
      data = await axios({ requiresAuth: true }).delete(url);
    } else if (method === 'post') {
      data = await axios({ requiresAuth: true }).post(url, param);
    } else if (method === 'put') {
      data = await axios({ requiresAuth: true }).put(url, param);
    }
    console.log('data', data);
    return data.data;
  }
}
export default new ServiceEngagement();
