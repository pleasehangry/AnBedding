import React from "react";
import { motion, useAnimation } from "framer-motion";

function Product({
  name,
  brand,
  price,
  discountPrice,
  image,
  hoverImage,
  colors,
}) {
  const controls = useAnimation();

  return (
    <motion.div
      className="relative w-64 h-64 overflow-hidden rounded-lg shadow-lg hover:shadow-2xl"
      initial={{ opacity: 0 }}
      animate={controls}
      onHoverStart={() => controls.start({ opacity: 1 })}
      onHoverEnd={() => controls.start({ opacity: 0 })}
    >
      <img
        src={image}
        alt={name}
        className="w-full h-full object-cover object-center"
      />
      <motion.img
        src={hoverImage}
        alt={name}
        animate={{ opacity: controls.opacity }}
        transition={{ delay: 0.2 }}
        className="absolute w-full h-full object-cover object-center"
      />
      <div className="p-4">
        <h3 className="text-lg font-medium">{name}</h3>
        <p className="text-gray-600">Brand: {brand}</p>
        <p className="text-gray-600">Colors: {colors.join(", ")}</p>
        <p className="text-xl font-medium">Price: ${price}</p>
        {discountPrice && (
          <p className="text-xl font-medium text-red-500">
            Discount price: ${discountPrice}
          </p>
        )}
      </div>
    </motion.div>
  );
}

export default Product;
