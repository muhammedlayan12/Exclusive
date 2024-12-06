






































// "use client";

// import React from "react";
// import Header from "../../components/Header";
// import Navbar from "../../components/Navbar";
// import Footer from "../../components/Footer";
// import Image from "next/image";
// import { Facebook, Github, Instagram, Linkedin } from "lucide-react";
// import img1 from "../../../public/images/q1.png";
// import img2 from "../../../public/images/q2.png";
// import img3 from "../../../public/images/q3.png";
// import img4 from "../../../public/images/fr1.png";
// import img5 from "../../../public/images/q5.png";
// import img6 from "../../../public/images/q6.png";
// import img7 from "../../../public/images/q7.png";
// import img8 from "../../../public/images/q8.png";

// interface Product {
//   id: string;
//   name: string;
//   price: string;
//   originalPrice: string;
//   altText: string;
//   imgSrc: any;
//   rating: string;
//   reviews: number;
//   off: string;
//   description: string;
//   reviewText: string;
// }

// interface PageProps {
//   params: {
//     id: string;
//   };
// }

// const Page: React.FC<PageProps> = ({ params }) => {
//   const { id: productId } = params;

//   const products: Product[] = [
//     {
//       id: "1",
//       name: "HAVIT HV-G92 Gamepad",
//       price: "$190.00",
//       originalPrice: "$190.00",
//       altText: "Product 1 Image",
//       imgSrc: img1,
//       rating: "⋆ ⋆ ⋆ ⋆ ⋆",
//       reviews: 50,
//       off: "40%",
//       description: "Awesome gaming controller design",
//       reviewText: "The HAVIT HV-G92 Gamepad provides exceptional comfort and responsiveness. It's perfect for long gaming sessions, and the button layout feels intuitive. However, it could benefit from better build quality for the price."
//   },
//   {
//       id: "2",
//       name: "Logitech G502 Hero",
//       price: "$80.00",
//       originalPrice: "$100.00",
//       altText: "Product 2 Image",
//       imgSrc: img2,
//       rating: "⋆ ⋆ ⋆ ⋆",
//       reviews: 120,
//       off: "80%",
//       description: "Precision-focused gaming mouse",
//       reviewText: "The Logitech G502 Hero is an excellent gaming mouse with precise tracking and customizable buttons. The design is comfortable, but the weight may be a concern for some users. Overall, it offers great value for money."
//   },
//   {
//       id: "3",
//       name: "Razer DeathAdder V2",
//       price: "$60.00",
//       originalPrice: "$80.00",
//       altText: "Product 3 Image",
//       imgSrc: img3,
//       rating: "⋆ ⋆ ⋆ ⋆",
//       reviews: 200,
//       off: "30%",
//       description: "Smooth ergonomic mouse design",
//       reviewText: "The Razer DeathAdder V2 is an ergonomic mouse designed for comfort and precision. It performs well in fast-paced gaming, and the RGB lighting adds a stylish touch. Some users may prefer a slightly more customizable weight."
//   },
//   {
//       id: "4",
//       name: "Corsair K95 RGB Keyboard",
//       price: "$160.00",
//       originalPrice: "$200.00",
//       altText: "Product 4 Image",
//       imgSrc: img8,
//       rating: "⋆ ⋆ ⋆",
//       reviews: 80,
//       off: "70%",
//       description: "Premium RGB mechanical keyboard",
//       reviewText: "The Corsair K95 RGB Keyboard delivers excellent key response and a satisfying tactile feel. The RGB lighting is customizable, but the price may be too high for some users considering its features."
//   },
//   {
//       id: "5",
//       name: "SteelSeries Arctis 7",
//       price: "$150.00",
//       originalPrice: "$180.00",
//       altText: "Product 5 Image",
//       imgSrc: img5,
//       rating: "⋆ ⋆ ⋆ ⋆ ⋆",
//       reviews: 95,
//       off: "20%",
//       description: "Comfortable wireless gaming headset",
//       reviewText: "The SteelSeries Arctis 7 offers outstanding sound quality and comfort for hours of gameplay. The wireless connection is stable, and the microphone quality is clear. It's a solid choice for gamers who value performance and comfort."
//   },
//   {
//       id: "6",
//       name: "ASUS ROG Strix Impact II",
//       price: "$45.00",
//       originalPrice: "$60.00",
//       altText: "Product 6 Image",
//       imgSrc: img6,
//       rating: "⋆ ⋆ ⋆ ⋆",
//       reviews: 30,
//       off: "25%",
//       description: "Lightweight customizable gaming mouse",
//       reviewText: "The ASUS ROG Strix Impact II is a lightweight and responsive mouse, ideal for fast-paced games. The build quality is good, though the button placement might take some time to get used to for those with larger hands."
//   },
//   {
//       id: "7",
//       name: "HyperX Cloud II Headset",
//       price: "$99.00",
//       originalPrice: "$130.00",
//       altText: "Product 7 Image",
//       imgSrc: img7,
//       rating: "⋆ ⋆ ⋆",
//       reviews: 150,
//       off: "35%",
//       description: "Crystal-clear sound gaming headset",
//       reviewText: "The HyperX Cloud II Headset delivers great audio quality and a comfortable fit. The noise-cancelling feature is a nice touch, but the build could be sturdier. A solid headset for the price, especially for casual gamers."
//   },
//   {
//       id: "8",
//       name: "Cooler Master MM720 Mouse",
//       price: "$35.00",
//       originalPrice: "$50.00",
//       altText: "Product 8 Image",
//       imgSrc: img4,
//       rating: "⋆ ⋆ ⋆ ⋆ ⋆",
//       reviews: 65,
//       off: "30%",
//       description: "Durable lightweight gaming mouse",
//       reviewText: "The Cooler Master MM720 Mouse is lightweight and offers excellent precision in gaming. Its unique design is comfortable for most hand sizes, though the lack of additional customizable buttons may limit some users. A great budget option."
//   },
// ];


