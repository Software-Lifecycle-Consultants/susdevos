// serverActions.ts
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

import { createSessionCookie, register } from '@/modules/auth';

export async function onSubmit(formData: FormData) {
  try {
    const formObject = Object.fromEntries(formData.entries()); // Convert FormData to object
    const userId = await register(formObject);
    const cookie = await createSessionCookie(userId);
    cookies().set(cookie.name, cookie.value, cookie.attributes);
    return { error: null }; // Return null if there is no error
  } catch (error: any) {
    return { error: error.message }; // Return error message if there is an error
  }
}
