import { rateLimit } from 'express-rate-limit'

// Base configuration helper
const createLimiter = (limit, message) => rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    limit: limit,
    standardHeaders: 'draft-8',
    legacyHeaders: false,
    ipv6Subnet: 64,
    message: { message }
});

export const contactLimiter = createLimiter(5, "Too many inquiries. Try again in an hour.");
export const fileLimiter = createLimiter(3, "Too many uploads. Try again in an hour.");