//   const product = products.find((prod) => prod.id === productId);

//   if (!product) {
//     return (
//       <div>
//         <Header />
//         <Navbar />
//         <div className="text-center flex flex-col items-center justify-center mt-[20vmin] gap-4">
//           <h1 className="text-5xl font-medium">404</h1>
//           <p>Product not found</p>
//         </div>
//         <Footer />
//       </div>
//     );
//   }

//   return (
//     <div>
//       <Navbar />
//       <div className="flex flex-col lg:text-start text-center md:flex-row items-center justify-center gap-20 md:items-start py-28 px-4 sm:px-8 font-poppins">
//         <Image
//           src={product.imgSrc}
//           alt={product.altText}
//           className="w-[80%] md:w-[30%] rounded-lg"
//         />
//         <div className="flex justify-center flex-col gap-4 mt-8 md:mt-0 md:ml-8">
//           <span className="text-gray-600 text-sm">{product.name}</span>
//           <h1 className="text-xl md:text-2xl font-semibold">{product.description}</h1>
//           <div className="text-yellow-500 text-lg">{product.rating}</div>
//           <p className="text-sm text-gray-600 sm:w-[450px] w-[85%]">{product.reviewText}</p>

//           <div className="flex justify-center items-center gap-4">
//             <h2 className="text-2xl font-semibold">{product.price}</h2>
//             <span className="line-through text-gray-400">{product.originalPrice}</span>
//           </div>

//           <div className="mt-4">
//             <label htmlFor="quantity" className="text-sm">Quantity</label>
//             <div className="flex items-center gap-4 mt-2">
//               <button className="text-lg">-</button>
//               <span className="text-lg">1</span>
//               <button className="text-lg">+</button>
//             </div>
//           </div>

