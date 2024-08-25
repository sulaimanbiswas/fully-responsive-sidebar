"use client";
type Props = {};

export default function ContactsPage({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const type = searchParams.type as string;

  return (
    <>
      <div className="flex h-screen items-center justify-center"></div>
    </>
  );
}
