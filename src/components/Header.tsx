import { Link } from "react-router";
import Logo from "@/components/Logo";

const Header = () => {
  return (
    <header className ="">
        <div className ="">
            <Link to ="/">
                <Logo />
            </Link>
            Hi there!
        </div>
    </header>
  )
}

export default Header
