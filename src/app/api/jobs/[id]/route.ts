import { NextResponse } from "next/server";

import { prisma } from "@/lib/prisma";

type RouteProps = {
  params: Promise<{
    id: string;
  }>;
};

export async function PUT(request: Request, { params }: RouteProps) {
  const body = await request.json();
  const { id } = await params;

  try {
    const job = await prisma.job.update({
      where: {
        id: Number(id),
      },
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
  } catch {
    return NextResponse.json({ message: "Job not found" }, { status: 404 });
  }
}

export async function DELETE(_request: Request, { params }: RouteProps) {
  const { id } = await params;

  try {
    const job = await prisma.job.delete({
      where: {
        id: Number(id),
      },
    });

    return NextResponse.json(job);
  } catch {
    return NextResponse.json({ message: "Job not found" }, { status: 404 });
  }
}
