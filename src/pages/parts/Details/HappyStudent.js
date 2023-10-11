import React from "react";
import Star from "pages/components/Star";
export default function HappyStudent({ data }) {
  return (
    <div className="mt-8">
      <Star data={data?.rating ?? 0} width={26} height={26}></Star>
      <p className="text-gray-600 mt-1">{data?.note ?? "Student Response"}</p>
      <div className="rounded-full overflow-hiden">
        <img
          src={
            data?.users.avatar ??
            `${process.env.NEXT_PUBLIC_BASE_URL}/images/default-user.jpg`
          }
          alt={data?.users.name ?? "Student Name"}
          className="object-cover h-14 w-14 rounded-full"
        />
        <h2 className="text-gray-900 text-lg">
          {data?.users.name ?? "Student Name"}
        </h2>
        <h3 className="text-gray-600 text-sm">
          {data?.users.role ?? "Student Role"}
        </h3>
      </div>
    </div>
  );
}
