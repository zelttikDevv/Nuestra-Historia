export default function WrappedPage() {
  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="fixed inset-0 -z-10" style={{
        background: `
          radial-gradient(ellipse at top, hsl(350 60% 95%) 0%, transparent 50%),
          radial-gradient(ellipse at bottom, hsl(25 60% 92%) 0%, transparent 50%),
          linear-gradient(to bottom, hsl(30 50% 98%), hsl(30 40% 96%))
        `,
      }} />
      
      <div className="text-center space-y-4">
        <div className="text-6xl">❤️</div>
        <h1 className="text-4xl font-light text-foreground tracking-tight">
          Wrapped
        </h1>
        <p className="text-lg text-muted-foreground">
          Próximamente…
        </p>
      </div>
    </div>
  );
}
