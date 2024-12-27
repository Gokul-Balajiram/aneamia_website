import ACard from "@/components/home/Card";
import { Button, Typography } from "@material-tailwind/react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import aneamia_1 from "../assets/aneamia_1.webp";

const Causes = [
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

const Symptoms = [
  {
    image_url: "https://i.imgur.com/cfw1LhA.png",
    title: "Episodes Of Pain",
  },
  {
    image_url: "https://i.imgur.com/wTX5xkF.jpg",
    title: "Swelling of hands and feet",
  },
  {
    image_url: "https://i.imgur.com/A86NF2g.png",
    title: "Frequent infections",
  },
  {
    image_url: "https://i.imgur.com/75OXpHq.png",
    title: "Delayed growth or puberty",
  },
  {
    image_url: "https://i.imgur.com/UWSdaY3.png",
    title: "Vision problems",
  },
];

const Treatments = [
  {
    image_url:
      "https://i.ndtvimg.com/i/2018-03/iron-supplements_650x400_61520592439.jpg",
    title: "Taking Iron Supllements",
  },
  {
    image_url:
      "https://vinmec-prod.s3.amazonaws.com/images/20190725_042133_694027_truyen-mau.max-1800x1800.jpg",
    title: "Blood Tranfusions",
  },
  {
    image_url:
      "https://media.istockphoto.com/id/494066462/photo/pills-with-b9-folic-acid-element-dietary-supplements-vitamin-c.jpg?s=1024x1024&w=is&k=20&c=n0CUPtM5cHn7KTfbLPmD2rNej7R33Cj-99UHDARNKUY=",
    title: "Folic Acid Supllements",
  },
  {
    image_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSioUfdp4wOcPA6TJ87b82g6JkpOoZVrmFwV6uI4b_dge3M8FKwr3al1IkXlqdC6Q4FvE&usqp=CAU",
    title: "Bone Marrow Transplantation",
  },
];

const Diet = [
  {
    image_url:
      "https://domf5oio6qrcr.cloudfront.net/medialibrary/11499/3b360279-8b43-40f3-9b11-604749128187.jpg",
    title: "Fruits And Vegetables",
  },
  {
    image_url:
      "https://www.washingtonpost.com/rf/image_1484w/2010-2019/WashingtonPost/2011/06/21/LocalLiving/Images/we-eatdrink23.jpg?t=20170517",
    title: "Nuts And Seeds",
  },
  {
    image_url:
      "https://recipes.net/wp-content/uploads/2020/08/different-types-of-fish-and-meat-scaled.jpg",
    title: "Fish And Meat",
  },
  {
    image_url:
      "https://5.imimg.com/data5/AS/UX/GLADMIN-25013297/pulses-and-beans-500x500.jpg",
    title: "Beans And Pulses",
  },
];

const Diet1 = [
  {
    image_url:
      "https://hummingbirdtearoom.com/wp-content/uploads/2021/11/Tea-1024x536.jpg",
    title: "Coffee And Tea",
  },
  {
    image_url:
      "https://www.virasmart.co/wp-content/uploads/2022/05/milk-and-dairy-products-food-set-vector.jpg",
    title: "Milk And Dairy Products",
  },
  {
    image_url: "https://i.ytimg.com/vi/RRDLBms-4yM/maxresdefault.jpg",
    title: "Foods With Tannins",
  },
  {
    image_url: "https://i.ytimg.com/vi/WmmghwWpQR4/maxresdefault.jpg",
    title: "Foods With Phytic Acids",
  },
];

const Types = [
  {
    image_url: "",
    title: "APLASTIC ANEMIA",
  },
  {
    image_url: "",
    title: "IRON DEFICIENCY ANEMIA",
  },
  {
    image_url: "",
    title: "SICKLE CELL ANEMIA",
  },
  {
    image_url: "",
    title: "THALASSEMIA",
  },
  {
    image_url: "",
    title: "VITAMIN DEFICIENCY ANEMIA",
  },
];

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 600,
      delay: 100,
    });
  }, []);

  return (
    <div className="mt-32">
      <div
        data-aos="fade-up"
        className="block md:flex lg:flex md:flex-row lg:flex-row h-full lg:ml-16 lg:mr-16"
      >
        <Image
          data-aos="fade-right"
          className="w-1/2 ml-auto mr-auto align-middle"
          src={aneamia_1}
          alt="aneamia_1"
        />
        <div className="w-1/2 ml-auto mr-auto flex flex-col gap-4 justify-center">
          <Typography variant="h1" className="text-4xl text-center lg:text-6xl">
            Be Aware about Anaemia
          </Typography>
          <Typography variant="lead" className="text-center">
            {
              "It's essential to be aware of anemia, a prevalent health condition that affects millions of people worldwide. Anemia occurs when the body lacks sufficient red blood cells or hemoglobin. Understanding the causes, symptoms, treatment, and prevention of anemia is crucial to take charge of your health and stay informed. With the right information, you can recognize anemia's warning signs and take steps to prevent its onset or manage its symptoms."
            }
          </Typography>
          <Link href={"/#about"}>
            <Button size="lg" fullWidth={true} className="bg-black">
              Get Started
            </Button>
          </Link>
        </div>
      </div>

      {/* A neat about section with bg-backgroundColor and text-primaryColor, an image on left with text on right */}
      <div
        id="about"
        className="mt-16 block md:flex lg:flex md:flex-row lg:flex-row h-full lg:ml-16 lg:mr-16"
      >
        <div
          data-aos="fade-up"
          className="lg:w-1/2 ml-auto mr-auto flex flex-col gap-4 justify-center p-4"
        >
          <Typography variant="h1" className="text-4xl text-center lg:text-6xl">
            What is Anaemia?
          </Typography>
          <Typography variant="lead" className="text-center">
            Anemia is a common disease that affects ~1.6 billion people
            worldwide, especially infants and women. The World Health
            Organization (WHO) has estimated that the global prevalence of
            anemia to be ~24.8%. Anemia is a condition in which the body does
            not have enough healthy red blood cells. It is a blood disorder in
            which the blood has a reduced ability to carry oxygen due to a lower
            than normal number of red blood cells, or a reduction in the amount
            of hemoglobin.
          </Typography>
        </div>
        <img
          data-aos="fade-up"
          className="w-1/2 h-fit ml-auto mr-auto align-middle"
          src="https://img.freepik.com/free-vector/blood-test-with-anemia-infographic_1284-64325.jpg?w=2000"
          alt="aneamia_1"
        />
      </div>

      <div
        id="causes"
        className="bg-primaryColor text-backgroundColor p-4 md:p-8 lg:p-16 mt-16 h-full align-middle"
      >
        <Typography
          variant="h1"
          className="text-4xl lg:text-6xl pt-16 pb-16 text-center"
          data-aos="fade-up"
        >
          Causes
        </Typography>
        <div className="flex flex-wrap pb-5 justify-center gap-8 items-center pt-5">
          {Causes.map((cause, index) => (
            <ACard
              key={index}
              title={cause.title}
              description={cause.description}
              imageUrl={cause.image_url}
              isDark={false}
            />
          ))}
        </div>
      </div>

      <div
        id="symptoms"
        className="bg-backgroundColor text-primaryColor p-4 md:p-8 lg:p-16 mt-16 h-full align-middle"
      >
        <Typography
          variant="h1"
          className="text-4xl lg:text-6xl pt-16 pb-16 text-center"
          data-aos="fade-up"
        >
          Symptoms
        </Typography>
        <div className="flex flex-wrap pb-5 justify-center gap-8 items-center pt-5">
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
      </div>

      <div
        id="treatments"
        className="bg-primaryColor text-backgroundColor p-4 md:p-8 lg:p-16 mt-16 h-full align-middle"
      >
        <Typography
          variant="h1"
          className="text-4xl lg:text-6xl pt-16 pb-16 text-center"
          data-aos="fade-up"
        >
          Treatments
        </Typography>
        <div className="flex flex-wrap justify-center pb-5 gap-8 items-center pt-5">
          {Treatments.map((treatments, index) => (
            <ACard
              key={index}
              title={treatments.title}
              description={treatments.description}
              imageUrl={treatments.image_url}
              isDark={false}
            />
          ))}
        </div>
      </div>
      <div
        id="diet"
        className="h-full bg-backgroundColor text-primaryColor p-4 md:p-8 lg:p-16 mt-16 align-middle"
      >
        <Typography
          variant="h1"
          className="text-4xl lg:text-6xl pb-16 text-center"
          data-aos="fade-up"
        >
          Diet
        </Typography>
        <Typography
          variant="h4"
          className="text-4xl text-green-600 lg:text-6xl pb-16 text-center"
          data-aos="fade-right"
        >
          Can Have :
        </Typography>
        <div className="flex flex-wrap justify-center items-center gap-8 pt-5">
          {Diet.map((diet, index) => (
            <ACard
              key={index}
              title={diet.title}
              description={diet.description}
              imageUrl={diet.image_url}
              isDark={false}
            ></ACard>
          ))}
        </div>
        <Typography
          variant="h4"
          className="text-4xl text-red-600 lg:text-6xl pt-16 pb-16 text-center"
          data-aos="fade-right"
        >
          Should Avoid :
        </Typography>
        <div className="flex flex-wrap justify-center items-center gap-8 pb-5 pt-5">
          {Diet1.map((diet, index) => (
            <ACard
              title={diet.title}
              key={index}
              description={diet.description}
              imageUrl={diet.image_url}
              isDark={false}
            ></ACard>
          ))}
        </div>
      </div>
    </div>
  );
}
