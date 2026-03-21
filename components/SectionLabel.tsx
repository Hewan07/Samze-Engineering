export default function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="section-label inline-flex items-center gap-2">
      <span
        className="inline-block w-6 h-px"
        style={{ background: "#f59e0b" }}
      />
      {children}
    </span>
  );
}
