// pages/api/register.ts
// import { NextApiRequest, NextApiResponse } from 'next';
// import { onSubmit } from '@/app/register/serverActions';

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method === 'POST') {
//     const formData = new FormData();
//     Object.entries(req.body).forEach(([key, value]) => {
//       formData.append(key, value as any);
//     });

//     const result = await onSubmit(formData);
//     if (result.error) {
//       return res.status(500).json({ error: result.error });
//     }
//     res.status(200).json({ message: 'Registration successful!' });
//   } else {
//     res.setHeader('Allow', ['POST']);
//     res.status(405).end(`Method ${req.method} Not Allowed`);
//   }
// }

import { createSessionCookie, register } from '@/modules/auth';
import { cookies } from 'next/headers';

export default async function handler(req: any, res: any) {
 
  const formData = await req.formData(); // Assuming formData comes from request body
  console.log("bbbb",formData);
  const formObject = Object.fromEntries(formData.entries());

  try {
    const userId = await register(formObject); // Call your registration logic
    const cookie = await createSessionCookie(userId);

    // Set cookies using next/headers
    return new Response(null, {
      headers: {
        'Set-Cookie': cookies().set(cookie.name, cookie.value, cookie.attributes).toString(),
      },
    });
  } catch (error : any) {
    return res.status(500).json({ error: error.message });
  }
}