import Image from "next/image";
import React from "react";
import SimpleSlider from "../carousel/Carousel";
const Hero = () => {
  return (
    <SimpleSlider slideToShow={1}>
      <div  >
        <Image
        className="w-auto h-h-auto"
          src="https://res.cloudinary.com/dhxccll9e/image/upload/v1663926708/homePage/mainCard/bookgaraImage_gcfyk7.svg"
          width={950}
          height={500}
          alt={"bookgara"}
          priority
        />
      </div>
      <div  >
        <Image
        className="w-auto h-h-auto"
          src="https://res.cloudinary.com/dhxccll9e/image/upload/v1663926708/homePage/mainCard/bookgaraImage_gcfyk7.svg"
          width={950}
          height={500}
          alt={"bookgara"}
          priority

        />
      </div>
      <div  >
        <Image
        className="w-auto h-h-auto"
          src="https://res.cloudinary.com/dhxccll9e/image/upload/v1663926708/homePage/mainCard/bookgaraImage_gcfyk7.svg"
          width={950}
          height={500}
          priority
          alt={"bookgara"}
        />
      </div>
      <div  >
        <Image
        className="w-auto h-h-auto"
          src="https://res.cloudinary.com/dhxccll9e/image/upload/v1663926708/homePage/mainCard/bookgaraImage_gcfyk7.svg"
          width={950}
          height={500}
          priority
          alt={"bookgara"}
        />
      </div>
      <div  >
        <Image
        className="w-auto h-h-auto"
          src="https://res.cloudinary.com/dhxccll9e/image/upload/v1663926708/homePage/mainCard/bookgaraImage_gcfyk7.svg"
          width={950}
          height={500}
          priority
          alt={"bookgara"}
        />
      </div>
      <div  >
        <Image
        className="w-auto h-h-auto"
          src="https://res.cloudinary.com/dhxccll9e/image/upload/v1663926708/homePage/mainCard/bookgaraImage_gcfyk7.svg"
          width={950}
          height={500}
          priority
          alt={"bookgara"}
        />
      </div>
    </SimpleSlider>
  );
};

export default Hero;
