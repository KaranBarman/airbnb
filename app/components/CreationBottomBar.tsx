"use client";

import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import SubmitButton from "./SubmitButton";

const CreationBottomBar = () => {
  return (
    <>
      <div className="fixed w-full bottom-0 z-10 bg-white border-t h-24">
        <div className=" flex items-center justify-between mx-auto px-5 lg:px-10 h-full">
          <Link
            href={"/"}
            className={buttonVariants({ variant: "secondary", size: "lg" })}
          >
            Cancel
          </Link>
          <SubmitButton />
        </div>
      </div>
    </>
  );
};

export default CreationBottomBar;
