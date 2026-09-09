"use client";

import { useState } from "react";
import { Modal } from "./Modal";
import "./styles.css";

export default function Page() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="page">
      <h1>Settings</h1>

      <p>
        This page demonstrates the Beginner Modal exercise.
      </p>

      <button
        type="button"
        onClick={() => setIsModalOpen(true)}
        className="open-button"
      >
        Open Settings
      </button>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </main>
  );
}
