/*Node modules*/
import { Link } from 'react-router';

/* Components */
import { Button } from '@/components/ui/button';
import Head from '@/components/Head';

/* Assets */
import { heroBannerSm, heroBannerLg} from '@/assets'


const HomePage = () => {
  return (
    <>
      <Head title='ADHD Ally AI - AI-Powered To-Do List and Project Management App'/>
      
      <section>
        <div className='container !px-8 grid grid-cols-1 gap-6 items-center xl:gap-12 xl:grid-cols-[1fr_1.5fr]'>
          <div className='flex flex-col items-center text-center space-y-2 lg:text-left lg:items-left lg:space-y-6'>
            <h1 className='text-4xl font-semibold max-w-[22ch] md:text-5xl lg:text-6xl xl:text-5xl'>
              Simplify Your Work and Life with{' '}
              <span className='inline-flex bg-gradient-to-t from-primary/30 to-primary/10 rounded-2xl px-2'>AI-Powered</span> Task Management
            </h1>

            <p className='max-w-[48ch] text-foreground/90 md:text-lg lg:text-xl'>
              Simplify life for both you and your team with the world's #1 task
              manager and to-do list app.
            </p>

            <Button asChild size='lg'>
              <Link to='/register'>Start for FREE</Link>
            </Button>
          </div>

          <figure className='bg-secondary rounded-2xl overflow-hidden aspect-square max-md:max-w-[480px] max-md:mx-auto md:aspect-video'>
            <img src={heroBannerSm} width={480} height={480} alt='ADHD Ally AI website' className='md:hidden'/>
            <img src={heroBannerLg} width={960} height={540} alt='ADHD Ally AI website' className='max-md:hidden'/>
            {/* max-md:hidden is a responsive design utility in Tailwind CSS. It translates to: "Hide this element on screens smaller than the 'Medium' breakpoint (tablets and mobile). */}
          </figure>
        </div>
      </section>
    </>
  );
};

export default HomePage

// Use <>...</> when you need to group multiple elements together but don't want to add an extra <div> to your actual HTML.
// Result in the Browser (HTML):
// HTML
// <header>...</header>
// <main>...</main>

//<span>: Think of it like a Highlighter Pen. It changes the look of specific words, but doesn't move them to a new line.

//max-w-[12ch]: 12 characters
//!px-8 important, force

//grid-cols-[1fr_1.5fr] (The Ratio)
//Left Column (1fr): Takes up 1 part of the space.
//Right Column (1.5fr): Takes up 1.5 parts of the space.