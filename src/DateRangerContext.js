import React, { createContext, useState } from "react";

export const DateRangeContext = createContext();

export const DateRangeProvider = ({ children }) => {
  const [selectedRange, setSelectedRange] = useState("thisMonth");

  return (
    <DateRangeContext.Provider value={{ selectedRange, setSelectedRange }}>
      {children}
    </DateRangeContext.Provider>
  );
};
