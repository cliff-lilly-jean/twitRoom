import Head from 'next/head';
import Sidebar from '../components/Sidebar';

export default function Home() {
 return (
  <div className="flex flex-col items-center justify-center min-h-screen py-2">
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
