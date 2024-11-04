import { usePathname, useRouter } from "next/navigation";

const Category = ({
  imageUrl,
  name,
  id,
  isActive,
  onClick,
}: {
  imageUrl?: string;
  name: string;
  id: number;
  isActive?: boolean;
  onClick?: () => void;
}) => {
  console.log({ imageUrl, name });
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div
      onClick={() => {
        router.push(pathname + "#" + id);
        onClick && onClick();
      }}
      className={
        " transition rounded-2xl flex-shrink-0 basis-[100px]  p-2 flex flex-col items-center justify-center" +
        (isActive ? " bg-white" : " bg-[#028066]")
      }
    >
      <div>
        {imageUrl && (
          <img
            src={imageUrl}
            alt="menu"
            className={
              "w-14 h-14 " + (isActive ? "" : "filter invert brightness-0")
            } // apply filter styles here
          />
        )}
      </div>
      <p
        className={
          "text-base font-medium " +
          (isActive ? " text-[#028066]" : " text-white")
        }
      >
        {name}
      </p>
    </div>
  );
};

export default Category;
