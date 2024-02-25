import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useCountries } from "../lib/GetCountries";

type Props = {
  description: string;
  imagePath: string;
  location: string;
  price: number;
};

const ListingCard = ({ description, imagePath, location, price }: Props) => {
  const { getCountryByValue } = useCountries();
  const country = getCountryByValue(location);

  return (
    <div className="flex flex-col">
      <div className="relative h-72">
        <Image
          src={`https://tujhiluhnucsjayideey.supabase.co/storage/v1/object/public/images/${imagePath}`}
          alt="Image of home"
          fill
          className="rounded-lg h-full object-cover"
        />
      </div>
      <Link href={"/"} className="mt-2">
        <h3 className="font-medium text-base">
          {country?.flag} {country?.label} / {country?.region}
        </h3>
        <p className="text-muted-foreground text-sm line-clamp-2">
          {description}
        </p>
        <p className="pt-2 text-muted-foreground">
          <span className="font-medium text-black">₹{price}</span> Night
        </p>
      </Link>
    </div>
  );
};

export default ListingCard;
