"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QUERY_BLOGS = exports.QUERY_BLOG_BY_HANDLE = void 0;
var client_1 = require("@apollo/client");
var BlogFragment = (0, client_1.gql)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tfragment BlogFragment on Blog {\n\t\tarticles(first: 10) {\n\t\t\tedges {\n\t\t\t\tnode {\n\t\t\t\t\tid\n\t\t\t\t\thandle\n\t\t\t\t\timage {\n\t\t\t\t\t\taltText\n\t\t\t\t\t\tid\n\t\t\t\t\t\turl\n\t\t\t\t\t\theight\n\t\t\t\t\t\twidth\n\t\t\t\t\t}\n\t\t\t\t\tblog {\n\t\t\t\t\t\tid\n\t\t\t\t\t\thandle\n\t\t\t\t\t}\n\t\t\t\t\ttitle\n\t\t\t\t\ttags\n\t\t\t\t\tpublishedAt\n\t\t\t\t\tauthorV2 {\n\t\t\t\t\t\tbio\n\t\t\t\t\t\temail\n\t\t\t\t\t\tfirstName\n\t\t\t\t\t\tlastName\n\t\t\t\t\t\tname\n\t\t\t\t\t}\n\t\t\t\t\tcontent\n\t\t\t\t\tcontentHtml\n\t\t\t\t\texcerpt\n\t\t\t\t\texcerptHtml\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t\thandle\n\t\tid\n\t\tseo {\n\t\t\ttitle\n\t\t\tdescription\n\t\t}\n\t\ttitle\n\t}\n"], ["\n\tfragment BlogFragment on Blog {\n\t\tarticles(first: 10) {\n\t\t\tedges {\n\t\t\t\tnode {\n\t\t\t\t\tid\n\t\t\t\t\thandle\n\t\t\t\t\timage {\n\t\t\t\t\t\taltText\n\t\t\t\t\t\tid\n\t\t\t\t\t\turl\n\t\t\t\t\t\theight\n\t\t\t\t\t\twidth\n\t\t\t\t\t}\n\t\t\t\t\tblog {\n\t\t\t\t\t\tid\n\t\t\t\t\t\thandle\n\t\t\t\t\t}\n\t\t\t\t\ttitle\n\t\t\t\t\ttags\n\t\t\t\t\tpublishedAt\n\t\t\t\t\tauthorV2 {\n\t\t\t\t\t\tbio\n\t\t\t\t\t\temail\n\t\t\t\t\t\tfirstName\n\t\t\t\t\t\tlastName\n\t\t\t\t\t\tname\n\t\t\t\t\t}\n\t\t\t\t\tcontent\n\t\t\t\t\tcontentHtml\n\t\t\t\t\texcerpt\n\t\t\t\t\texcerptHtml\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t\thandle\n\t\tid\n\t\tseo {\n\t\t\ttitle\n\t\t\tdescription\n\t\t}\n\t\ttitle\n\t}\n"])));
exports.QUERY_BLOG_BY_HANDLE = (0, client_1.gql)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n\tquery Blog($handle: String!) {\n\t\tblog(handle: $handle) {\n\t\t\t...BlogFragment\n\t\t}\n\t}\n\t", "\n"], ["\n\tquery Blog($handle: String!) {\n\t\tblog(handle: $handle) {\n\t\t\t...BlogFragment\n\t\t}\n\t}\n\t", "\n"])), BlogFragment);
exports.QUERY_BLOGS = (0, client_1.gql)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n\tquery Blogs($first: Int!, $query: String) {\n\t\tblogs(first: $first, query: $query) {\n\t\t\tedges {\n\t\t\t\tnode {\n\t\t\t\t\t...BlogFragment\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n\t", "\n"], ["\n\tquery Blogs($first: Int!, $query: String) {\n\t\tblogs(first: $first, query: $query) {\n\t\t\tedges {\n\t\t\t\tnode {\n\t\t\t\t\t...BlogFragment\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n\t", "\n"])), BlogFragment);
var templateObject_1, templateObject_2, templateObject_3;
