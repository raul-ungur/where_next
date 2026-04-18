import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://mwhtxzjwxhxezzivfiay.supabase.co";
const supabaseKey = "sb_publishable_ih22oG5Rz4CByyOfgEwMJw_Z6if0tmK";

export const supabase = createClient(supabaseUrl, supabaseKey);
