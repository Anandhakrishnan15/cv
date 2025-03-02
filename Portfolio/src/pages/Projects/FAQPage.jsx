import React, { useState, useEffect } from "react";
import seoData from "./SeoData"; // Import static data
import { saveAs } from "file-saver"; // Install with: npm install file-saver

const FAQPage = () => {
  // Load from localStorage or use default seoData
  const [data, setData] = useState(() => {
    const savedData = localStorage.getItem("seoData");
    return savedData ? JSON.parse(savedData) : seoData;
  });

  const [editIndex, setEditIndex] = useState(null);
  const [editedAnswer, setEditedAnswer] = useState("");

  // Save changes to localStorage whenever data updates
  useEffect(() => {
    localStorage.setItem("seoData", JSON.stringify(data));
  }, [data]);

  const handleEdit = (sectionIndex, faqIndex) => {
    setEditIndex({ sectionIndex, faqIndex });
    setEditedAnswer(
      data[sectionIndex]?.seoInfo?.[0]?.faqs?.[faqIndex]?.answer || ""
    );
  };

  const handleSave = (sectionIndex, faqIndex) => {
    const updatedData = [...data];
    if (updatedData[sectionIndex]?.seoInfo?.[0]?.faqs?.[faqIndex]) {
      updatedData[sectionIndex].seoInfo[0].faqs[faqIndex].answer = editedAnswer;
    }
    setData(updatedData);
    setEditIndex(null);
  };

  const handleReset = () => {
    localStorage.removeItem("seoData");
    setData(seoData);
  };

  const handleDownload = () => {
    if (editIndex !== null) {
      const unsavedId = data[editIndex.sectionIndex].id;
      alert(`Please save your edits for ID: ${unsavedId} before downloading.`);
      return;
    }

    const fileData = JSON.stringify(data, null, 2); // Convert to readable JSON format
    const blob = new Blob([fileData], { type: "text/plain;charset=utf-8" });
    saveAs(blob, "seoData.txt"); // Download as .txt file
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">SEO FAQ Manager</h2>

      {data.map((section, sectionIndex) => (
        <div
          key={section.id}
          className="mb-6 p-4 border rounded-lg shadow-sm bg-black-100"
        >
          <h3 className="text-xl font-semibold">ID: {section.id}</h3>
          <h4 className="text-lg font-medium mt-2">
            Title: {section.seoInfo?.[0]?.title || "No Title"}
          </h4>

          {(section.seoInfo?.[0]?.faqs || []).map((faq, faqIndex) => (
            <div key={faqIndex} className="mt-4 p-3 border rounded-md bg-black">
              <p className="font-semibold">Q: {faq.question}</p>
              {editIndex?.sectionIndex === sectionIndex &&
              editIndex?.faqIndex === faqIndex ? (
                <textarea
                  className="w-full mt-2 p-2 border rounded-md"
                  value={editedAnswer}
                  onChange={(e) => setEditedAnswer(e.target.value)}
                />
              ) : (
                <p className="mt-2">A: {faq.answer}</p>
              )}
              <button
                className="mt-2 px-4 py-1 bg-blue-500 text-white rounded-md"
                onClick={() =>
                  editIndex?.sectionIndex === sectionIndex &&
                  editIndex?.faqIndex === faqIndex
                    ? handleSave(sectionIndex, faqIndex)
                    : handleEdit(sectionIndex, faqIndex)
                }
              >
                {editIndex?.sectionIndex === sectionIndex &&
                editIndex?.faqIndex === faqIndex
                  ? "Save"
                  : "Edit"}
              </button>
            </div>
          ))}
        </div>
      ))}

      <button
        className="mt-6 px-6 py-2 bg-red-500 text-white rounded-md"
        onClick={handleReset}
      >
        Reset to Default
      </button>

      <button
        className="mt-6 ml-4 px-6 py-2 bg-green-500 text-white rounded-md"
        onClick={handleDownload}
      >
        Download Data
      </button>
    </div>
  );
};

export default FAQPage;
