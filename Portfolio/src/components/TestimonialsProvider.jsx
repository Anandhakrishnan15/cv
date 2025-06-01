// context/TestimonialsContext.js
import React, { createContext, useContext, useEffect, useState } from "react";

const TestimonialsContext = createContext();

const SPREADSHEET_CSV_URL ="https://docs.google.com/spreadsheets/d/e/2PACX-1vRJHow8ltmTWi-aWZxV7eGRIukA-CeLP49jCnxMXLBxRVxc2cEOshkhzGgQuqeYWSAPjBROGxujkBCt/pub?output=csv";

export const TestimonialsProvider = ({ children }) => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  console.log(testimonials);
  
  useEffect(() => {
    const stored = sessionStorage.getItem("testimonials");
    if (stored) {
      setTestimonials(JSON.parse(stored));
      setLoading(false);
      console.log("setction stored");
    }

    fetch(SPREADSHEET_CSV_URL)
      .then((res) => res.text())
      .then((text) => {
        const parsed = parseCSV(text);
        setTestimonials(parsed);
        sessionStorage.setItem("testimonials", JSON.stringify(parsed));
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching spreadsheet:", err);
        setLoading(false);
      });
  }, []);

  const parseCSV = (text) => {
    const lines = text.trim().split("\n");
    const headers = lines[0].split(",").map((h) => h.trim());
    return lines.slice(1).map((line) => {
      const values = line.split(",").map((v) => v.trim());
      const obj = {};
      headers.forEach((header, i) => {
        obj[header] = values[i] || ""; // Prevent undefined
      });
      return obj;
    });
  };

  return (
    <TestimonialsContext.Provider value={{ testimonials, loading }}>
      {children}
    </TestimonialsContext.Provider>
  );
};

export const useTestimonials = () => useContext(TestimonialsContext);
