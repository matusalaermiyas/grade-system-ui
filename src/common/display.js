function displayText(format) {
  if (format === 1) return "First";
  else if (format === 2) return "Second";
  else if (format === 3) return "Third";
  else if (format === 4) return "Fourth";
}

function displayDepartment(department) {
  if (department === "cs") return "Computer Science";
  else if (department === "accounting") return "Accounting and finance";
  else if (department === "marketing") return "Marketing and Management";
  else if (department === "management") return "Management";
  else if (department === "buad") return "Business Adminstration";
}

export { displayText, displayDepartment };
