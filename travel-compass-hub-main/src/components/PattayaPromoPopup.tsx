import { useEffect, useMemo, useRef, useState } from "react";
import { X } from "lucide-react";
import { useNavigate } from "react-router-dom";

const promoImageUrl = "/images/pattaya-popup.png";

type PattayaPromoPopupProps = {
  /** Seconds before showing the popup (if not already triggered by scroll). */
  delaySeconds?: number;
  /** The element id on the home page that can trigger the popup when reached. */
  triggerSectionId?: string;
};

const STORAGE_KEY = "rs_pattaya_promo_dismissed_v1";

export default function PattayaPromoPopup({
  delaySeconds = 15,
  triggerSectionId = "packages",
}: PattayaPromoPopupProps) {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const triggeredRef = useRef(false);

  const dismissed = useMemo(() => {
    try {
      return localStorage.getItem(STORAGE_KEY) === "1";
    } catch {
      return false;
    }
  }, []);

  const dismiss = () => {
    setOpen(false);
    try {
      localStorage.setItem(STORAGE_KEY, "1");
    } catch {
      // ignore
    }
  };

  const showOnce = () => {
    if (dismissed) return;
    if (triggeredRef.current) return;
    triggeredRef.current = true;
    setOpen(true);
  };

  useEffect(() => {
    if (dismissed) return;

    const timer = window.setTimeout(() => showOnce(), delaySeconds * 1000);

    const el = document.getElementById(triggerSectionId);
    let observer: IntersectionObserver | null = null;

    if (el && "IntersectionObserver" in window) {
      observer = new IntersectionObserver(
        (entries) => {
          if (entries.some((e) => e.isIntersecting)) {
            showOnce();
          }
        },
        { root: null, threshold: 0.25 }
      );
      observer.observe(el);
    }

    return () => {
      window.clearTimeout(timer);
      observer?.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [delaySeconds, triggerSectionId, dismissed]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[120] flex items-end justify-center p-4 sm:items-center">
      {/* Backdrop */}
      <button
        type="button"
        aria-label="Close promotion"
        onClick={dismiss}
        className="absolute inset-0 bg-foreground/40 backdrop-blur-[2px]"
      />

      {/* Card */}
      <div
        role="button"
        tabIndex={0}
        onClick={() => {
          dismiss();
          navigate("/hot-deals#pattaya-group");
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            dismiss();
            navigate("/hot-deals#pattaya-group");
          }
        }}
        className="relative w-full max-w-sm overflow-hidden rounded-2xl border border-border bg-card shadow-[0_20px_60px_hsl(var(--foreground)/0.25)] cursor-pointer"
        aria-label="Open Pattaya Hot Deal details"
      >
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            dismiss();
          }}
          className="absolute right-2 top-2 z-10 inline-flex h-9 w-9 items-center justify-center rounded-full bg-background/70 text-foreground backdrop-blur-md transition-colors hover:bg-background"
          aria-label="Close"
        >
          <X className="h-4 w-4" aria-hidden="true" />
        </button>

        <div className="bg-muted/40">
          <img
            src={promoImageUrl}
            alt="Pattaya tour package offer"
            className="w-full max-h-[62vh] object-contain"
            loading="lazy"
            draggable={false}
          />
        </div>

        <div className="p-4 sm:p-5">
          <p className="text-sm font-medium text-foreground">Pattaya Hot Deal</p>
          <p className="text-sm text-muted-foreground">Tap this banner to view package details</p>
        </div>
      </div>
    </div>
  );
}
