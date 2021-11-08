"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var client_1 = require("@apollo/client");
var errorLink_1 = __importDefault(require("./links/errorLink"));
var httpLink = new client_1.HttpLink({
    uri: "http://localhost:4000/",
});
var client = new client_1.ApolloClient({
    link: (0, client_1.from)([errorLink_1.default, httpLink]),
    cache: new client_1.InMemoryCache(),
});
exports.default = client;
