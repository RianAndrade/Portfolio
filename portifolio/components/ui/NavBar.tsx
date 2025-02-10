import { Button } from "@/components/ui/button"
import { buttonVariants } from "@/components/ui/button"


const NavBar = () => {
  return (
    <>
      <nav className="flex h-full w-30 p-10 sticky top-0 bg-gray-800 justify-between">
        <div>
          logo
        </div>
        <div className="p-4">
          <Button className={buttonVariants({ variant: "ghost" })}> About </Button>
          <Button className={buttonVariants({ variant: "ghost" })}> Projects </Button>
          <Button className={buttonVariants({ variant: "ghost" })}> Contact </Button>
        </div>
      </nav>
    </>
  )
}

export default NavBar;
