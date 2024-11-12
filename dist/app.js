"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const globalErrorHandler_1 = __importDefault(require("./app/middlwares/globalErrorHandler"));
const http_status_codes_1 = require("http-status-codes");
const routes_1 = __importDefault(require("./app/routes"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)());
app.get('/', (req, res) => {
    res.send('Welcome to visite Library Management System!');
});
app.use('/api/', routes_1.default);
app.use(globalErrorHandler_1.default);
app.use((req, res, next) => {
    res.status(http_status_codes_1.StatusCodes.NOT_FOUND).json({
        succcess: false,
        message: "Api Not Found",
        error: {
            path: req.originalUrl,
            message: "Your requesed path is not found"
        }
    });
});
exports.default = app;
