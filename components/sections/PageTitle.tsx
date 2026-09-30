// Centered page heading used at the top of every inner page.
export default function PageTitle({ children, sub }: { children: React.ReactNode; sub?: React.ReactNode }) {
  return (
    <section className="page-title wrap">
      <h1 className="h2 center h2--sm-mobile" data-reveal>
        {children}
      </h1>
      {sub}
    </section>
  );
}
