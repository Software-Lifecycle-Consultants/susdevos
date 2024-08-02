import { z } from 'zod';

export const profileSchema = z
  .object({
    currentPassword: z
      .string()
      .min(8, { message: 'password should be minimum 8 character long' })
      .max(12, { message: 'password should be less than 12 character long' }),
    newPassword: z
      .string()
      .min(8, { message: 'password should be minimum 8 character long' })
      .max(12, { message: 'password should be less than 12 character long' }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.currentPassword !== data.newPassword, {
    message: 'your current password same as new password',
    path: ['newPassword'],
  }).refine(data => data.newPassword === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"]
});

export type profileSchemaData = z.infer<typeof profileSchema>;
