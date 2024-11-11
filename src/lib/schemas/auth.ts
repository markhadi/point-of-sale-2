import * as z from 'zod';

/**
 * Zod schema for login form validation
 * @property {string} username - Minimum 3 characters
 * @property {string} password - Minimum 6 characters
 */
export const loginSchema = z.object({
  username: z.string().min(3, 'Username min 3 characters'),
  password: z.string().min(6, 'Password min 6 characters'),
});

/** Type definition for login form data derived from loginSchema */
export type LoginSchema = z.infer<typeof loginSchema>;
