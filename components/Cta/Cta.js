import { Icon } from "@iconify/react";
import Link from "next/link";
import React from "react";

function Cta({ children, link }) {
  return (
    <Link
      href={link}
      title="progetto"
      className="max-w-max border bg-primary dark:bg-purple border-primary dark:border-purple rounded-[32px] flex items-center px-6 py-2 gap-2 text-xl font-bold text-white dark:text-primary"
    >
      {children}
    </Link>
  );
}

export default Cta;
