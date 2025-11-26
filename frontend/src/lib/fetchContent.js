export const fetchContent = async (fileName) => {
  const base =
    import.meta.env.MODE === "development"
      ? ""
      : "/Portfolio";

  try {
    const response = await fetch(`${base}/content/${fileName}`);
    if (!response.ok) throw new Error("Failed to load");
    return await response.json();
  } catch (err) {
    console.error("JSON load failed:", fileName, err);
    return null;
  }
};
