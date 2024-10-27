import Image from "next/image";
import Glassicon from "../../../../public/icon/glass";
import Tomanicon from "../../../../public/icon/toman";
import Card from "./_components/card";

const Cafepage = () => {
  return (
    <div className="mx-auto max-w-[375px] px-6 pt-14 h-screen bg-backgrund rounded-lg font-peyda">
      <div className="bg-[#F6D5AE] w-[335px] h-full rounded-t-full flex flex-col items-center px-2 ">
        {/* logo cafe */}
        <div className="pt-14">
          <Image
            src={"/logocafe.png"}
            alt="logocafe"
            height={130}
            width={270}
          />
        </div>
        {/* item section */}
        <div className="flex overflow-x-auto items-center justify-start gap-2 w-full py-4 scrollbar scrollbar-thumb-gray-400 scrollbar-track-gray-100">
          <div className="bg-[#028066] rounded-lg p-2 flex flex-col items-center justify-center">
            <Glassicon />
            <p className="text-base font-medium text-white">بار گرم</p>
          </div>
          <div className="bg-[#028066] rounded-lg p-2 flex flex-col items-center justify-center">
            <Glassicon />
            <p className="text-base font-medium text-white">بار گرم</p>
          </div>
          <div className="bg-[#028066] rounded-lg p-2 flex flex-col items-center justify-center">
            <Glassicon />
            <p className="text-base font-medium text-white">بار گرم</p>
          </div>
          <div className="bg-[#028066] rounded-lg p-2 flex flex-col items-center justify-center">
            <Glassicon />
            <p className="text-base font-medium text-white">بار گرم</p>
          </div>
          <div className="bg-[#028066] rounded-lg p-2 flex flex-col items-center justify-center">
            <Glassicon />
            <p className="text-base font-medium text-white">بار گرم</p>
          </div>
        </div>
        {/* the menu */}
        <div>
          <h1 className="text-right text-lg font-bold text-black pb-2 ">
            بار گرم
          </h1>
          <div className="flex flex-col items-center gap-2">
            {/* card component */}
            <Card
              imageUrl={"/cafi.png"}
              title={"لته"}
              description={"کارامل - وانیل-فندوق-دارچین"}
              price={2000}
            />
            <Card
              imageUrl={"/cafi2.png"}
              title={"لته"}
              description={"کارامل - وانیل-فندوق-دارچین"}
              price={2000}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cafepage;
