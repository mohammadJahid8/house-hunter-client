import HouseSearch from "./HouseSearch";

const HomeHouses = () => {
  const properties = [
    {
      name: "Cozy Apartment",
      address: "123 Main Street",
      city: "New York",
      bedrooms: 2,
      bathrooms: 1,
      roomSize: "800 sqft",
      picture:
        "https://a0.muscache.com/im/pictures/miso/Hosting-742424658135898180/original/ef5464ea-5eb8-426a-a097-a4ed7a395610.jpeg?im_w=720",
      availabilityDate: "2023-08-01",
      rentPerMonth: 2000,
      phoneNumber: "555-123-4567",
      description: "This cozy apartment is located in a vibrant neighborhood.",
      image:
        "https://a0.muscache.com/im/pictures/miso/Hosting-742424658135898180/original/ef5464ea-5eb8-426a-a097-a4ed7a395610.jpeg?im_w=720",
    },
    {
      name: "Luxury Condo",
      address: "456 Oak Avenue",
      city: "Los Angeles",
      bedrooms: 3,
      bathrooms: 2,
      roomSize: "1500 sqft",
      picture:
        "https://a0.muscache.com/im/pictures/miso/Hosting-742424658135898180/original/ef5464ea-5eb8-426a-a097-a4ed7a395610.jpeg?im_w=720",
      availabilityDate: "2023-07-25",
      rentPerMonth: 3500,
      phoneNumber: "555-987-6543",
      description: "Experience luxury living in this beautiful condo.",
      image:
        "https://a0.muscache.com/im/pictures/miso/Hosting-742424658135898180/original/ef5464ea-5eb8-426a-a097-a4ed7a395610.jpeg?im_w=720",
    },
    {
      name: "Spacious House",
      address: "789 Elm Street",
      city: "Chicago",
      bedrooms: 4,
      bathrooms: 3,
      roomSize: "2500 sqft",
      picture:
        "https://a0.muscache.com/im/pictures/miso/Hosting-742424658135898180/original/ef5464ea-5eb8-426a-a097-a4ed7a395610.jpeg?im_w=720",
      availabilityDate: "2023-08-15",
      rentPerMonth: 4000,
      phoneNumber: "555-246-1357",
      description:
        "A spacious house with a large backyard, perfect for families.",
      image:
        "https://a0.muscache.com/im/pictures/miso/Hosting-742424658135898180/original/ef5464ea-5eb8-426a-a097-a4ed7a395610.jpeg?im_w=720",
    },
    {
      name: "Spacious House",
      address: "789 Elm Street",
      city: "Chicago",
      bedrooms: 4,
      bathrooms: 3,
      roomSize: "2500 sqft",
      picture:
        "https://a0.muscache.com/im/pictures/miso/Hosting-742424658135898180/original/ef5464ea-5eb8-426a-a097-a4ed7a395610.jpeg?im_w=720",
      availabilityDate: "2023-08-15",
      rentPerMonth: 4000,
      phoneNumber: "555-246-1357",
      description:
        "A spacious house with a large backyard, perfect for families.",
      image:
        "https://a0.muscache.com/im/pictures/miso/Hosting-742424658135898180/original/ef5464ea-5eb8-426a-a097-a4ed7a395610.jpeg?im_w=720",
    },
    {
      name: "Spacious House",
      address: "789 Elm Street",
      city: "Chicago",
      bedrooms: 4,
      bathrooms: 3,
      roomSize: "2500 sqft",
      picture:
        "https://a0.muscache.com/im/pictures/miso/Hosting-742424658135898180/original/ef5464ea-5eb8-426a-a097-a4ed7a395610.jpeg?im_w=720",
      availabilityDate: "2023-08-15",
      rentPerMonth: 4000,
      phoneNumber: "555-246-1357",
      description:
        "A spacious house with a large backyard, perfect for families.",
      image:
        "https://a0.muscache.com/im/pictures/miso/Hosting-742424658135898180/original/ef5464ea-5eb8-426a-a097-a4ed7a395610.jpeg?im_w=720",
    },
  ];

  return (
    <div className="mt-8">
      <HouseSearch />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
        {properties.map((property, index) => (
          <div
            key={index}
            className="w-full  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          >
            <a href="#">
              <img
                className=" rounded-t-lg"
                src={property.image}
                alt="product image"
              />
            </a>
            <div className="px-3 pt-4 pb-5">
              <a href="#">
                <h5 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white house-name">
                  {property.name}
                </h5>
              </a>
              <a href="#">
                <h5 className="text-lg font-medium tracking-tight text-gray-500 dark:text-white">
                  {property.address} {property.city}
                </h5>
              </a>
              <div className="flex items-center mt-2.5 mb-5">
                <svg
                  className="w-4 h-4 text-yellow-300 mr-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  className="w-4 h-4 text-yellow-300 mr-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  className="w-4 h-4 text-yellow-300 mr-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  className="w-4 h-4 text-yellow-300 mr-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  className="w-4 h-4 text-gray-200 dark:text-gray-600"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                  5.0
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-lg font-bold text-gray-900 dark:text-white">
                  $599
                </span>
                <a
                  href="#"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-sm text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  BOOK
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeHouses;
