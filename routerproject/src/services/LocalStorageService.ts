
const LocalStorageService = (function(){
    var service: any;
    const _getService = () => {
        if(!service) {
          service = service;
          return service
      }
      return service
    }
    function _setToken(tokenObj: any) {
      localStorage.setItem("access_token", tokenObj.access_token);
      localStorage.setItem("refresh_token", tokenObj.refresh_token);
    }
    function _getAccessToken() {
      return localStorage.getItem("access_token");
    }
    function _getRefreshToken() {
      return localStorage.getItem("refresh_token");
    }
    function _clearToken() {
      localStorage.removeItem("access_token");
      localStorage.removeItem("refresh_token");
    }
   return {
      getService : _getService,
      setToken : _setToken,
      getAccessToken : _getAccessToken,
      getRefreshToken : _getRefreshToken,
      clearToken : _clearToken
    }
   })();
   export default LocalStorageService;