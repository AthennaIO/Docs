import React from "react";
import { MendableSearchBar } from "@mendable/search";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

export default function SearchBarWrapper() {
  const {
    siteConfig: { customFields },
  } = useDocusaurusContext();
  return (
    <div className="mendable-search">
      <MendableSearchBar
        anon_key={customFields?.mendableAnonKey}
        style={{ accentColor: "#179C54", darkMode: false }}
        placeholder="Ask..."
        dialogPlaceholder="How to run Athenna HTTP server?"
      />
    </div>
  );
}
