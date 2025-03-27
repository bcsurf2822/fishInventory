// Mapping of fish names to their image paths
export const fishImageMap = {
  // Tuna family
  "tuna": "/src/assets/fish/tuna.jpg",
  "yellowfin tuna": "/src/assets/fish/yfintuna.jpg",
  "albacore tuna": "/src/assets/fish/tuna.jpg",
  "skipjack tuna": "/src/assets/fish/tuna.jpg",
  "bigeye tuna": "/src/assets/fish/tuna.jpg",
  
  // Salmon family
  "salmon": "/src/assets/fish/salmon.jpg",
  "atlantic salmon": "/src/assets/fish/salmon.jpg",
  "pacific salmon": "/src/assets/fish/salmon.jpg",
  "king salmon": "/src/assets/fish/salmon.jpg",
  "sockeye salmon": "/src/assets/fish/salmon.jpg",
  
  // Mackerel family
  "mackerel": "/src/assets/fish/mackerel.jpg",
  "king mackerel": "/src/assets/fish/mackerel.jpg",
  "spanish mackerel": "/src/assets/fish/mackerel.jpg",
  "atlantic mackerel": "/src/assets/fish/mackerel.jpg",
  
  // Billfish family
  "swordfish": "/src/assets/fish/sword.jpg",
  "marlin": "/src/assets/fish/marlin.jpg",
  "sailfish": "/src/assets/fish/sailfish.jpg",
  
  // Other fish
  "mahi mahi": "/src/assets/fish/mahi.jpg",
  "halibut": "/src/assets/fish/halibut.jpg",
  "grouper": "/src/assets/fish/grouper.jpg",
  "snapper": "/src/assets/fish/snapper.jpg",
  "anchovies": "/src/assets/fish/anchovies.jpg",
  "wrasse": "/src/assets/fish/wrasse.jpg",
  "trevally": "/src/assets/fish/trevally.jpg",
  "tarpon": "/src/assets/fish/tarpon.jpg",
  "flying fish": "/src/assets/fish/flyingfish.jpg",
  "pompano": "/src/assets/fish/pompano.jpg",
  "sturgeon": "/src/assets/fish/sturgeon.jpg"
};

// Helper function to get image path for a fish name
export const getFishImage = (fishName) => {
  // Convert to lowercase and remove any special characters
  const normalizedName = fishName.toLowerCase().trim();
  
  // Try exact match first
  if (fishImageMap[normalizedName]) {
    return fishImageMap[normalizedName];
  }
  
  // Try partial match
  for (const [key, value] of Object.entries(fishImageMap)) {
    if (normalizedName.includes(key) || key.includes(normalizedName)) {
      return value;
    }
  }
  
  // Return a default image if no match is found
  return "/src/assets/fish/tuna.jpg"; // Default to tuna image
}; 