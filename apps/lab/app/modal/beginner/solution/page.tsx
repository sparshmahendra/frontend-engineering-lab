"use client";

import { useState } from "react";
import { Modal } from "@repo/components/modal/beginner/solution/Modal";

export default function BeginnerModalSolutionPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-12">
      <div className="mx-auto max-w-3xl">
        <p className="text-sm font-medium uppercase tracking-wide text-gray-500">
          Reference Solution
        </p>

        <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900">
          Modal — Beginner
        </h1>

        <p className="mt-4 text-gray-600">
          This is the reference implementation for the Beginner Modal
          exercise.
        </p>

        <button
          type="button"
          onClick={() => setIsModalOpen(true)}
          className="mt-8 rounded-lg bg-black px-5 py-3 font-medium text-white hover:bg-gray-800"
        >
          Open Settings
        </button>

        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      </div>
    </main>
  );
}