//           <div>
//             <button className="mt-6 py-2 px-4 bg-red-500 text-white rounded hover:bg-red-700">
//               Add to Cart
//             </button>
//           </div>

     
//           <div className="flex gap-4 mt-8">
//             <Linkedin size={30} className="bg-blue-600 text-white rounded-full" />
//             <Instagram size={30} className="bg-pink-500 text-white rounded-full" />
//             <Facebook size={30} className="bg-blue-500 text-white rounded-full" />
//             <Github size={30} className="bg-gray-800 text-white rounded-full" />
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default Page;








"use client";

import React from "react";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Image from "next/image";
import { Facebook, Github, Instagram, Linkedin } from "lucide-react";
import img1 from "../../../public/images/q1.png";
import img2 from "../../../public/images/q2.png";
import img3 from "../../../public/images/q3.png";
import img4 from "../../../public/images/fr1.png";
import img5 from "../../../public/images/q5.png";
import img6 from "../../../public/images/q6.png";
import img7 from "../../../public/images/q7.png";
import img8 from "../../../public/images/q8.png";

// Define the Product interface
interface Product {
  id: string;
  name: string;
  price: string;
  originalPrice: string;
  altText: string;
  imgSrc: any;
  rating: string;
  reviews: number;
  off: string;
  description: string;
  reviewText: string;
}

// Corrected PageProps interface
interface PageProps {
  params: {
    id: string;
  };
}

