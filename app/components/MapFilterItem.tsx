"use client";

import React, { useCallback } from "react";
import { categoryItems } from "../lib/filterItem";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";

const MapFilterItem = () => {
  const searchParams = useSearchParams();
  const search = searchParams.get("filter");

  const pathname = usePathname();

  const queryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());

      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  return (
    <div className="flex gap-x-10 mt-5 w-full overflow-x-scroll no-scrollbar">
      {categoryItems.map((category) => (
        <Link
          key={category.id}
          href={pathname + "?" + queryString("filter", category.name)}
          className={cn(
            search === category.name
              ? "border-b-2 border-black pb-2 flex-shrink-0"
              : "opacity-70 flex-shrink-0",
            "flex flex-col gap-y-2 items-center"
          )}
        >
          <div className="relative w-6 h-6">
            <Image
              src={category.imageUrl}
              alt="category image"
              className="w-6 h-6"
              width={24}
              height={24}
            />
          </div>
          <p className="text-xs font-medium">{category.title}</p>
        </Link>
      ))}
    </div>
  );
};

export default MapFilterItem;
