import React, { PropsWithChildren } from "react";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <main className="flex min-h-screen w-full items-center justify-center">
      <div>{children}</div>;
    </main>
  );
};

export default Layout;
