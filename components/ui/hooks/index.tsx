import React, { useEffect, useState } from "react";
import swell from "swell-js";


const options = {
  useCamelCase: true,
};

swell.init("spout-water", "pk_WiQPovPwyGYfwAtZdLjkg43ERKKCRCgf", options);


export const useImages = (product: any) => {
  const [images, setImages] = useState([]);
 
  useEffect(() => {
      // check if incoming object is product or variant by checking if the object has parent_id.
      const productImages = product?.images?.map((image: any) => image);
      const variantImages = product?.variants?.results.map((variant: { images: any; }) => variant.images).flat().map((image: any) => image);
      const allImages = productImages?.concat(variantImages).flat().filter((v: { file: { md5: any; }; },i: any,a: any[])=>a.findIndex(v2=>(v2.file.md5===v.file?.md5))===i)
      setImages(allImages);
   
  }, [product]);
  

  return images
}

export const useMedia = (product: any) => {
  const images = useImages(product);
  const [media, setMedia] = useState([]);
  
  useEffect(() => {
    setMedia((media) => [...media, ...images]);
  }, [images]);
  
  return media;
}

// create an options type for any array
type Optionstype = any;

export const useOptions = (product: any) => {

  const [options, setOptions] = React.useState<Optionstype>([]);

  function unique(value: any, index: any, self: string | any[]) {
    return self.indexOf(value) === index;
  }


  useEffect(() => {
    product?.options?.map((option: any) => {
      setOptions((options: any) => [...options, option]);
    });
  }, [product]);

  return options?.filter(unique);
}

export const useSelectedOptions = () => {
  const [selectedOptions, setSelectedOptions] = useState([{}]);

  useEffect(() => {
    setSelectedOptions((selectedOptions) => [...selectedOptions]);
  }, [setSelectedOptions, selectedOptions]);

  return [selectedOptions, setSelectedOptions];
}

export const useVariants = (product: any) => {
  const [variants, setVariants] = useState([]);

  function unique(value: any, index: any, self: string | any[]) {
    return self.indexOf(value) === index;
  }


  useEffect(() => {
    setVariants(product?.variants?.results?.flat()); 
  }, [product]);

  return variants?.filter(unique);
}

// create an variant type for any array
type VariantType = any;

export const useVariant = (product: any, options: object) => {
  // options are an object like { Color: 'Red', Size: 'Small' }
 
  const [variant, setVariant] = React.useState<VariantType>([]);

  const getVariant = async () => {
    // Resolves the variation price, sale_price, orig_price, and stock_status values based on the customer's chosen options.
    const v = await swell.products.variation(product, options)


    return v
  }

  // fix this Argument of type 'Product' is not assignable to parameter of type 'SetStateAction<VariantType>'
  // Type 'Product' is missing the following properties from type 'VariantType': length, pop, push, concat, and 26 more.

  getVariant().then((variant) => {
    return setVariant(variant);
  })


  return variant
};

