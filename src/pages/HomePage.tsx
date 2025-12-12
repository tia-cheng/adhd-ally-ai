/*Node modules*/
import { Link } from 'react-router';

/* Components */
import { Button } from '@/components/ui/button';
import Head from '@/components/Head';


const HomePage = () => {
  return (
    <>
      <Head title='ADHD Ally AI - AI-Powered To-Do List and Project Management App'/>
      <section>
        <div className=''>
          <div className=''>
            <h1 className=''>
              Simplify Your Work and Life with AI-Powered Task Management
            </h1>
          </div>
        </div>
      </section>
    </>
  )
}

export default HomePage

// Use <>...</> when you need to group multiple elements together but don't want to add an extra <div> to your actual HTML.
// Result in the Browser (HTML):
// HTML
// <header>...</header>
// <main>...</main>