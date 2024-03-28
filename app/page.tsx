import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import ClientForm from '@/components/ClientForm';
import ButtonCard from '@/components/ButtonCard';
import NonButtonCard from '@/components/NonButtonCard';
import Footer from '@/components/Footer/Footer';
import { lucia, validateRequest } from '@/modules/auth/lucia';
import AboutCard from "../components/AboutCard"
import CaseCard from "@/components/CaseCard"
import NavBar from '@/components/NavBar';
import HaveAQuestion from '@/components/HaveAQuestion';
import Logos from '@/components/Logos/index';
import MainContent from '@/components/MainContent';
import PartneringContent from '@/components/PartneringContent';
import SolvesTheProblem from '@/components/SolvesTheProblem';
import TextBanner from '@/components/TextBanner';
import SusDev from '@/components/SusDevOsMain';


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
        {/* Home Page */}
        <div className="grid grid-cols-layout flex-grow">
          {/* Navigation Bar */}
          <div className='border-b border-text-disabled'><NavBar /></div>
          {/* Main Title Component With Search Bar */}
          <div><MainContent /></div>
          {/* SusDev OS Main Components */}
          <div className="bg-white"><SusDev/></div>
          {/* Logo Carousal */}
          <div><Logos /></div>
          {/* About SusDev Component */}
          <div><AboutCard /></div>
          {/* Question Form Component */}
          <div><HaveAQuestion /></div>
          {/* Problem-Solution Layout Component */}
          <div><SolvesTheProblem/></div>
          {/* Case Sudies Component */}
          <div><CaseCard /></div>
          {/* Benefits Component */}
          <div><NonButtonCard /></div>
          {/* Simple Text Banner */}
          <div><TextBanner /></div>
          {/* And More Section */}
          <div><ButtonCard /></div>
          {/* Partnering Banner */}
          <div><PartneringContent /></div>
          {/* Footer*/}
          <div><Footer /></div>
        </div>
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
