import { Typography } from "@material-tailwind/react";
import ACard from "@/components/home/Card";
import Point from "@/components/utils/Point";

const Symptoms = [
  {
    image_url:
      "https://cdn.sanity.io/images/0b678gck/buoy-public-site/bc669abafc540cb91aae1c2ba9105ae9554ef525-1000x700.png",
    title: "Episodes Of Pain",
  },
  {
    image_url:
      "https://media.istockphoto.com/id/1226761464/vector/swelling-of-baby-limbs.jpg?s=612x612&w=0&k=20&c=JEukWDjGQDPS8xvz7I-3YLbW4qGd6yt5MAC8Z3OgLME=",
    title: "Swelling of hands and feet",
  },
  {
    image_url:
      "https://images.squarespace-cdn.com/content/v1/55de0985e4b03712f66c4383/1466681483640-T3DY9URQWILZP2V79OQU/CHLAMYDIA.png",
    title: "Frequent infections",
  },
  {
    image_url:
      "https://thumbs.dreamstime.com/b/teenager-thinking-shaving-stepping-boyhood-teen-boy-holding-razor-first-shave-vector-cartoon-187833378.jpg",
    title: "Delayed growth or puberty",
  },
  {
    image_url: "https://cdn-icons-png.flaticon.com/512/6064/6064999.png",
    title: "Vision problems",
  },
];

const Points = [
  "Feeling weak or tired more often than usual, or with exercise",
  "Problems concentrating or thinking",
  "	Abnormal or increased menstrual bleeding in females",
  "	Loss of sexual desire in men",
  "	Blue color to the whites of the eyes",
  "	Desire to eat ice or other non-food things (pica syndrome)",
  "	Lightheadedness when you stand up",
  "	Pale skin color ,	Shortness of breath with mild activity or even at rest",
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
        How Can We Find It ?
      </Typography>
      <img
        data-aos="fade-up"
        src="https://www.verywellhealth.com/thmb/YuZot3mFTItIRreVDMtV-3OX2Ts=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/anemia-after-surgery-3156852-Final-63c258f51d7846e1b24d870a3b8ea88c.png"
        className="ml-auto mr-auto w-2/3 lg:w-1/2 rounded-2xl"
        alt="blood cells"
      />
      <Typography
        data-aos="fade-up"
        variant="paragraph"
        className="text-xl text-justify mt-16 w-2/3 lg:w-1/2 ml-auto mr-auto"
      >
        You may have no symptoms if the anemia is mild or if the problem
        develops slowly. Symptoms that may occur first include:
      </Typography>

      <div className="flex flex-wrap justify-center gap-8 items-center pt-5 w-2/3 lg:w-1/2 ml-auto mr-auto">
        {Symptoms.map((cause, index) => (
          <ACard
            key={index}
            title={cause.title}
            description={cause.description}
            imageUrl={cause.image_url}
            isDark={false}
          />
        ))}
      </div>

      <Typography
        data-aos="fade-up"
        variant="paragraph"
        className="text-xl text-justify mt-16 w-2/3 lg:w-1/2 ml-auto mr-auto"
      >
        If the anemia gets worse, symptoms may include:
      </Typography>

      <div className="block justify-center gap-4 items-center pt-5 w-2/3 lg:w-1/2 ml-auto mr-auto">
        {Points.map((point, index) => {
          return <Point key={index} point={point} isDark={false} />;
        })}
      </div>
    </div>
  );
}
