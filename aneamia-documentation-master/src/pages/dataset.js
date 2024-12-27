import { Typography } from "@material-tailwind/react";
import ACard from "@/components/home/Card";
import Button from "@material-tailwind/react";
function handleClick() {
  window.open(
    "https://drive.google.com/drive/folders/1TwoRUARlPF-Z9772m3d99A2F7SrQ8Elp",
    "_blank"
  );
}
const Eye = [
  {
    image_url: "https://i.imgur.com/WIdU69o.png",
    title: "Anemic Eye",
  },
  {
    image_url: "https://i.imgur.com/iL7CLvl.jpg",
    title: "Non - Anemic Eye",
  },
];
const Nail = [
  {
    image_url: "https://i.imgur.com/QRMphyp.png",
    title: "Anemic Nail",
  },
  {
    image_url: "https://i.imgur.com/GJG0SJ8.png",
    title: "Non - Anemic Nail",
  },
];

/* eslint-disable @next/next/no-img-element */
export default function Causes() {
  return (
    <div className="mt-32 p-4">
      {/* title typography */}
      <Typography
        data-aos="fade-up"
        variant="h2"
        className="text-4xl text-center lg:text-6xl mb-8"
      >
        Data Set on Anemia
      </Typography>
      <img
        data-aos="fade-up"
        src="https://i.imgur.com/oKYPJLf.png"
        className="ml-auto mr-auto w-2/3 lg:w-1/2 rounded-2xl"
        alt="blood cells"
      />
      <Typography
        data-aos="fade-up"
        variant="paragraph"
        className="text-xl text-justify mt-16 w-2/3 lg:w-1/2 ml-auto mr-auto"
      >
        Data was collected manually by obtaining eye and nail images from
        patients located in Ettimiddai, Coimbatore. The images were captured
        using an iPhone 13 equipped with specific lighting conditions to ensure
        consistency. The collected dataset was curated to ensure that it meets
        the quality requirements, resulting in a total of 54 eye images and 54
        nail images. However, 4 nail images were excluded from the dataset due
        to disruptive elements such as painted or dusty nails, as well as nails
        decorated with mehandi.
      </Typography>
      <Typography
        data-aos="fade-up"
        variant="h6"
        className="text-xl text-justify mt-16 w-2/3 lg:w-1/2 ml-auto mr-auto"
      >
        Eye DataSet :
      </Typography>

      <div className="flex flex-wrap justify-center gap-8 items-center pt-5 w-2/3 lg:w-1/2 ml-auto mr-auto">
        {Eye.map((eye, index) => (
          <ACard
            key={index}
            title={eye.title}
            description={eye.description}
            imageUrl={eye.image_url}
            isDark={false}
          />
        ))}
      </div>

      <Typography
        data-aos="fade-up"
        variant="h6"
        className="text-xl text-justify mt-16 w-2/3 lg:w-1/2 ml-auto mr-auto"
      >
        Nail DataSet :
      </Typography>

      <div className="flex flex-wrap justify-center gap-8 items-center pt-5 w-2/3 lg:w-1/2 ml-auto mr-auto">
        {Nail.map((nail, index) => (
          <ACard
            key={index}
            title={nail.title}
            description={nail.description}
            imageUrl={nail.image_url}
            isDark={false}
          />
        ))}
      </div>
      <div>
        <Typography
          variant="h6"
          className="text-xl text-justify mt-16 w-2/3 lg:w1/2 ml-auto mr-auto"
        >
          Live DataSet :
        </Typography>
        <div className="flex flex-wrap justify-center gap-8 items-center pt-5 w-2/3 lg:w-1/2 ml-auto mr-auto">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleClick}
          >
            Live DataSet
          </button>
        </div>
      </div>
    </div>
  );
}
