import Link from "next/link";

export default function NotFound() {
  return (
    <section className="page-title wrap center">
      <h1 className="h2">Page not found</h1>
      <p className="text" style={{ marginBottom: 30 }}>
        The page you are looking for doesn’t exist or has moved.
      </p>
      <Link className="btn" href="/">
        Back to Home
      </Link>
    </section>
  );
}
