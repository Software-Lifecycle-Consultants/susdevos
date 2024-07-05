import { z } from 'zod';

// Zod validation schema
export const AddNewUserSchema = z.object({
    firstName: z.string().min(1, { message: 'First name is required' }),
    lastName: z.string().min(1, { message: 'Last name is required' }),
    email: z.string().email('Invalid email address'),
    role: z.string().trim().min(1, { message: 'Please select a role' }),
    department: z.string().trim().min(1, { message: 'Please select a department' }),
});

export type AddNewUserSchemaData = z.infer<typeof AddNewUserSchema>;
