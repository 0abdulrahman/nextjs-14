"use client";

import { SessionProvider, useSession } from "next-auth/react";
import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function Provider({ children }: Props) {
  const session = useSession();

  return <SessionProvider session={session.data}>{children}</SessionProvider>;
}
