import moment from 'moment';

class ServiceEngagementRes {
  async topicListRes(res: any) {
    const response = {} as any;
    if (res.apiStatus === true) {
      const result = res.data.rows && res.data.rows.length !== 0 ? res.data.rows : [];
      result.forEach((res: any, index: any) => {
        result[index].label = res.topic_title;
      });
      response.result = result;
      response.is_success = true;
    } else {
      response.is_success = false;
    }
    return response;
  }

  async engTypeRes(res: any) {
    const response = {} as any;
    if (res.apiStatus === true) {
      const result = res.data && res.data.length !== 0 ? res.data : [];
      result.forEach(async (res: any, index: any) => {
        result[index].label = res.meeting_type;
      });
      response.result = result;
      response.is_success = true;
    } else {
      response.is_success = false;
    }
    return response;
  }

  async engMeetingRes(res: any) {
    const response = {} as any;
    if (res.apiStatus === true) {
      const result = res.data && res.data.length !== 0 ? res.data : [];
      result.forEach(async (res: any, index: any) => {
        result[index].label = res.type;
      });
      response.result = result;
      response.is_success = true;
    } else {
      response.is_success = false;
    }
    return response;
  }

  async engStatusRes(res: any) {
    const response = {} as any;
    if (res.apiStatus === true) {
      const result = res.data.rows && res.data.rows.length !== 0 ? res.data.rows : [];
      result.forEach(async (res: any, index: any) => {
        result[index].label = res.status;
      });
      response.result = result;
      response.is_success = true;
    } else {
      response.is_success = false;
    }
    return response;
  }

  async engListRes(res: any) {
    const response = {} as any;
    if (res.apiStatus === true) {
      const result = res.data && res.data.rows && res.data.rows.length !== 0 ? res.data.rows : [];
      if (result && result.length !== 0) {
        result.forEach((value: any, i: any) => {
          value.inner_arrow = require('@/assets/downarrow.svg');
          value.isopen_inner_arrow = false;
        });
        response.result = result;
        response.message = res.message;
        response.total_count = res.totalPages;
        response.total_page = res.currentPageData;
        response.is_success = true;
      } else {
        response.is_success = false;
      }
    } else {
      response.is_success = false;
    }
    return response;
  }

  async engListExportRes(res: any) {
    const element = document.createElement('a');
    element.setAttribute('href', 'data:csvcharset=utf-8,' + encodeURIComponent(res));
    element.setAttribute('download', 'EngagementList' + moment().format('MM Do YY, h:mm'));
    element.download = 'EngagementList' + moment().format('MM Do YY, h:mm') + '.csv';
    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();
    document.body.removeChild(element);
  }

  async engDetailsTabListRes(res: any) {
    const response = {} as any;
    let result = [];
    if (res.apiStatus === true) {
      result = res.data.rows && res.data.rows.length !== 0 ? res.data.rows : [];
      if (result && result.length !== 0) {
        result = result.filter((a: any) => a.hidden !== true);
        response.result = result;
        response.is_success = true;
      } else {
        response.is_success = false;
      }
    } else {
      response.is_success = false;
    }
    return response;
  }

  async productListRes(res: any) {
    const response = {} as any;
    if (res.apiStatus === true) {
      const result = res.data.rows && res.data.rows.length !== 0 ? res.data.rows : [];
      result.forEach((res: any, index: any) => {
        result[index].label = res.product_name;
      });
      response.result = result;
      response.is_success = true;
    } else {
      response.is_success = false;
    }
    return response;
  }

  async engTabListRes(res: any) {
    const response = {} as any;
    if (res.apiStatus === true) {
      console.log('engTabListRes', res);
      const result = res.data.rows && res.data.rows.length !== 0 ? res.data.rows : [];

      if (result && result.length !== 0) {
        response.result = result;
        response.message = res.message;
        response.totalPages = res.totalPages;
        response.totalItems = res.totalItems;
        response.is_success = true;
      } else {
        response.is_success = false;
      }
    } else {
      response.is_success = false;
    }
    return response;
  }

  async engTabCostListRes(res: any) {
    const response = {} as any;
    if (res.apiStatus === true) {
      const result = res.data.rows && res.data.rows.length !== 0 ? res.data.rows : [];

      const expenseList = res.expenseList && res.expenseList.length !== 0 ? res.expenseList : [];

      const paymentStatus = res.paymentStatus && res.paymentStatus.length !== 0 ? res.paymentStatus : [];
      response.result = result;
      response.expenseList = expenseList;
      response.paymentStatus = paymentStatus;
      response.message = res.message;
      response.totalPages = res.totalPages;
      response.totalBudgetCost = res.totalBudgetCost;
      response.totalItems = res.totalItems;
      response.is_success = true;
    } else {
      response.is_success = false;
    }
    return response;
  }

  async addFormRes(res: any) {
    const response = {} as any;
    console.log('addFormRes', res);
    return res;
  }

  async engAVRes(res: any) {
    const response = {} as any;
    if (res.apiStatus === true) {
      console.log('engTabListRes', res);
      const result = res.data.rows && res.data.rows.length !== 0 ? res.data.rows : [];

      if (result && result.length !== 0) {
        response.result = result;
        response.message = res.message;
        response.totalPages = res.totalPages;
        response.totalItems = res.totalItems;
        response.is_success = true;
      } else {
        response.is_success = false;
      }

      if (res.data.document) {
        response.document = res.data.document;
      }
      if (res.data.comments) {
        response.comments = res.data.comments;
      }
      if (res.data.updatedAt) {
        response.avfiledate = res.data.updatedAt;
      }
    } else {
      response.is_success = false;
    }
    return response;
  }
}
export default new ServiceEngagementRes();
