type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function Modal({ isOpen, onClose }: ModalProps) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50">
      <div
        role="dialog"
        aria-labelledby="modal-title"
        className="w-[min(90vw,32rem)] rounded-xl bg-white p-6 shadow-xl"
      >
        <div className="flex items-center justify-between">
          <h2
            id="modal-title"
            className="text-xl font-semibold"
          >
            Settings
          </h2>

          <button
            type="button"
            onClick={onClose}
            className="rounded px-2 py-1 text-xl hover:bg-gray-100"
            aria-label="Close settings"
          >
            ×
          </button>
        </div>

        <div className="mt-4">
          <p className="text-gray-700">
            This is the settings modal.
          </p>
        </div>
      </div>
    </div>
  );
}
