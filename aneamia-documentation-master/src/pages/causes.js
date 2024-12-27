import { Typography } from "@material-tailwind/react";
import ACard from "@/components/home/Card";
import Point from "@/components/utils/Point";

const Cau = [
  {
    image_url: "https://i.imgur.com/9fdr98H.png",
    title: "Iron Deficiency",
  },
  {
    image_url: "https://i.imgur.com/RkIiMIT.png",
    title: "Vitamin Deficiency",
  },
  {
    image_url: "https://i.imgur.com/I575xmr.jpg",
    title: "Folate Deficiency",
  },
  {
    image_url: "https://i.imgur.com/zggGuse.png",
    title: "Pregnancy                    ",
  },
  {
    image_url: "https://i.imgur.com/3KNBtOJ.png",
    title: "Bone Marrow Deficiency",
  },
];
const Points = [
  "Changes in the lining of the stomach or intestines that affect how well nutrients are absorbed (for example, celiac disease",
  "Poor diet",
  "Surgery that removes part of the stomach or intestines",
  "Destruction of red blood cells earlier than normal (which may be caused by immune system problems)",
  "Long-term (chronic) diseases such as chronic kidney disease, cancer, ulcerative colitis, or rheumatoid arthritis",
  "Some forms of anemia, such as thalassemia or sickle cell anemia, which can be inherited",
  "Problems with bone marrow such as lymphoma, leukemia, myelodysplasia, multiple myeloma, or aplastic anemia",
  "Slow blood loss (for example, from heavy menstrual periods or stomach ulcers)",
  "Sudden heavy blood loss",
  "Certain medicines",
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
        Where does Anaemia come from?
      </Typography>
      <img
        data-aos="fade-up"
        src="https://www.news-medical.net/images/Article_Images/ImageForArticle_22410_16506406729562977.jpg"
        className="ml-auto mr-auto w-2/3 lg:w-1/2 rounded-2xl"
        alt="blood cells"
      />
      <Typography
        data-aos="fade-up"
        variant="paragraph"
        className="text-xl text-justify mt-16 w-2/3 lg:w-1/2 ml-auto mr-auto"
      >
        Although many parts of the body help make red blood cells, most of the
        work is done in the bone marrow. Bone marrow is the soft tissue in the
        center of bones that helps form all blood cells. Healthy red blood cells
        last between 90 and 120 days. Parts of your body then remove old blood
        cells. A hormone called erythropoietin (epo) made in your kidneys
        signals your bone marrow to make more red blood cells. Hemoglobin is the
        oxygen-carrying protein inside red blood cells. It gives red blood cells
        their color. People with anemia do not have enough hemoglobin.
        Hemoglobin
      </Typography>

      <div className="flex flex-wrap justify-center gap-8 items-center pt-5 w-2/3 lg:w-1/2 ml-auto mr-auto">
        {Cau.map((cause, index) => (
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
        The body needs certain vitamins, minerals, and nutrients to make enough
        red blood cells. Iron, vitamin B12, and folic acid are three of the most
        important ones. The body may not have enough of these nutrients due to:
      </Typography>

      <div className="block justify-center gap-4 items-center pt-5 w-2/3 lg:w-1/2 ml-auto mr-auto">
        {Points.map((point, index) => {
          return <Point key={index} point={point} isDark={false} />;
        })}
      </div>
    </div>
  );
}
