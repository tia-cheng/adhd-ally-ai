import { logo } from "@/assets";

const Logo = () => {
  return (
    <div className="flex items-center gap-5 font-semibold text-lg">
        <img src={logo} alt="lOGO" className="w-6 h-6" />
        ADHD Ally AI
    </div>
  )
}

export default Logo
