import Head from 'next/head';
import Sidebar from '../components/Sidebar';

export default function Home() {
 return (
  // Had to remove the flex class on the wrapper container, for some reason
  // it was causing the main bg of black not to show up

  // Also removed the class py-2 from the wrapper container; padding top and bottom of 5px
  // because it was causing a white border at the top and bottom of the page

  // todo: find out why these issues are happening

  <div className="flex-col items-center justify-center min-h-screen">
   <Head>
    <title>twitRoom</title>
    <link rel="icon" href="/twit-room-icon.ico" />
   </Head>

   <main className='bg-black min-h-screen flex max-w-[1500px] mx-auto'>
    <Sidebar />
    {/* Feed */}
    {/* Widgets */}
    {/* Modal */}
   </main>
  </div>
 );
}
