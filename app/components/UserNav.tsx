import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LogIn, LogOut, MenuIcon, SquarePen, UserCircle2 } from "lucide-react";
import React from "react";
import {
  RegisterLink,
  LoginLink,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

const UserNav = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="rounded-full border px-2 py-2 lg:px-4 lg:py-2 flex items-center gap-x-3">
          <MenuIcon className="w-6 h-6 lg:w-5 lg:h-5" />
          <UserCircle2 className="w-6 h-6 text-muted-foreground hidden lg:block" />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[200px] rounded-[8px]">
        {user ? (
          <DropdownMenuItem>
            <LogoutLink className="w-full flex justify-between">
              Logout <LogOut className="h-4 w-4" />{" "}
            </LogoutLink>
          </DropdownMenuItem>
        ) : (
          <>
            <DropdownMenuItem>
              <RegisterLink className="w-full flex justify-between">
                Register <SquarePen className="h-4 w-4" />{" "}
              </RegisterLink>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <LoginLink className="w-full flex justify-between">
                Login <LogIn className="h-4 w-4" />{" "}
              </LoginLink>
            </DropdownMenuItem>
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserNav;
