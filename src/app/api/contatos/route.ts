import { NextResponse } from "next/server";

export async function GET() {
  const contatos = [
    {
      nome: "isaac",
      email: "isaac@uol.com"
    },
    {
      nome: "joao",
      email: "joao@uol.com"
    }
  ]

  return new NextResponse(JSON.stringify(contatos), {
    status: 200,
    statusText: "OK"
  });
}