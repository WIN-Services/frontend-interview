// Helper function to fetch user data

export const fetchUserData = async () => {
    try {
      const response = await fetch("https://randomuser.me/api/");
      const data = await response.json();
      return data.results[0];
    } catch (error) {
      console.error("Error fetching data:", error);
      return null;
    }
  };