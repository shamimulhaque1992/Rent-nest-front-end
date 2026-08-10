import { AppNavBar } from "@/components/shared/AppNavBar";
import { AppFooter } from "@/components/shared/AppFooter";
import React from "react";
import { getMyProfile } from "../(authGroup)/auth/_actions/getMyProfile";

const PublicLayout = async ({ children }: { children: React.ReactNode }) => {
  const user = await getMyProfile();
  return (
    <div className="min-h-screen bg-muted/40 flex flex-col">
      <AppNavBar user={user} />
      <div className="flex flex-1 items-center justify-center">
        {children}
      </div>
      <AppFooter user={user}/>
    </div>
  );
};

export default PublicLayout;
