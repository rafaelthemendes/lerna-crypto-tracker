"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var error_1 = require("@apollo/client/link/error");
var errorLink = (0, error_1.onError)(function (_a) {
    var graphQLErrors = _a.graphQLErrors, networkError = _a.networkError;
    if (graphQLErrors) {
        graphQLErrors.forEach(function (_a) {
            var message = _a.message, locations = _a.locations, path = _a.path;
            return console.log("[GraphQL error]: Message: " + message + ", Location: " + locations + ", Path: " + path);
        });
    }
    if (networkError)
        console.log("[Network error]: " + networkError);
});
exports.default = errorLink;
