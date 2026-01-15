export function NoiseOverlay({ className = "" }: { className?: string }) {
    return (
        <div className={`pointer-events-none absolute inset-0 z-[1] opacity-[0.05] mix-blend-overlay overflow-hidden ${className}`}>
            <svg className="h-full w-full">
                <filter id="noiseFilter">
                    <feTurbulence
                        type="fractalNoise"
                        baseFrequency="0.6"
                        stitchTiles="stitch"
                    />
                </filter>
                <rect width="100%" height="100%" filter="url(#noiseFilter)" />
            </svg>
        </div>
    );
}
