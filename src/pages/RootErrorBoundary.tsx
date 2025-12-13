/* Node modules*/
import {isRouteErrorResponse, useRouteError, Link } from "react-router";

/* Components */
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

/* Assests */
import { pageNotFound} from '@/assets';


const RootErrorBoundary = () => {
    const error = useRouteError();

    return (
        <div className='min-h-[100dvh] flex flex-col'>
            <Header />

            <div className='grow container flex flex-col justify-center items-center pt-32 pb-12 '>
                <h1 className='text-3xl font-semibold text-center sm:text-4xl'>
                    {isRouteErrorResponse(Error)
                        ? 'Ooops...that page does not exist.'
                        : 'Something went wrong'
                    }
                </h1>

                <p className='text-muted-foreground max-w-[55ch] text-center pt-3 pb-6 sm:text-md'>
                    {isRouteErrorResponse(Error)
                        ? 'You can get back on track and manage your tasks with ease.'
                        : 'We are working on this issue. Please try again later.'
                    }
                </p>

                <div className='flex gap-2'>
                    <Button asChild>
                        <Link to='/'> Return to Home</Link>
                    </Button>

                    <Button asChild variant='ghost'>
                        <Link to='/app/inbox'>View Inbox</Link>
                    </Button>
                </div>
                
                <figure className='mt-10'>
                    <img src={pageNotFound} alt='404 page' height={373} width={700}/>
                </figure>
            </div>

            <Footer />
        </div>
    )
}

export default RootErrorBoundary

//text-muted-foreground: It turns the text a subtle gray color (or a dimmed version of your primary color) to indicate that the text is secondary information, like a subtitle, a caption, or a placeholder.
