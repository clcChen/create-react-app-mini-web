import request from '../utils/request';

const Apis = {
  common: {},

  logistics: {
    detail: request('/api/server/v1/admin/enter/device/logistics-info', 'get'),
    confirm: request('/api/server/v1/admin/enter/device/arrive', 'post')
  }
};

export default Apis;
