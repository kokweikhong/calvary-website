import type { Database } from "@/utils/database.types";
import type { TypedSupabaseClient } from "@/utils/types";
import { createBrowserClient } from "@supabase/ssr";
import { useMemo } from "react";

let client: TypedSupabaseClient;

function getSupabaseBrowserClient() {
  if (client) {
    return client;
  }
  client = createBrowserClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
  return client;
}

function useSupabaseBrowser() {
  return useMemo(getSupabaseBrowserClient, []);
}

export default useSupabaseBrowser;
