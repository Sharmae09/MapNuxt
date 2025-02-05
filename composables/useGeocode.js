export const useGeocode = async (address) => {
  const HERE_API_KEY =
    "pk.eyJ1Ijoic2hhcm1hZTA5IiwiYSI6ImNtNnJvdDkyZDAwOHIya3FjbDc4emM5dnMifQ.fI6I2PAIYO-kkAKPO_fdiw";

  const response = await fetch(
    `https://geocode.search.hereapi.com/v1/geocode?q=${encodeURIComponent(
      address
    )}&apikey=${HERE_API_KEY}`
  );

  const data = await response.json();
  return data.items[0]?.position; // Returns { lat, lng }
};
