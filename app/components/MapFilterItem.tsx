"use client";

import React from "react";
import { categoryItems } from "../lib/filterItem";
import Link from "next/link";
import Image from "next/image";

const MapFilterItem = () => {
  return (
    <div className="flex gap-x-10 mt-5 w-full overflow-x-scroll no-scrollbar">
      {categoryItems.map((category) => (
        <Link key={category.id} href={""}>
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
