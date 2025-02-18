import React from 'react';

const PropertiesPage = () => {
  const properties = [
    { img: "https://raw.githubusercontent.com/potterzwhealrealty/photos/main/Krisumi_Homepage.png", name: "KRISUMI PROPERTIES", price: "$500,000" },
    { img: "https://raw.githubusercontent.com/potterzwhealrealty/photos/main/mvn/overview_img.jpg", name: "MVN PROPERTIES", price: "$750,000" },
    { img: "https://raw.githubusercontent.com/potterzwhealrealty/photos/main/trevoc/t_home.png", name: "TREVOC PROPERTIES", price: "$600,000" },
    { img: "https://raw.githubusercontent.com/potterzwhealrealty/photos/main/ss_camasa/ss_homepage.png", name: "SS CAMASA", price: "$550,000" },
    { img: "https://raw.githubusercontent.com/potterzwhealrealty/photos/main/sobha_altus/sobha_home.jpeg", name: "SOBHA ALTUS", price: "$800,000" },
    { img: "https://raw.githubusercontent.com/potterzwhealrealty/photos/main/Eldico/eldico_overview.webp", name: "ELDECO RESERVE", price: "$900,000" },
    { img: "https://images.squarespace-cdn.com/content/v1/58487dc4b8a79b6d02499b60/1649818878171-HXGSYXD0JI23307551QB/Francis+York+One+of+the+Most+Beautiful+Homes+For+Sale+in+Illinois+6.jpeg", name: "FRANCIS YORK", price: "$1,200,000" },
    { img: "https://cdn.pixabay.com/photo/2018/02/13/11/09/home-3150500_1280.jpg", name: "EXAMPLE PROPERTY 1", price: "$400,000" },
    { img: "https://cdn.pixabay.com/photo/2021/02/09/20/45/architecture-5999913_1280.jpg", name: "EXAMPLE PROPERTY 2", price: "$420,000" },
    { img: "https://cdn.pixabay.com/photo/2017/04/10/22/28/residence-2219972_1280.jpg", name: "EXAMPLE PROPERTY 3", price: "$450,000" },
    { img: "https://cdn.pixabay.com/photo/2021/10/07/15/23/real-estate-6688945_1280.jpg", name: "EXAMPLE PROPERTY 4", price: "$470,000" },
    { img: "https://cdn.pixabay.com/photo/2024/07/05/08/19/living-room-8874235_1280.jpg", name: "EXAMPLE PROPERTY 5", price: "$490,000" },
    { img: "https://cdn.pixabay.com/photo/2016/12/30/07/59/kitchen-1940175_1280.jpg", name: "EXAMPLE PROPERTY 6", price: "$520,000" },
    { img: "https://cdn.pixabay.com/photo/2017/06/17/12/59/luxury-home-2412145_1280.jpg", name: "EXAMPLE PROPERTY 7", price: "$540,000" },
    { img: "https://cdn.pixabay.com/photo/2018/04/04/21/21/lawn-3291164_1280.jpg", name: "EXAMPLE PROPERTY 8", price: "$560,000" },
    { img: "https://cdn.pixabay.com/photo/2016/02/19/16/29/construction-1210677_1280.jpg", name: "EXAMPLE PROPERTY 9", price: "$580,000" },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 ">
      {/* Header Section */}
      <header className="bg-white-200 py-6 px-8">
        <h1 className="text-3xl font-bold text-black">Architecture</h1>
      </header>

      {/* Properties Grid */}
      <div className="px-5 grid grid-cols-2 md:grid-cols-4 gap-0.5 mt-12 md:pl-96 md:pr-52 pr-12 ">
        {properties.map((property, index) => (
          <div key={index} className="relative group cursor-pointer bg-white shadow-md-lg overflow-hidden">
            {/* Image with Grayscale Hover Effect */}
            <img
              src={property.img}
              alt={property.name}
              className="w-full h-28 object-cover filter grayscale transition duration-300 group-hover:grayscale-0"
            />
            {/* Details */}
            <div className="p-4">
              <p className="text-md md:text-lg  text-gray-800">SOORRI NISEKO</p>

              <p className="text-sm font-ś text-gray-800">Niseko</p>
<br>
</br>
              <p className="text-sm text-gray-600">Hospitality, Interiors, Pools, SCDA, Soori</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertiesPage;




// col-sm-153 col-lg-153 col-md-153