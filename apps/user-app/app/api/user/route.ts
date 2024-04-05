// import { NextResponse } from "next/server";
// import { PrismaClient } from "@repo/db/client";

// const client = new PrismaClient();

// export const GET = async () => {
//   const user = await client.user.findMany({
//     where: {
//       email: "kirankishore@gmail.com",
//     },
//   });
//   return NextResponse.json({
//     message: "User Fetched",
//     User: user,
//   });
// };

import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "../../lib/auth";

export const GET = async () => {
  const session = await getServerSession(authOptions);
  if (session.user) {
    return NextResponse.json({
      user: session.user,
    });
  }
  return NextResponse.json(
    {
      message: "You are not logged in",
    },
    {
      status: 403,
    }
  );
};
