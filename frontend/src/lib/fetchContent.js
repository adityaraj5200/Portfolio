export const fetchContent = async (fileName) => {
  try {
    const response = await fetch(`/content/${fileName}`);
    if (!response.ok) {
      throw new Error(`Failed to load ${fileName}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error loading JSON:", error);
    return null;
  }
};
