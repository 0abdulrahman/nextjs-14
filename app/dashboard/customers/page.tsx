"use client";

import { SessionProvider } from "next-auth/react";
import ClientComponent from "./ClientComponent";

export default function Page() {
  return (
    <div>
      <SessionProvider>
      Customers
      <ClientComponent />
      </SessionProvider>
    </div>
  );
}
