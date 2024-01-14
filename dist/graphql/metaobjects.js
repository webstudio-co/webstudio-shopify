"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QUERY_METAOBJECTS = exports.QUERY_METAOBJECT_BY_HANDLE = void 0;
var client_1 = require("@apollo/client");
var products_1 = require("./products");
var collections_1 = require("./collections");
var media_1 = require("./media");
var MetaobjectFragment = (0, client_1.gql)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tfragment MetaobjectFragment on Metaobject {\n\t\thandle\n\t\tupdatedAt\n\t\tfields {\n\t\t\tkey\n\t\t\tvalue\n\t\t\treference {\n\t\t\t\t... on Product {\n\t\t\t\t\t...ProductFragment\n\t\t\t\t}\n\t\t\t\t... on Collection {\n\t\t\t\t\t...CollectionFragment\n\t\t\t\t}\n\t\t\t\t... on MediaImage {\n\t\t\t\t\timage {\n\t\t\t\t\t\t...ImageFragment\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\t... on Metaobject {\n\t\t\t\t\thandle\n\t\t\t\t\tupdatedAt\n\t\t\t\t\tfields {\n\t\t\t\t\t\tkey\n\t\t\t\t\t\tvalue\n\t\t\t\t\t\treference {\n\t\t\t\t\t\t\t... on Product {\n\t\t\t\t\t\t\t\t...ProductFragment\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t... on Collection {\n\t\t\t\t\t\t\t\t...CollectionFragment\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t... on MediaImage {\n\t\t\t\t\t\t\t\timage {\n\t\t\t\t\t\t\t\t\t...ImageFragment\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t... on Metaobject {\n\t\t\t\t\t\t\t\thandle\n\t\t\t\t\t\t\t\tid\n\t\t\t\t\t\t\t\tupdatedAt\n\t\t\t\t\t\t\t\tfields {\n\t\t\t\t\t\t\t\t\tkey\n\t\t\t\t\t\t\t\t\tvalue\n\t\t\t\t\t\t\t\t\treference {\n\t\t\t\t\t\t\t\t\t\t... on MediaImage {\n\t\t\t\t\t\t\t\t\t\t\timage {\n\t\t\t\t\t\t\t\t\t\t\t\t...ImageFragment\n\t\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t\treferences(first: 10) {\n\t\t\t\tedges {\n\t\t\t\t\tnode {\n\t\t\t\t\t\t... on Product {\n\t\t\t\t\t\t\t...ProductFragment\n\t\t\t\t\t\t}\n\t\t\t\t\t\t... on Collection {\n\t\t\t\t\t\t\t...CollectionFragment\n\t\t\t\t\t\t}\n\t\t\t\t\t\t... on MediaImage {\n\t\t\t\t\t\t\timage {\n\t\t\t\t\t\t\t\t...ImageFragment\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t\t... on Metaobject {\n\t\t\t\t\t\t\thandle\n\t\t\t\t\t\t\tid\n\t\t\t\t\t\t\tupdatedAt\n\t\t\t\t\t\t\tfields {\n\t\t\t\t\t\t\t\tkey\n\t\t\t\t\t\t\t\tvalue\n\t\t\t\t\t\t\t\treference {\n\t\t\t\t\t\t\t\t\t... on MediaImage {\n\t\t\t\t\t\t\t\t\t\timage {\n\t\t\t\t\t\t\t\t\t\t\t...ImageFragment\n\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n\t", "\n\t", "\n\t", "\n"], ["\n\tfragment MetaobjectFragment on Metaobject {\n\t\thandle\n\t\tupdatedAt\n\t\tfields {\n\t\t\tkey\n\t\t\tvalue\n\t\t\treference {\n\t\t\t\t... on Product {\n\t\t\t\t\t...ProductFragment\n\t\t\t\t}\n\t\t\t\t... on Collection {\n\t\t\t\t\t...CollectionFragment\n\t\t\t\t}\n\t\t\t\t... on MediaImage {\n\t\t\t\t\timage {\n\t\t\t\t\t\t...ImageFragment\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\t... on Metaobject {\n\t\t\t\t\thandle\n\t\t\t\t\tupdatedAt\n\t\t\t\t\tfields {\n\t\t\t\t\t\tkey\n\t\t\t\t\t\tvalue\n\t\t\t\t\t\treference {\n\t\t\t\t\t\t\t... on Product {\n\t\t\t\t\t\t\t\t...ProductFragment\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t... on Collection {\n\t\t\t\t\t\t\t\t...CollectionFragment\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t... on MediaImage {\n\t\t\t\t\t\t\t\timage {\n\t\t\t\t\t\t\t\t\t...ImageFragment\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t... on Metaobject {\n\t\t\t\t\t\t\t\thandle\n\t\t\t\t\t\t\t\tid\n\t\t\t\t\t\t\t\tupdatedAt\n\t\t\t\t\t\t\t\tfields {\n\t\t\t\t\t\t\t\t\tkey\n\t\t\t\t\t\t\t\t\tvalue\n\t\t\t\t\t\t\t\t\treference {\n\t\t\t\t\t\t\t\t\t\t... on MediaImage {\n\t\t\t\t\t\t\t\t\t\t\timage {\n\t\t\t\t\t\t\t\t\t\t\t\t...ImageFragment\n\t\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t\treferences(first: 10) {\n\t\t\t\tedges {\n\t\t\t\t\tnode {\n\t\t\t\t\t\t... on Product {\n\t\t\t\t\t\t\t...ProductFragment\n\t\t\t\t\t\t}\n\t\t\t\t\t\t... on Collection {\n\t\t\t\t\t\t\t...CollectionFragment\n\t\t\t\t\t\t}\n\t\t\t\t\t\t... on MediaImage {\n\t\t\t\t\t\t\timage {\n\t\t\t\t\t\t\t\t...ImageFragment\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t\t... on Metaobject {\n\t\t\t\t\t\t\thandle\n\t\t\t\t\t\t\tid\n\t\t\t\t\t\t\tupdatedAt\n\t\t\t\t\t\t\tfields {\n\t\t\t\t\t\t\t\tkey\n\t\t\t\t\t\t\t\tvalue\n\t\t\t\t\t\t\t\treference {\n\t\t\t\t\t\t\t\t\t... on MediaImage {\n\t\t\t\t\t\t\t\t\t\timage {\n\t\t\t\t\t\t\t\t\t\t\t...ImageFragment\n\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n\t", "\n\t", "\n\t", "\n"])), collections_1.CollectionFragment, products_1.ProductFragment, media_1.ImageFragment);
exports.QUERY_METAOBJECT_BY_HANDLE = (0, client_1.gql)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n\tquery Metaobject($handle: String!, $type: String!) {\n\t\tmetaobject(handle: { handle: $handle, type: $type }) {\n\t\t\t...MetaobjectFragment\n\t\t}\n\t}\n\t", "\n"], ["\n\tquery Metaobject($handle: String!, $type: String!) {\n\t\tmetaobject(handle: { handle: $handle, type: $type }) {\n\t\t\t...MetaobjectFragment\n\t\t}\n\t}\n\t", "\n"])), MetaobjectFragment);
exports.QUERY_METAOBJECTS = (0, client_1.gql)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n\tquery Metaobjects($first: Int!, $type: String!) {\n\t\tmetaobjects(first: $first, type: $type) {\n\t\t\tedges {\n\t\t\t\tnode {\n\t\t\t\t\tid\n\t\t\t\t\thandle\n\t\t\t\t\tfields {\n\t\t\t\t\t\tkey\n\t\t\t\t\t\tvalue\n\t\t\t\t\t\treference {\n\t\t\t\t\t\t\t... on MediaImage {\n\t\t\t\t\t\t\t\timage {\n\t\t\t\t\t\t\t\t\t...ImageFragment\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t... on Product {\n\t\t\t\t\t\t\t\t...ProductFragment\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t... on ProductVariant {\n\t\t\t\t\t\t\t\tid\n\t\t\t\t\t\t\t\ttitle\n\t\t\t\t\t\t\t\tprice {\n\t\t\t\t\t\t\t\t\tamount\n\t\t\t\t\t\t\t\t\tcurrencyCode\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\timage {\n\t\t\t\t\t\t\t\t\tsrc\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n\t", "\n\t", "\n"], ["\n\tquery Metaobjects($first: Int!, $type: String!) {\n\t\tmetaobjects(first: $first, type: $type) {\n\t\t\tedges {\n\t\t\t\tnode {\n\t\t\t\t\tid\n\t\t\t\t\thandle\n\t\t\t\t\tfields {\n\t\t\t\t\t\tkey\n\t\t\t\t\t\tvalue\n\t\t\t\t\t\treference {\n\t\t\t\t\t\t\t... on MediaImage {\n\t\t\t\t\t\t\t\timage {\n\t\t\t\t\t\t\t\t\t...ImageFragment\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t... on Product {\n\t\t\t\t\t\t\t\t...ProductFragment\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t... on ProductVariant {\n\t\t\t\t\t\t\t\tid\n\t\t\t\t\t\t\t\ttitle\n\t\t\t\t\t\t\t\tprice {\n\t\t\t\t\t\t\t\t\tamount\n\t\t\t\t\t\t\t\t\tcurrencyCode\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\timage {\n\t\t\t\t\t\t\t\t\tsrc\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n\t", "\n\t", "\n"])), media_1.ImageFragment, products_1.ProductFragment);
var templateObject_1, templateObject_2, templateObject_3;
