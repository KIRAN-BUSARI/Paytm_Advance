import React from "react";

export function Card({
  title,
  children,
}: {
  title: string;
  children?: React.ReactNode;
}): JSX.Element {
  return (
    <div className="border p-4 rounded-lg">
      <h1 className="text-xl text-white border-b pb-2">
        {title}
      </h1>
      <p>{children}</p>
    </div>
  );
}