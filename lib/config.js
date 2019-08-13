"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HEADERS = exports.API_URL = void 0;
var TOKEN_API = 'BQBkc2KEZFusQO35GmkecTFNcN1NO4Ldt7vaREwlxqltGo7HFXcIL3TCCZe273J7QsESy6NRkGkdZv3vyLgS9erZaYv9CnY1mA0AsYrCPWzHKnnxPKOaNyCeNN-PSIQ7WJUCItPsZlAyvZEfPxSdJefqCU8FGI8-M2u5SAJMQpX2Sv0EbyczgwAiP9yPmEk1C3LbL6-WWFQw6g_H-BDTmJjiBijs7wlgN0Y1TZVzYtPCo24Fa-fUaeWyDfJ5YBVdRMmssKilSdlZeg';
var API_URL = 'https://api.spotify.com/v1';
exports.API_URL = API_URL;
var HEADERS = {
  headers: {
    Authorization: "Bearer ".concat(TOKEN_API)
  }
};
exports.HEADERS = HEADERS;