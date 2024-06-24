import Papa from 'papaparse';

export default {
    getSheetData: function () {

        return new Promise((resolve, reject) => {
        Papa.parse('https://docs.google.com/spreadsheets/d/e/2PACX-1vT1gIysrollKR4Lonu9d1LuijdcDnzu7Oy6m6_vm8lVSsdIx-fxAlTLk9OZvFzUDYr2JInmeYGdyQGc/pub?output=csv', {
        download: true,
        header: true,
        complete: function (results) {
          var data = results.data
          resolve(data);
          console.log(data)
        },
        error: function (error) {
          reject(error);
        },
      });
    });
  },
};