export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  const location = query.location;

  // Replace this with your actual API call
  // This is just example data
  return [
    {
      id: 1,
      title: "Modern Villa",
      price: 500000,
      location: location,
      bedrooms: 4,
      bathrooms: 3,
      description: "Beautiful modern villa with pool",
      imageUrl: "https://example.com/house1.jpg",
      contactNumber: "1234567890",
    },
    {
      id: 2,
      title: "Cozy Apartment",
      price: 250000,
      location: location,
      bedrooms: 2,
      bathrooms: 1,
      description: "Centrally located apartment",
      imageUrl: "https://example.com/house2.jpg",
      contactNumber: "1234567890",
    },
  ];
});
