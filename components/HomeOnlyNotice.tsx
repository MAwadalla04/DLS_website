"use client";

import { useEffect } from "react";

export function HomeOnlyNotice() {
  useEffect(() => {
    window.location.replace("/");
  }, []);

  return (
    <section className="home-only-notice section-pad">
      <div className="page-shell">
        <h1>The symposium homepage is the only page live right now.</h1>
        <p>Returning you to the landing page.</p>
        <a className="button button-amber" href="/">Go to the homepage <span aria-hidden="true">↗</span></a>
      </div>
    </section>
  );
}
