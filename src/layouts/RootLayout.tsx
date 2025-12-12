/* Navbar */

/* Node Modules */
import { Outlet } from 'react-router';

/* Node Modules */
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const RootLayout = () => {
  return (
    <>
      <div className="min-h-[100dvh] flex flex-col overflow-hidden">
        <Header />

        <main className="grow grid grid-cols-1 items-center pt-36 pb-16">
          <Outlet />
        </main>

        <Footer />
      </div>
    </>
    
  )
}

export default RootLayout

//min-h-[100dvh]: You force the <div> to be at least as tall as the screen, no matter how empty it is.
//dvh: dynamic viewport height, accounts for mobile browser UI changes
//With overflow-hidden: The browser effectively says, "If anything sticks out of this box, cut it off." It keeps the layout clean.
//pt-36: padding-top of 9rem (144px) to push content below the fixed header