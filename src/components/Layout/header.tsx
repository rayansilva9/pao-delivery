import { usePathname } from "next/navigation";



const Header: React.FC = () => {

  const page = usePathname()



  return (
    <>
      <div
        style={{ display: page == "/signIn" || page == '/signUp' ? 'none' : 'inline' }}
        className="fixed  top-0 w-full h-12 bg-blue-600"></div>
    </>
  );
}

export default Header;