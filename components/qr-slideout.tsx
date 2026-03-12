"use client";

import { useState } from "react";

const SITE_URL = "https://uyrdu.com";

export function QrSlideout() {
  const [open, setOpen] = useState(false);

  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=240x240&data=${encodeURIComponent(SITE_URL)}&bgcolor=fff7f1&color=2c0b5a&margin=12`;

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="fixed bottom-20 right-4 z-40 flex items-center gap-2 rounded-full border-2 border-border bg-card px-4 py-2.5 text-sm font-semibold text-foreground shadow-lg transition-all hover:scale-105 active:scale-95 sm:bottom-4"
        aria-label="Show QR code"
      >
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M3 3h8v8H3V3zm2 2v4h4V5H5zm8-2h8v8h-8V3zm2 2v4h4V5h-4zM3 13h8v8H3v-8zm2 2v4h4v-4H5zm10-2h2v2h-2v-2zm4 0h2v2h-2v-2zm-4 4h2v2h-2v-2zm2 2h2v2h-2v-2zm2-2h2v2h-2v-2z" />
        </svg>
        Share
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-end justify-center sm:items-center"
          onClick={() => setOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="QR code to share this page"
        >
          <div className="absolute inset-0 bg-foreground/40 backdrop-blur-sm" />
          <div
            className="relative w-full max-w-sm animate-[slideUp_0.25s_ease-out] rounded-t-3xl border-2 border-border bg-card p-6 shadow-2xl sm:rounded-3xl sm:animate-[fadeIn_0.2s_ease-out]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="absolute right-4 top-4 rounded-lg p-1 text-muted-foreground hover:text-foreground"
              aria-label="Close"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="flex flex-col items-center gap-4 text-center">
              <h3 className="font-display text-lg tracking-tight text-foreground">
                Share Uniquely You!
              </h3>
              <p className="text-sm text-muted-foreground">
                Scan to visit uyrdu.com
              </p>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={qrUrl}
                alt="QR code linking to uyrdu.com"
                width={240}
                height={240}
                className="rounded-2xl border-2 border-border"
              />
              <p className="text-xs text-muted-foreground">
                Screenshot this and share it anywhere
              </p>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes slideUp {
          from { transform: translateY(100%); }
          to { transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </>
  );
}
