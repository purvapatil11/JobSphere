import React from "react";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User2, LogOut } from "lucide-react"; // added icons

const Navbar = () => {
  const User = true
  return (
    <div className="bg-white">
      <div className="flex items-center justify-between mx-auto max-w-7xl h-16">

        <h1 className="text-2xl font-bold">
          Job<span className="text-[#F83002]">Portal</span>
        </h1>

        <div className="flex items-center gap-12">

          <ul className="flex font-medium items-center gap-5">
            <li>Home</li>
            <li>Jobs</li>
            <li>Browse</li>
          </ul>
        {
            !User ? (
              <div className="flex items-center gap-2">
                <Button variant="outline">Login</Button>
                <Button className="bg-[#7c51c7] hover:bg-[#5b30a6]">Signup</Button>

                </div>
            ) : (
              <Popover>
            <PopoverTrigger asChild>
              <div className="flex items-center gap-4 cursor-pointer">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </div>
            </PopoverTrigger>

            <PopoverContent className="w-80">
              {/* Profile Header */}
              <div className="flex items-center gap-4 mb-4">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="font-medium">Purva Patil</h4>
                  <p className="text-sm text-gray-600">Student at AISSMS IOIT PUNE</p>
                </div>
              </div>

              {/* Options */}
              <div className="flex flex-col gap-3">

                <div className="flex items-center gap-2 cursor-pointer">
                  <User2 size={18} />
                  <Button variant="link">View Profile</Button>
                </div>

                <div className="flex items-center gap-2 cursor-pointer">
                  <LogOut size={18} />
                  <Button variant="link">Logout</Button>
                </div>

              </div>
            </PopoverContent>
          </Popover>
            )
        }
          

        </div>
      </div>
    </div>
  );
};

export default Navbar;
