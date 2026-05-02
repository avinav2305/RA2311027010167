import { sendLog } from "./api.js";
import { STACK } from "./constant.js";

let authToken = null;
export const setToken = (token) => {
    authToken = token;
};

export const log = (level, message, pkg) => {
    if (!authToken) {
        console.warn("Logger: no token set.");
        return;
    }

    const payload = {
        stack: STACK,
        level,
        package: pkg,
        message,
    
    };

    try {
        await sendLog(payload, authToken);
        console.log(`[LOG] ${level.toUpperCase()} - ${pkg}: ${message}`);
    } catch (error) {
        console.error("Logger error:", error);
    }
};
