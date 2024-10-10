import { redirect } from "next/navigation";

export default function TinaCMSAdminPage() {
  // Redirect to the admin page
  //! This is a hacky way to redirect to the admin page
  //! Due to using the  output: "export" which is needed for GitHub Pages
  redirect("/admin/index.html");
}
