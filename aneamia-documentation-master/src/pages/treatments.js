import { Typography } from "@material-tailwind/react";
import ACard from "@/components/home/Card";
import Point from "@/components/utils/Point";

const Treatments = [
  {
    image_url:
      "https://i.ndtvimg.com/i/2018-03/iron-supplements_650x400_61520592439.jpg",
    title: "Taking Iron Supplements",
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

const Points = [
  "•	IRON DEFICIENCY ANEMIAS. Treatment for this form of anemia usually involves taking iron supplements and changing your diet. For some people, this might involve receiving iron through a vein.If the cause of iron deficiency is loss of blood — other than from menstruation — the source of the bleeding must be located and the bleeding stopped. This might involve surgery.",
  "•	VITAMIN DEFICIENCY ANEMIAS. Treatment for folic acid and vitamin C deficiency involves dietary supplements and increasing these nutrients in your diet.If your digestive system has trouble absorbing vitamin B-12 from the food you eat, you might need vitamin B-12 shots. At first, you might have the shots every other day. Eventually, you'll need shots just once a month, possibly for life, depending on your situation",
  "•	ANEMIA OF CHRONIC DISEASE. There's no specific treatment for this type of anemia. Doctors focus on treating the underlying disease. If symptoms become severe, a blood transfusion or injections of a synthetic hormone normally produced by your kidneys (erythropoietin) might help stimulate red blood cell production and ease fatigue.",
  "•	APLASTIC ANEMIA. Treatment for this anemia can include blood transfusions to boost levels of red blood cells. You might need a bone marrow transplant if your bone marrow can't make healthy blood cells",
  "•	ANEMIAS ASSOCIATED WITH BONE MARROW DISEASES. Treatment of these various diseases can include medication, chemotherapy or bone marrow transplantation.",
  "•	HEMOLYTIC ANEMIAS. Managing hemolytic anemias includes avoiding suspect medications, treating infections and taking drugs that suppress your immune system, which could be attacking your red blood cells. Severe hemolytic anemia generally needs ongoing treatment.",
  "•	SICKLE CELL ANEMIA. Treatment might include oxygen, pain relievers, and oral and intravenous fluids to reduce pain and prevent complications. Doctors might also recommend blood transfusions, folic acid supplements and antibiotics. A cancer drug called hydroxyurea (Droxia, Hydrea, Siklos) also is used to treat sickle cell anemia.",
  "•	THALASSEMIA. Most forms of thalassemia are mild and require no treatment. More-severe forms of thalassemia generally require blood transfusions, folic acid supplements, medication, removal of the spleen, or a blood and bone marrow stem cell transplant.",
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
        How To Treat It ?
      </Typography>
      <img
        data-aos="fade-up"
        src="https://www.nuvovivo.com/wp-content/uploads/2021/10/Treatment-for-Anemia.jpg"
        className="ml-auto mr-auto w-2/3 lg:w-1/2 rounded-2xl"
        alt="blood cells"
      />
      <Typography
        data-aos="fade-up"
        variant="paragraph"
        className="text-xl text-justify mt-16 w-2/3 lg:w-1/2 ml-auto mr-auto"
      >
        Anemia treatments:
      </Typography>

      <div className="flex flex-wrap justify-center gap-8 items-center pt-5 w-2/3 lg:w-1/2 ml-auto mr-auto">
        {Treatments.map((cause, index) => (
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
        Anemia treatment depends on the cause.
      </Typography>

      <div className="block justify-center gap-4 items-center pt-5 w-2/3 lg:w-1/2 ml-auto mr-auto">
        {Points.map((point, index) => {
          return <Point key={index} point={point} isDark={false} />;
        })}
      </div>
    </div>
  );
}
