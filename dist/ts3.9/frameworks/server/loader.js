"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var global_1 = __importDefault(require("global"));
var configure_1 = __importDefault(require("../configure"));
function test(options) {
    return options.framework === 'server';
}
function load(options) {
    global_1.default.STORYBOOK_ENV = 'server';
    var storybook = jest.requireActual('@storybook/server');
    configure_1.default(__assign(__assign({}, options), { storybook: storybook }));
    return {
        framework: 'server',
        renderTree: jest.requireActual('./renderTree').default,
        renderShallowTree: function () {
            throw new Error('Shallow renderer is not supported for server');
        },
        storybook: storybook,
    };
}
var serverLoader = {
    load: load,
    test: test,
};
exports.default = serverLoader;
