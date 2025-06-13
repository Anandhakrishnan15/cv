import React from "react";
import { useParams } from "react-router-dom";
import componentDocMap from "./componentDocMap";
import ComponentDocsPage from "./ComponentDocsPage";

export default function DocsWrapper() {
  const { component } = useParams();
  const guideData = componentDocMap[component.toLowerCase()];

  if (!guideData) {
    return (
      <div className="text-center mt-10 text-red-500 text-xl">
        ❌ No documentation found for: <strong>{component}</strong>
      </div>
    );
  }

  return <ComponentDocsPage guideData={guideData} />;
}
