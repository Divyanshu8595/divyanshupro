'use client';

export default function MeshGradient() {
  return (
    <div className="absolute inset-0 overflow-hidden -z-10">
      {/* Primary blob - orange */}
      <div
        className="absolute w-[600px] h-[600px] rounded-full opacity-40 blur-[120px] animate-mesh"
        style={{
          background: 'radial-gradient(circle, var(--mesh-orange) 0%, transparent 70%)',
          top: '-10%',
          left: '-5%',
        }}
      />
      {/* Secondary blob - red */}
      <div
        className="absolute w-[500px] h-[500px] rounded-full opacity-30 blur-[100px] animate-mesh-2"
        style={{
          background: 'radial-gradient(circle, var(--mesh-red) 0%, transparent 70%)',
          top: '20%',
          right: '-10%',
        }}
      />
      {/* Tertiary blob - green */}
      <div
        className="absolute w-[400px] h-[400px] rounded-full opacity-30 blur-[80px] animate-mesh-3"
        style={{
          background: 'radial-gradient(circle, var(--mesh-green) 0%, transparent 70%)',
          bottom: '5%',
          left: '30%',
        }}
      />
      {/* Noise texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
}
