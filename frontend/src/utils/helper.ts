export const capitalizeWords = (str: string): string => {
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
};

// Format to YYYY-MM-DD
export const formateDate = (str: string) => {
  return str.split("T")[0];
};
