import { NextResponse } from "next/server";
export async function GET() {
  const users = {
    nome: "Isaac ",
    idade: 32
  };

  return new NextResponse(JSON.stringify(users), {
    status: 200,
    statusText: "OK"
  });
}