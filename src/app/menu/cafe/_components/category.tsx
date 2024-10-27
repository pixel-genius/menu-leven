import { usePathname, useRouter } from "next/navigation";

const Category = ({
  imageUrl,
  name,
  id,
}: {
  imageUrl?: string;
  name: string;
  id: number;
}) => {
  console.log({ imageUrl, name });
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div
      onClick={() => router.push(pathname + "#" + id)}
      className="bg-[#028066] rounded-2xl flex-shrink-0 basis-[100px]  p-2 flex flex-col items-center justify-center"
    >
      <div>
        {imageUrl && (
          <img
            src={imageUrl}
            alt="menu"
            className="w-14 h-14 filter invert brightness-0" // apply filter styles here
          />
        )}
      </div>
      <p className="text-base font-medium text-white">{name}</p>
    </div>
  );
};

export default Category;
