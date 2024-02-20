"use client";

import { useUpdateSearchParams } from "@/hooks/useUpdateSearchParams";

export default function OverlayBackdrop() {
  const { searchParams, deleteSearchParam } = useUpdateSearchParams();
  const showBackdrop = searchParams.get("backdrop");

  if (!showBackdrop) return null;

  return (
    <div
      className="fixed inset-0 z-40 h-screen w-screen bg-black/10"
      onClick={() => deleteSearchParam("backdrop")}
    ></div>
  );
}
