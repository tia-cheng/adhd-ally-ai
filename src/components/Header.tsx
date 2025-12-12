import { Link } from "react-router";
import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
const Header = () => {
  return (
    <header className ="fixed top-0 left-0 w-full p-4">
        <div className ="container h-16 border backdrop-blur-3xl rounded-xl flex justify-between items-center ">
            <Link to ="/">
                <Logo />
            </Link>

            <div className ="flex items-center gap-2">
                <Button asChild variant="ghost"> 
                    {/* Why use asChild? It is used when you want an element to look like a button but act like a link. */}
                    <Link to ="/login">Log In</Link>
                </Button>

                <Button asChild>
                    <Link to ="/register">Start for FREE</Link>
                </Button>
            </div>
        </div>
    </header>
  )
}

export default Header

//flex is to put items in a flexbox. usually pair it with items-center, justify-between, gap-4, flex-col
//fixed: makes the header stay at the top when scrolling
//p-4: padding of 1rem (16px) on all sides
//container: centers the content and adds horizontal padding