/**
 * ExifTag — the site's signature structural device.
 * Renders real-feeling camera metadata (aperture / shutter / ISO / focal length)
 * as a small mono-type overlay on images and videos across the site.
 */
export default function ExifTag({ category, aperture, shutter, iso, focal, index, className = '' }) {
  return (
    <div
      className={`pointer-events-none absolute bottom-0 left-0 right-0 flex items-end justify-between gap-3 p-3 font-mono text-[10px] uppercase tracking-wider text-ivory/80 ${className}`}
    >
      <span className="flex items-center gap-2">
        {category && (
          <span className="border border-gold/50 bg-ink/60 px-2 py-1 text-gold backdrop-blur-sm">
            {category}
          </span>
        )}
        {index && <span className="text-ivory/50">{index}</span>}
      </span>
      <span className="hidden sm:flex items-center gap-2 bg-ink/60 px-2 py-1 backdrop-blur-sm">
        {aperture && <span>ƒ/{aperture}</span>}
        {shutter && <span className="text-ivory/40">·</span>}
        {shutter && <span>{shutter}s</span>}
        {iso && <span className="text-ivory/40">·</span>}
        {iso && <span>ISO {iso}</span>}
        {focal && <span className="text-ivory/40">·</span>}
        {focal && <span>{focal}mm</span>}
      </span>
    </div>
  );
}
