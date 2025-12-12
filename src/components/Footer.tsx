/* Componets */
import { Separator } from '@/components/ui/separator';
import { SOCIAL_LINKS } from '@/constants/index';

const Footer = () => {
  return (
    <footer className='p-4 pb-0'>
        <div className='container min-h-16 py-4 bg-background border border-b-1 rounded-t-xl flex flex-col gap-1 items-center lg:flex-row lg:justify-between'>
            <p className='text-sm text-center'>
                &copy; 2025 ADHD Ally AI
            </p>

            <ul className='flex items-center flex-wrap'>
                {SOCIAL_LINKS.map(({href, label},index) => (
                    <li key={index} className='flex items-center'>
                        <a 
                            href={href}
                            className='text-sm text-muted-foreground hover:text-foreground' 
                            target="_blank"
                        >
                            {label}
                        </a>
                        {/* Link | Link | Link */}
                        {index !== SOCIAL_LINKS.length - 1 && (<Separator orientation='vertical' className='h-3 mx-3'/>)}
                    </li>
                ))}
            </ul>
        </div>
    </footer>
  )
}

export default Footer
