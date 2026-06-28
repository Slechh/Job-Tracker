import { NextResponse } from "next/server";

import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
  const body = await request.json();

  const job = await prisma.job.create({
    data: {
      company: body.company,
      position: body.position,
      location: body.location,
      salary: body.salary,
      technologies: body.technologies,
      status: body.status,
      link: body.link,
      description: body.description,
      notes: body.notes,
    },
  });

  return NextResponse.json(job);
}
