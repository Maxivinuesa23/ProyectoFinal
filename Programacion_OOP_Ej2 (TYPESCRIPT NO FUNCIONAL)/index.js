"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Menu_1 = require("./Menu");
var prompt_sync_1 = require("prompt-sync");
var scc = (0, prompt_sync_1.default)();
var opc;
do {
    (0, Menu_1.menuPrincipal)();
} while (opc != 0);
