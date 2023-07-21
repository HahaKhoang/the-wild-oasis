import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://fzbwhgfblyyekzsosrla.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ6YndoZ2ZibHl5ZWt6c29zcmxhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODk5NjQ2NDcsImV4cCI6MjAwNTU0MDY0N30.gZsadAukXjXl4ncE_DT1PeqaI-mXlwKPbgmTQ23vYxI";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
