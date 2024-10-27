import Image from "next/image";
import Logo from "../../public/svg/logo";

export default function Home() {
  return (
    <div className="container mx-auto">
      <div className="flex items-center justify-center h-screen ">
        <div className="">
          <Logo />
        </div>
      </div>
    </div>
  );
}
