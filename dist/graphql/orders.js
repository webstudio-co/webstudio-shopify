"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QUERY_CUSTOMER_ORDERS = void 0;
var client_1 = require("@apollo/client");
var OrderFragment = (0, client_1.gql)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tfragment OrderFragment on Order {\n\t\tid\n\t\tname\n\t\tstatusUrl\n\t\torderNumber\n\t\tprocessedAt\n\t\tcurrencyCode\n\t\ttotalPrice {\n\t\t\tamount\n\t\t\tcurrencyCode\n\t\t}\n\t\ttotalRefunded {\n\t\t\tamount\n\t\t\tcurrencyCode\n\t\t}\n\t\ttotalShippingPrice {\n\t\t\tamount\n\t\t\tcurrencyCode\n\t\t}\n\t\tlineItems(first: 250) {\n\t\t\tedges {\n\t\t\t\tnode {\n\t\t\t\t\ttitle\n\t\t\t\t\tquantity\n\t\t\t\t\tvariant {\n\t\t\t\t\t\tprice\n\t\t\t\t\t\timage {\n\t\t\t\t\t\t\tsrc\n\t\t\t\t\t\t}\n\t\t\t\t\t\tselectedOptions {\n\t\t\t\t\t\t\tname\n\t\t\t\t\t\t\tvalue\n\t\t\t\t\t\t}\n\t\t\t\t\t\tproduct {\n\t\t\t\t\t\t\thandle\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t\tshippingAddress {\n\t\t\tfirstName\n\t\t\tlastName\n\t\t\taddress1\n\t\t\taddress2\n\t\t\tcity\n\t\t\tprovince\n\t\t\tzip\n\t\t\tcountry\n\t\t\tphone\n\t\t}\n\t}\n"], ["\n\tfragment OrderFragment on Order {\n\t\tid\n\t\tname\n\t\tstatusUrl\n\t\torderNumber\n\t\tprocessedAt\n\t\tcurrencyCode\n\t\ttotalPrice {\n\t\t\tamount\n\t\t\tcurrencyCode\n\t\t}\n\t\ttotalRefunded {\n\t\t\tamount\n\t\t\tcurrencyCode\n\t\t}\n\t\ttotalShippingPrice {\n\t\t\tamount\n\t\t\tcurrencyCode\n\t\t}\n\t\tlineItems(first: 250) {\n\t\t\tedges {\n\t\t\t\tnode {\n\t\t\t\t\ttitle\n\t\t\t\t\tquantity\n\t\t\t\t\tvariant {\n\t\t\t\t\t\tprice\n\t\t\t\t\t\timage {\n\t\t\t\t\t\t\tsrc\n\t\t\t\t\t\t}\n\t\t\t\t\t\tselectedOptions {\n\t\t\t\t\t\t\tname\n\t\t\t\t\t\t\tvalue\n\t\t\t\t\t\t}\n\t\t\t\t\t\tproduct {\n\t\t\t\t\t\t\thandle\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t\tshippingAddress {\n\t\t\tfirstName\n\t\t\tlastName\n\t\t\taddress1\n\t\t\taddress2\n\t\t\tcity\n\t\t\tprovince\n\t\t\tzip\n\t\t\tcountry\n\t\t\tphone\n\t\t}\n\t}\n"])));
exports.QUERY_CUSTOMER_ORDERS = (0, client_1.gql)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n\tquery GetCustomerPastOrders(\n\t\t$customerAccessToken: String!\n\t\t$first: Int\n\t\t$cursor: String\n\t) {\n\t\tcustomer(customerAccessToken: $customerAccessToken) {\n\t\t\torders(first: $first, after: $cursor) {\n\t\t\t\tedges {\n\t\t\t\t\tcursor\n\t\t\t\t\tnode {\n\t\t\t\t\t\t...OrderFragment\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\tpageInfo {\n\t\t\t\t\thasPreviousPage\n\t\t\t\t\thasNextPage\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n\t", "\n"], ["\n\tquery GetCustomerPastOrders(\n\t\t$customerAccessToken: String!\n\t\t$first: Int\n\t\t$cursor: String\n\t) {\n\t\tcustomer(customerAccessToken: $customerAccessToken) {\n\t\t\torders(first: $first, after: $cursor) {\n\t\t\t\tedges {\n\t\t\t\t\tcursor\n\t\t\t\t\tnode {\n\t\t\t\t\t\t...OrderFragment\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\tpageInfo {\n\t\t\t\t\thasPreviousPage\n\t\t\t\t\thasNextPage\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n\t", "\n"])), OrderFragment);
var templateObject_1, templateObject_2;