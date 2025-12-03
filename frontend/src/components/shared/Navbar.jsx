import React from "react";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User2, LogOut } from "lucide-react"; // added icons
import { Link } from "react-router-dom";


const Navbar = () => {
  const User = false
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
                <Link to = "/login"><Button variant="outline" className="bg-orange-200 
                hover:bg-orange-300">Login</Button></Link>
                <Link to= "/signup"><Button  variant = "outline" className ="bg-orange-200 hover:bg-orange-300">Signup</Button></Link>
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
