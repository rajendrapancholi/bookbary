export const capitalizeWords = (str: string): string => {
  if (!str) return ""; // Guard: returns empty string if str is undefined/null
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
};

// Format to YYYY-MM-DD
export const formateDate = (str: string) => {
  if (!str) return ""; // Guard: prevents crash if date is missing
  return str.split("T")[0];
};
