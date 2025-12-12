/* Node modules*/
import {isRouteErrorResponse, useRouteError, Link } from "react-router";

/* Components */
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";


const RootErrorBoundary = () => {
  return (
    <div className='min-h-[100dvh] flex flex-col'>
        <Header />

        <div className='grow flex flex-col'>
            <h1 className=''>
                {isRouteErrorResponse(Error)
                    ? 'Ooops...that page does not exist.'
                    : 'Something went wrong'
                }
            </h1>

            <p className=''>
                {isRouteErrorResponse(Error)
                    ? 'You can get back on track and manage your tasks with ease.'
                    : 'We are working on fixing this issue. Please try again later.'
                }
            </p>

            <div className=''>
                <Button asChild>
                    <Link to='/'> Return to Home</Link>
                </Button>

                <Button asChild variant='ghost'>
                    <Link to='/app/inbox'>View Inbox</Link>
                </Button>
            </div>
        </div>

        <Footer />
    </div>
  )
}

export default RootErrorBoundary