const Page: React.FC<PageProps> = ({ params }) => {
  const { id: productId } = params;

  // Define the products list
  const products: Product[] = [
    {
      id: "1",
      name: "HAVIT HV-G92 Gamepad",
      price: "$190.00",
      originalPrice: "$190.00",
      altText: "Product 1 Image",
      imgSrc: img1,
      rating: "⋆ ⋆ ⋆ ⋆ ⋆",
      reviews: 50,
      off: "40%",
      description: "Awesome gaming controller design",
      reviewText: "The HAVIT HV-G92 Gamepad provides exceptional comfort and responsiveness. It's perfect for long gaming sessions, and the button layout feels intuitive. However, it could benefit from better build quality for the price."
  },
  {
      id: "2",
      name: "Logitech G502 Hero",
      price: "$80.00",
      originalPrice: "$100.00",
      altText: "Product 2 Image",
      imgSrc: img2,
      rating: "⋆ ⋆ ⋆ ⋆",
      reviews: 120,
      off: "80%",
      description: "Precision-focused gaming mouse",
      reviewText: "The Logitech G502 Hero is an excellent gaming mouse with precise tracking and customizable buttons. The design is comfortable, but the weight may be a concern for some users. Overall, it offers great value for money."
  },
  {
      id: "3",
      name: "Razer DeathAdder V2",
      price: "$60.00",
      originalPrice: "$80.00",
      altText: "Product 3 Image",
      imgSrc: img3,
      rating: "⋆ ⋆ ⋆ ⋆",
      reviews: 200,
      off: "30%",
      description: "Smooth ergonomic mouse design",
      reviewText: "The Razer DeathAdder V2 is an ergonomic mouse designed for comfort and precision. It performs well in fast-paced gaming, and the RGB lighting adds a stylish touch. Some users may prefer a slightly more customizable weight."
  },
  {
      id: "4",
      name: "Corsair K95 RGB Keyboard",
      price: "$160.00",
      originalPrice: "$200.00",
      altText: "Product 4 Image",
      imgSrc: img8,
      rating: "⋆ ⋆ ⋆",
      reviews: 80,
      off: "70%",
      description: "Premium RGB mechanical keyboard",
      reviewText: "The Corsair K95 RGB Keyboard delivers excellent key response and a satisfying tactile feel. The RGB lighting is customizable, but the price may be too high for some users considering its features."
  },
  {
      id: "5",
      name: "SteelSeries Arctis 7",
      price: "$150.00",
      originalPrice: "$180.00",
      altText: "Product 5 Image",
      imgSrc: img5,
      rating: "⋆ ⋆ ⋆ ⋆ ⋆",
      reviews: 95,
      off: "20%",
      description: "Comfortable wireless gaming headset",
      reviewText: "The SteelSeries Arctis 7 offers outstanding sound quality and comfort for hours of gameplay. The wireless connection is stable, and the microphone quality is clear. It's a solid choice for gamers who value performance and comfort."
  },
  {
      id: "6",
      name: "ASUS ROG Strix Impact II",
      price: "$45.00",
      originalPrice: "$60.00",
      altText: "Product 6 Image",
      imgSrc: img6,
      rating: "⋆ ⋆ ⋆ ⋆",
      reviews: 30,
      off: "25%",
      description: "Lightweight customizable gaming mouse",
      reviewText: "The ASUS ROG Strix Impact II is a lightweight and responsive mouse, ideal for fast-paced games. The build quality is good, though the button placement might take some time to get used to for those with larger hands."
  },
  {
      id: "7",
      name: "HyperX Cloud II Headset",
      price: "$99.00",
      originalPrice: "$130.00",
      altText: "Product 7 Image",
      imgSrc: img7,
      rating: "⋆ ⋆ ⋆",
      reviews: 150,
      off: "35%",
      description: "Crystal-clear sound gaming headset",
      reviewText: "The HyperX Cloud II Headset delivers great audio quality and a comfortable fit. The noise-cancelling feature is a nice touch, but the build could be sturdier. A solid headset for the price, especially for casual gamers."
  },
  {
      id: "8",
      name: "Cooler Master MM720 Mouse",
      price: "$35.00",
      originalPrice: "$50.00",
      altText: "Product 8 Image",
      imgSrc: img4,
      rating: "⋆ ⋆ ⋆ ⋆ ⋆",
      reviews: 65,
      off: "30%",
      description: "Durable lightweight gaming mouse",
      reviewText: "The Cooler Master MM720 Mouse is lightweight and offers excellent precision in gaming. Its unique design is comfortable for most hand sizes, though the lack of additional customizable buttons may limit some users. A great budget option."
  },

  
  ];

 
  const product = products.find((prod) => prod.id === productId);
 
  if (!product) {
    return (
      <div>
        <Header />
        <Navbar />
        <div className="text-center flex flex-col items-center justify-center mt-[20vmin] gap-4">
          <h1 className="text-5xl font-medium">404</h1>
          <p>Product not found</p>
        </div>
        <Footer />
      </div>
    );
  }

 
  return (
    <div>
      <Navbar />
      <div className="flex flex-col lg:text-start text-center md:flex-row items-center justify-center gap-20 md:items-start py-28 px-4 sm:px-8 font-poppins">
        <Image
          src={product.imgSrc}
          alt={product.altText}
          className="w-[80%] md:w-[30%] rounded-lg"
        />
        <div className="flex justify-center flex-col gap-4 mt-8 md:mt-0 md:ml-8">
          <span className="text-gray-600 text-sm">{product.name}</span>
          <h1 className="text-xl md:text-2xl font-semibold">{product.description}</h1>
          <div className="text-yellow-500 text-lg">{product.rating}</div>
          <p className="text-sm text-gray-600 sm:w-[450px] w-[85%]">{product.reviewText}</p>

          <div className="flex justify-center items-center gap-4">
            <h2 className="text-2xl font-semibold">{product.price}</h2>
            <span className="line-through text-gray-400">{product.originalPrice}</span>
          </div>

          <div className="mt-4">
            <label htmlFor="quantity" className="text-sm">Quantity</label>
            <div className="flex items-center gap-4 mt-2">
              <button className="text-lg">-</button>
              <span className="text-lg">1</span>
              <button className="text-lg">+</button>
            </div>
          </div>

          <div>
            <button className="mt-6 py-2 px-4 bg-red-500 text-white rounded hover:bg-red-700">
              Add to Cart
            </button>
          </div>

          <div className="flex gap-4 mt-8">
            <Linkedin size={30} className="bg-blue-600 text-white rounded-full" />
            <Instagram size={30} className="bg-pink-500 text-white rounded-full" />
            <Facebook size={30} className="bg-blue-500 text-white rounded-full" />
            <Github size={30} className="bg-gray-800 text-white rounded-full" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Page;
