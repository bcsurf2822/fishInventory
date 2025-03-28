// Mapping of fish names to their image paths
export const fishImageMap = {
  tuna: "/src/assets/fish/tuna.jpg",
  "yellowfin tuna": "/src/assets/fish/yfintuna.jpg",
  "albacore tuna": "/src/assets/fish/tuna.jpg",
  "skipjack tuna": "/src/assets/fish/tuna.jpg",
  "bigeye tuna": "/src/assets/fish/tuna.jpg",

  salmon: "/src/assets/fish/salmon.jpg",
  "atlantic salmon": "/src/assets/fish/salmon.jpg",
  "pacific salmon": "/src/assets/fish/salmon.jpg",
  "king salmon": "/src/assets/fish/salmon.jpg",
  "sockeye salmon": "/src/assets/fish/salmon.jpg",

  mackerel: "/src/assets/fish/mackerel.jpg",
  "king mackerel": "/src/assets/fish/mackerel.jpg",
  "spanish mackerel": "/src/assets/fish/mackerel.jpg",
  "atlantic mackerel": "/src/assets/fish/mackerel.jpg",

  swordfish: "/src/assets/fish/sword.jpg",
  marlin: "/src/assets/fish/marlin.jpg",
  sailfish: "/src/assets/fish/sailfish.jpg",

  "mahi mahi": "/src/assets/fish/mahi.jpg",
  halibut: "/src/assets/fish/halibut.jpg",
  grouper: "/src/assets/fish/grouper.jpg",
  snapper: "/src/assets/fish/snapper.jpg",
  anchovies: "/src/assets/fish/anchovies.jpg",
  wrasse: "/src/assets/fish/wrasse.jpg",
  trevally: "/src/assets/fish/trevally.jpg",
  tarpon: "/src/assets/fish/tarpon.jpg",
  "flying fish": "/src/assets/fish/flyingfish.jpg",
  pompano: "/src/assets/fish/pompano.jpg",
  sturgeon: "/src/assets/fish/sturgeon.jpg",
};

export const getFishImage = (fishName) => {
  const normalizedName = fishName.toLowerCase().trim();

  if (fishImageMap[normalizedName]) {
    return fishImageMap[normalizedName];
  }

  for (const [key, value] of Object.entries(fishImageMap)) {
    if (normalizedName.includes(key) || key.includes(normalizedName)) {
      return value;
    }
  }

  return "/src/assets/fish/tuna.jpg";
};
