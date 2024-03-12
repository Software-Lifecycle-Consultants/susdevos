import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import ClientForm from '@/components/ClientForm';
import { lucia, validateRequest } from '@/modules/auth/lucia';
import AboutCard from "../components/AboutCard"
import CaseCard from "../components/CaseCard"
import GridCardStack from '../components/GridCardStack'; 
import NavBar from '@/components/NavBar';
import HQ from '@/components/HQ';



export default async function Page() {
  const { user } = await validateRequest();
  if (!user) {
    return redirect('/login');
  }
  return (
    // The main div
    <div> 
      <div className="grid grid-rows-layout h-screen">
        <div className="bg-gray-100 p-4">
          <h1>Hi, {user.username}!</h1>
          <p>Your user ID is {user.id}.</p>
          <div className="flex flex-col">
            <ClientForm action={logout} initialState={{ error: '' }}>
              <button>Sign out</button>
            </ClientForm>
          </div>
        </div>
        <div className="grid grid-cols-layout flex-grow">
          {/* <div className="bg-blue-100"><Header/></div> */}
<<<<<<< HEAD
          <div className="bg-blue-100"><NavBar/></div>
          <div className="bg-blue-300"><AboutCard/></div>
          <div><HQ/></div> 
=======
          <div className="bg-white"><NavBar/></div>
          <div className="bg-white"><AboutCard/></div>
>>>>>>> 72c82fc462d090ce27964d4e5c5f8a05bcc55aab
          <div className="bg-green-200"><GridCardStack/></div> 
        </div>
        <div><CaseCard/></div>
         
        <div className="bg-gray-200 p-4">Footer</div>
      </div>
    </div>
  );
}

async function logout() {
  'use server';
  const { session } = await validateRequest();
  if (!session) {
    return {
      error: 'Unauthorized',
    };
  }

  await lucia.invalidateSession(session.id);

  const sessionCookie = lucia.createBlankSessionCookie();
  cookies().set(
    sessionCookie.name,
    sessionCookie.value,
    sessionCookie.attributes,
  );
  return redirect('/login');
}
