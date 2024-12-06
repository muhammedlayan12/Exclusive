import Image from "next/image";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import img1 from "../../public/images/product1.png";
import img2 from "../../public/images/product2.png";

const Cart = () => {
  return (
    <div className="min-h-screen font-poppins flex flex-col">
      
      <Header />
      <Navbar />

   
      <div className="container mx-auto p-6 bg-gray-100">
        <h1 className="text-3xl font-bold text-center mb-8">Shopping Cart</h1>

        
        <div className="overflow-x-auto mb-6">
          <table className="w-full bg-white shadow-md rounded-lg border-collapse">
       
            <thead>
              <tr className="bg-gray-200 text-left text-sm uppercase font-medium text-gray-600">
                <th className="p-4">Product</th>
                <th className="p-4 text-center">Price</th>
                <th className="p-4 text-center">Quantity</th>
                <th className="p-4 text-center">Subtotal</th>
              </tr>
            </thead>
            <tbody>
                
              <tr className="border-t">
                <td className="flex items-center p-4">
                  <Image
                    src={img1}
                    alt="LCD Monitor"
                    className="w-16 h-16 rounded-lg mr-4 object-cover"
                  />
                  <div>
                    <p className="font-medium">LCD Monitor</p>
                    <button className="text-red-500 text-sm hover:underline">
                      Remove
                    </button>
                  </div>
                </td>
                <td className="text-center p-4">$650</td>
                <td className="text-center p-4">
                  <input
                    type="number"
                    min="1"
                    defaultValue="1"
                    className="border rounded text-center w-16"
                  />
                </td>
                <td className="text-center p-4">$650</td>
              </tr>

          
              <tr className="border-t">
                <td className="flex items-center p-4">
                  <Image
                    src={img2}
                    alt="H1 Gamepad"
                    className="w-16 h-16 rounded-lg mr-4 object-cover"
                  />
                  <div>
                    <p className="font-medium">H1 Gamepad</p>
                    <button className="text-red-500 text-sm hover:underline">
                      Remove
                    </button>
                  </div>
                </td>
                <td className="text-center p-4">$550</td>
                <td className="text-center p-4">
                  <input
                    type="number"
                    min="1"
                    defaultValue="2"
                    className="border rounded text-center w-16"
                  />
                </td>
                <td className="text-center p-4">$1100</td>
              </tr>
            </tbody>
          </table>
        </div>

 
        <div className="flex flex-col lg:flex-row justify-between items-center mb-6 gap-4">
          <div className="flex items-center space-x-2">
            <input
              type="text"
              placeholder="Enter Coupon  "
              className="border outline-none border-[#838383] rounded px-4 py-2 w-full lg:w-auto"
            />
            <button className="bg-red-500 text-white px-6 py-2 rounded-md hover:bg-red-600">
              Apply Coupon
            </button>
          </div>
          <div className="flex space-x-4">
            <button className="bg-black text-white border border-black px-6 py-2 rounded-lg transition-all duration-500 hover:bg-transparent hover:text-black">
              Return to Shop
            </button>
            <button className="bg-transparent text-black border border-black px-6 py-2 rounded-lg transition-all duration-500 hover:bg-black hover:text-white">
              Update Cart
            </button>
          </div>
        </div>

      
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-lg font-semibold mb-4">Cart Totals</h2>
          <div className="flex justify-between items-center border-b pb-4 mb-4">
            <span>Subtotal</span>
            <span className="font-semibold">$1750</span>
          </div>
          <div className="flex justify-between items-center border-b pb-4 mb-4">
            <span>Shipping</span>
            <span className="font-semibold">$50</span>
          </div>
          <div className="flex justify-between items-center text-xl font-semibold">
            <span>Total</span>
            <span className="text-red-500">$1800</span>
          </div>
          <button className="bg-red-500 text-white w-full py-3 rounded-lg mt-6 hover:bg-red-600">
            Proceed to Checkout
          </button>
        </div>
      </div>

 
      <Footer />
    </div>
  );
};

export default Cart;
