"use client";

import { createClient } from "@v1/supabase/client";
import { Button } from "../../../../packages/ui/src/components/button";
import { Icons } from "../../../../packages/ui/src/components/icons";

export function SignOut() {
  const supabase = createClient();

  const handleSignOut = () => {
    supabase.auth.signOut();
  };

  return (
    <Button
      onClick={handleSignOut}
      variant="outline"
      className="font-mono gap-2 flex items-center"
    >
      <Icons.SignOut className="size-4" />
      <span>Sign out</span>
    </Button>
  );
}
