import { Typography } from "@material-tailwind/react";
import ACard from "@/components/home/teamcard";
import Image from "next/image";

const teams = [
  {
    image_url: "https://i.imgur.com/bTBlVwp.jpg",
    title: "Bharath Anuj P  [The Core Team]",
  },
  {
    image_url: "https://i.imgur.com/Z4aNrjj.jpg",
    title: "Chalicham Divyanth [The Core Team]",
  },
  {
    image_url: "https://i.imgur.com/kzJajrp.jpg",
    title: "Amrutham Varshit Purna [The Core Team]",
  },
  {
    image_url: "https://i.imgur.com/Dl0D4Iv.jpg",
    title: "Alla Venkata Siddhardha [The Core Team]",
  },
  {
    image_url: "https://i.imgur.com/QEEmAY4.jpg",
    title: "B Mohit Manomay [The Core Team]",
  },
  {
    image_url:
      "https://media.licdn.com/dms/image/D5603AQEH54zPDtT9Lw/profile-displayphoto-shrink_400_400/0/1685177082765?e=1690416000&v=beta&t=xuWqdaeShc-41-GqRTDBEOZ0BE39teu2PlVsw66fd-I",
    title: "Deepak Menan R [Frontend Team]",
  },
  {
    image_url: "https://i.imgur.com/3xoo0iN.jpg",
    title: "Gokul [Frontend Team]",
  },
  {
    image_url: "https://i.imgur.com/h6WeAIc.jpg",
    title: "Lisha [Frontend Team]",
  },
];

const team = [
  {
    image_url:
      "https://amrita.edu/wp-content/uploads/2014/01/Dr-Senthil-Kumar-T_associate-professor_cse_engineering_coimbatore.jpg",
    title:
      "Dr .T Senthil Kumar (t_senthilkumar@cb.amrita.edu) Computer Science and Engineering",
  },
  {
    image_url:
      "https://amrita.edu/wp-content/uploads/2022/01/Dr.-Janci-Rani-P.-R..jpg",
    title:
      "Dr .P R Janci Rani (b_janci@cb.amrita.edu) Food and Nutrition Department",
  },
  {
    image_url:
      "https://amrita.edu/wp-content/uploads/2022/01/Dr.N.Tharani-Devi-y3r26glb33i0gcs7f9ltz4.jpg",
    title:
      "Dr. N.Tharani Devi (n_tharanidevi@cb.amrita.edu) Food and Dutrition Department",
  },
  {
    image_url:
      "https://amrita.edu/wp-content/uploads/2014/01/Dr-Jeyakumar-G_associate-professor_vice-chair-person_cse_engineering_coimbatore.jpg",
    title:
      "Dr. Jeyakumar G (g_jeyakumar@cb.amrita.edu) Computer Science and Engineering",
  },
];
const clg = "https://img.collegepravesh.com/2021/07/ASE-Coimbatore.jpg";
/* eslint-disable @next/next/no-img-element */
export default function Causes() {
  return (
    <div className="mt-32 p-4">
      <Image
        src="/assests/JKsir.jpg"
        alt="Clg"
        layout="fill"
        objectFit="cover"
      ></Image>
      {/* title typography */}
      <Typography
        data-aos="fade-up"
        variant="h2"
        className="text-4xl text-center lg:text-6xl mb-8"
      >
        The Team
      </Typography>

      <Typography
        data-aos="fade-up"
        variant="paragraph"
        className="text-3xl text-justify mt-16 w-2/3 lg:w-1/2 ml-auto mr-auto"
      >
        Mentors
      </Typography>
      <div className="flex flex-wrap justify-center gap-8 items-center pt-5 w-2/3 lg:w-1/2 ml-auto mr-auto">
        {team.map((cause, index) => (
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
        className="text-3xl text-justify mt-16 w-2/3 lg:w-1/2 ml-auto mr-auto"
      >
        Students
      </Typography>
      <div className="flex flex-wrap justify-center gap-8 items-center pt-5 w-2/3 lg:w-1/2 ml-auto mr-auto">
        {teams.map((cause, index) => (
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
      ></Typography>

      <div className="block justify-center gap-4 items-center pt-5 w-2/3 lg:w-1/2 ml-auto mr-auto"></div>
    </div>
  );
}
