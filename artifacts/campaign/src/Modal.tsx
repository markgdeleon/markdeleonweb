import { useEffect, useRef } from "react";

interface ModalProps {
  client: string;
  videoUrl: string;
  onClose: () => void;
}

export default function Modal({ client, videoUrl, onClose }: ModalProps) {
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === overlayRef.current) onClose();
  };

  return (
    <div
      className="modal-overlay"
      ref={overlayRef}
      onClick={handleOverlayClick}
      role="dialog"
      aria-modal="true"
      aria-label={`${client} video`}
    >
      <div className="modal-box">
        <div className="modal-header">
          <span className="modal-title">{client}</span>
          <button className="modal-close" onClick={onClose} aria-label="Close">
            CLOSE
          </button>
        </div>
        <div className="modal-player">
          <iframe
            src={videoUrl}
            title={client}
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}
