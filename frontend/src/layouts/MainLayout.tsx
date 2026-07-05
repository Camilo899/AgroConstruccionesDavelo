import { Outlet } from "react-router-dom";

import { Footer, Navbar } from "@/components/layout";

export default function MainLayout() {
  return (
    <>
      <Navbar />

      <main className="pt-20">
        <Outlet />
      </main>

      <Footer />
    </>
  );
}