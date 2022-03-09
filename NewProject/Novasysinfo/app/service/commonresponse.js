exports.getStandardResponse = (status,message,data) => {
    return {
        apiStatus: status,
        statusCode : message,
        data : data
     }
}