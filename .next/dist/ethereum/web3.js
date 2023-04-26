"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _web = require("web3");

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var web3 = void 0;
if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
    // We are in the browser and Metamask is running.
    window.ethereum.request({ method: "eth_requestAccounts" });
    web3 = new _web2.default(window.ethereum);
} else {
    // We are on the server *OR* the user is not running Metamask.
    var provider = new _web2.default.providers.HttpProvider('https://goerli.infura.io/v3/65ef5bf1823d4f7cb04b64c32cb83c87');
    web3 = new _web2.default(provider);
}
exports.default = web3;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtXFx3ZWIzLmpzIl0sIm5hbWVzIjpbIldlYjMiLCJ3ZWIzIiwid2luZG93IiwiZXRoZXJldW0iLCJyZXF1ZXN0IiwibWV0aG9kIiwicHJvdmlkZXIiLCJwcm92aWRlcnMiLCJIdHRwUHJvdmlkZXIiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLEFBQU8sQUFBUDs7Ozs7O0FBQ0EsSUFBSSxZQUFKO0FBQ0EsSUFBSSxPQUFPLEFBQVAsV0FBa0IsQUFBbEIsZUFBaUMsT0FBTyxPQUFPLEFBQWQsYUFBMkIsQUFBaEUsYUFBNkUsQUFDekU7QUFDQTtXQUFPLEFBQVAsU0FBZ0IsQUFBaEIsUUFBd0IsRUFBRSxRQUFRLEFBQVYsQUFBeEIsQUFDQTtXQUFPLEFBQUksQUFBSixrQkFBUyxPQUFPLEFBQWhCLEFBQVAsQUFDRDtBQUpILE9BSVMsQUFDTDtBQUNBO1FBQU0sV0FBVyxJQUFJLGNBQUssQUFBTCxVQUFlLEFBQW5CLGFBQ2IsQUFEYSxBQUFqQixBQUdBO1dBQU8sQUFBSSxBQUFKLGtCQUFTLEFBQVQsQUFBUCxBQUNEO0FBQ0g7a0JBQWUsQUFBZiIsImZpbGUiOiJ3ZWIzLmpzIiwic291cmNlUm9vdCI6IkM6L1VzZXJzL01laGVtbWVkL0Rlc2t0b3AvVGhlc2lzL0Nyb3dkQ29pbiJ9