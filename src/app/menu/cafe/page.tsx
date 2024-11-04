"use client";

// {
//   "data": [
//       {
//           "id": 3,
//           "documentId": "t1qb3e12soj45hv66cok9v9l",
//           "name": "بار گرم",
//           "createdAt": "2024-10-27T17:51:44.643Z",
//           "updatedAt": "2024-10-27T17:54:04.174Z",
//           "publishedAt": "2024-10-27T17:54:04.197Z",
//           "icon": {
//               "id": 1,
//               "documentId": "i401bfcih43goop5xfy6xr8x",
//               "name": "test.svg",
//               "alternativeText": null,
//               "caption": null,
//               "width": 10,
//               "height": 60,
//               "formats": null,
//               "hash": "test_5bf56ebd25",
//               "ext": ".svg",
//               "mime": "image/svg+xml",
//               "size": 1.24,
//               "url": "/uploads/test_5bf56ebd25.svg",
//               "previewUrl": null,
//               "provider": "local",
//               "provider_metadata": null,
//               "createdAt": "2024-10-27T17:51:40.531Z",
//               "updatedAt": "2024-10-27T17:53:59.667Z",
//               "publishedAt": "2024-10-27T17:51:40.534Z"
//           }
//       }
//   ],
// items:[
//   {
//       "id": 2,
//       "documentId": "wwefn8qbmmcbv76yoypwdmev",
//       "name": "لاته",
//       "description": "کارامل - وانیل-فندوق-دارچین\n",
//       "price": 6000,
//       "createdAt": "2024-10-27T19:18:07.721Z",
//       "updatedAt": "2024-10-27T19:18:07.721Z",
//       "publishedAt": "2024-10-27T19:18:07.737Z"
//   }
// ]
//   "meta": {
//       "pagination": {
//           "page": 1,
//           "pageSize": 25,
//           "pageCount": 1,
//           "total": 1
//       }
//   }
// }

// export type APIResponse<T> = {
//   data: T;
//   meta: {
//     pagination: {
//       page: number;
//       pageSize: number;
//       pageCount: number;
//       total: number;
//     };
//   };
// };

// add axios reaponse tyoe
export type APIResponse<T> = AxiosResponse<{
  data: T;
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}>;

export type Categories = APIResponse<
  {
    id: number;
    documentId: string;
    name: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    icon: {
      id: number;
      documentId: string;
      name: string;
      alternativeText: string | null;
      caption: string | null;
      width: number;
      height: number;
      formats: string[] | null;
      hash: string;
      ext: string;
      mime: string;
      size: number;
      url: string;
      previewUrl: string | null;
      provider: string;
      provider_metadata: string | null;
      createdAt: string;
      updatedAt: string;
      publishedAt: string;
    };
    items: {
      id: number;
      documentId: string;
      name: string;
      description: string;
      price: number;
      createdAt: string;
      updatedAt: string;
      publishedAt: string;
      image: {
        id: number;
        documentId: string;
        name: string;
        alternativeText: string | null;
        caption: string | null;
        width: number;
        height: number;
        formats: string[] | null;
        hash: string;
        ext: string;
        mime: string;
        size: number;
        url: string;
        previewUrl: string | null;
        provider: string;
        provider_metadata: string | null;
        createdAt: string;
        updatedAt: string;
        publishedAt: string;
      };
    }[];
  }[]
>;

import Api, { BASE_URL_MEDIA } from "@/service/service";
import { AxiosResponse } from "axios";
import Image from "next/image";
import { Oval } from "react-loader-spinner";
import { useQuery } from "react-query";
import Card from "./_components/card";
import Category from "./_components/category";
import { useState } from "react";

const Cafepage = () => {
  const categoriesQuery = useQuery<Categories>({
    queryKey: ["categories"],
    queryFn: () =>
      Api.get(
        "/categories?populate[icon]=*&populate[items][populate][0]=image"
      ),
  });

  const [categoryId, setCategoryId] = useState<number | undefined>(undefined);

  const getImgUrl = (url?: string) => {
    if (!url) return undefined;
    return BASE_URL_MEDIA + url;
  };

  const categories = categoriesQuery.data?.data?.data;

  return (
    <div className="mx-auto relative max-w-[500px] flex justify-center px-6 pt-14 overflow-auto  bg-no-repeat bg-cover  font-peyda">
      <div className="mx-auto fixed -z-10 inset-0 max-w-[500px]  h-screen  bg-backgrund bg-no-repeat bg-cover  "></div>
      <div className="bg-[#F6D5AE]  min-h-[calc(100vh-56px)] w-full pb-8 rounded-t-full flex flex-col items-center px-2 ">
        {/* logo cafe */}
        <div className="pt-14">
          <Image
            src={"/logocafe.png"}
            alt="logocafe"
            height={130}
            width={270}
          />
        </div>

        {categoriesQuery.isLoading && (
          <div className="flex flex-col flex-1 justify-center items-center gap-2">
            {/* looding circle */}
            <Oval
              visible={true}
              height="30"
              width="30"
              color="#028066"
              strokeWidth={5}
              ariaLabel="oval-loading"
              wrapperStyle={{}}
              wrapperClass=""
            />
            {/* loading text */}
            <p className="text-center text-[#028066] text-sm font-medium">
              ممنون از صبرتون
            </p>
          </div>
        )}

        {!categoriesQuery.isLoading && (
          <div className="flex gap-2 w-full overflow-x-auto flex-shrink-0  scrollbar scrollbar-thumb-gray-400 scrollbar-track-gray-100">
            {categories?.map((category) => (
              <div className="py-3 flex-shrink-0">
                <Category
                  onClick={() => setCategoryId(category.id)}
                  isActive={categoryId === category.id}
                  id={category.id}
                  imageUrl={getImgUrl(category.icon.url)}
                  name={category.name}
                />
              </div>
            ))}
          </div>
        )}

        {/* item section */}

        {/* the menu */}
        {!categoriesQuery.isLoading && (
          <div>
            {categories?.map((category) => {
              if (category.items?.length === 0) return null;

              return (
                <div className="py-3 flex-shrink-0">
                  <h1
                    id={category.id?.toString()}
                    className="text-right text-lg font-bold text-black pb-2 "
                  >
                    {category.name}
                  </h1>
                  <div className="flex flex-col gap-3">
                    {category.items?.map((item) => (
                      <Card
                        // id={item.id}
                        imageUrl={getImgUrl(item?.image?.url)}
                        title={item.name}
                        description={item.description}
                        price={item.price}
                      />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Cafepage;
