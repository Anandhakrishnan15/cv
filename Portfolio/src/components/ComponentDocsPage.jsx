import React, { useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
// import guideData from "./Props/PropsData/glassCardData";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import StickySidebar from "./StickySidebar";
import componentMap from "./Props/ComponentMap";
// import GlassCard from "./Props/GlassCardDocs/GlassCard";

export default function ComponentDocsPage({guideData}) {
  const [copied, setCopied] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false);

  const ComponentToRender = componentMap[guideData.componentName]; // 🔁 Dynamically load

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(guideData.usageCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      console.error("Copy failed:", err);
    }
  };

  const toggleTheme = () => setIsDark(!isDark);

  // Render step sections based on type
  const renderSteps = (stepType) => {
    const steps = guideData.howToSetUp?.filter(
      (step) => step.stepType === stepType
    );
    if (!steps?.length) return null;

    return (
      <div className="space-y-4 list-decimal list-inside mt-4">
        {steps.map((item, index) => (
          <div key={index}>
            <p className="font-medium text-white">
              Step {stepType} : {item.title}
            </p>
            <p className="text-sm text-gray-300 whitespace-pre-line">
              {item.detail}
            </p>
          </div>
        ))}
      </div>
    );
  };

  const codeString = guideData.usageCode;
  const MainCode = guideData.componentCode;

  return (
    <>
      <StickySidebar />
      <div className="p-6 space-y-8 max-w-4xl mx-auto min-h-screen transition duration-300 bg-[#00000019] text-white">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">{guideData.title}</h1>
        </div>

        {/* Dependencies */}
        <section>
          <h2 className="text-xl font-semibold">📦 NPM Dependencies</h2>
          <ul className="list-disc ml-5">
            {guideData.dependencies.map((dep, idx) => (
              <li key={idx}>
                <code>{dep.name}</code> – {dep.description}
              </li>
            ))}
          </ul>
          <p className="text-sm mt-2">Install via:</p>
          <pre className="bg-black text-white text-xs p-2 rounded-md overflow-x-auto">
            {guideData.installCommand}
          </pre>
        </section>

        {/* Overview */}
        <section>
          <h2 className="text-xl font-semibold">🔍 Overview</h2>
          <p>{guideData.overview}</p>
        </section>

        {/* Live Preview */}
        <section>
          <h2 className="text-xl font-semibold">🔴 Live Preview</h2>
          <button
            onClick={toggleTheme}
            className="flex items-center gap-2 px-3 py-1 rounded text-sm shadow-md border border-gray-300 hover:bg-gray-200 bg-white text-black"
          >
            {isDark ? <FaSun /> : <FaMoon />} Switch to{" "}
            {isDark ? "Light" : "Dark"} Mode
          </button>

          <div
            className={`w-full p-4 flex justify-center rounded-lg shadow-2xl border mt-4 ${
              isDark
                ? "bg-white/10 border-white/10"
                : "bg-white border-black/10"
            }`}
          >
            {/* 👇 Dynamic Component Rendering */}
            {ComponentToRender ? (
              <ComponentToRender />
            ) : (
              <p className="text-red-400">
                ⚠️ Component not found: {guideData.componentName}
              </p>
            )}
          </div>
        </section>

        {/* How to Setup Steps */}
        <section>
          <h2 className="text-4xl font-semibold">🛠 How to setUp</h2>
          <hr />
          {renderSteps(1)}

          <p className="text-sm mt-2">File:</p>
          <pre className="bg-black text-white text-xs p-2 rounded-md overflow-x-auto">
            <code>{guideData.compnentFile}</code>
          </pre>
        </section>

        {renderSteps(2)}
        {/* Component Code */}
        <section className="mt-8">
          <h2 className="text-xl font-semibold text-white mb-4">
            ⚙️ Usage Example
          </h2>
          <div className="relative bg-gray-800 rounded-md shadow-md">
            <div
              className={`overflow-y-auto custom-scroll transition-all duration-300 ${
                isExpanded ? "max-h-[1000px]" : "max-h-64"
              }`}
            >
              <SyntaxHighlighter
                language="jsx"
                style={a11yDark}
                customStyle={{
                  padding: "1rem",
                  fontSize: "0.875rem",
                  margin: 0,
                  background: "transparent",
                }}
                wrapLongLines
              >
                {MainCode}
              </SyntaxHighlighter>
            </div>

            <button
              onClick={handleCopy}
              className="absolute top-2 right-2 bg-white/10 hover:bg-white/20 px-3 py-1 rounded text-xs text-white"
            >
              {copied ? "✅ Copied!" : "📋 Copy"}
            </button>

            <div className="flex justify-center bg-gray-800">
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="text-sm text-white py-2 hover:underline"
              >
                {isExpanded ? "Collapse ▲" : "Expand ▼"}
              </button>
            </div>
          </div>
          {renderSteps(3)}
          <div className="relative bg-gray-800 p-4 rounded-md shadow-md mt-4">
            <SyntaxHighlighter
              language="jsx"
              style={a11yDark}
              customStyle={{
                padding: "1rem",
                borderRadius: "0.5rem",
                fontSize: "0.875rem",
                background: "transparent",
              }}
              wrapLongLines
            >
              {codeString}
            </SyntaxHighlighter>

            <button
              onClick={handleCopy}
              className="absolute top-2 right-2 bg-white/10 hover:bg-white/20 px-3 py-1 rounded text-xs text-white"
            >
              {copied ? "✅ Copied!" : "📋 Copy"}
            </button>
          </div>
        </section>
        {renderSteps(4)}

        {/* Props Table */}
        <section className="my-6">
          <h2 className="text-xl font-semibold mb-4">🛠 Props</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-300 text-sm text-left">
              <thead className="bg-gray-100 dark:bg-gray-800">
                <tr>
                  <th className="border px-4 py-2 font-semibold">Prop Name</th>
                  <th className="border px-4 py-2 font-semibold">Type</th>
                  <th className="border px-4 py-2 font-semibold">Default</th>
                  <th className="border px-4 py-2 font-semibold">
                    Description
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-900">
                {guideData.props.map((prop, i) => (
                  <tr key={i}>
                    <td className="border px-4 py-2">
                      <code>{prop.name}</code>
                    </td>
                    <td className="border px-4 py-2">{prop.type}</td>
                    <td className="border px-4 py-2">{prop.default}</td>
                    <td className="border px-4 py-2">{prop.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
        {renderSteps(5)}
      </div>
    </>
  );
}
