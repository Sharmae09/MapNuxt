export const useRouting = async (origin, destination) => {
    const HERE_API_KEY = "YOUR_HERE_API_KEY";
  
    const response = await fetch(
      `https://router.hereapi.com/v8/routes?transportMode=car&origin=${origin}&destination=${destination}&return=summary&apikey=${HERE_API_KEY}`
    );
  
    const data = await response.json();
    return data.routes[0]?.sections[0]?.summary; // Returns distance & duration
  };
  