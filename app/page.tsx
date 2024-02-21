import { Button } from "@/components/ui/button";
import { Medal, Search } from "lucide-react";
import Image from "next/image";
import Navbar from "./components/Navbar";
import MapFilterItem from "./components/MapFilterItem";

export default function Home() {
  return (
    <div className="container mx-auto px-5 lg:px-10 py-5 ">
      <MapFilterItem />
    </div>
  );
}
