import { Typography } from "@material-tailwind/react";
import ACard from "@/components/home/Card";
import Point from "@/components/utils/Point";

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

const Points = [
  "•	Refrain from drinking tea or coffee with meals.",
  "•	Avoid eating foods rich in calcium with those rich in iron.",
  "•	Eat iron-rich foods alongside those rich in vitamin C.",
  "•	Cook with a cast-iron skillet.",
  "•	Cook foods for shorter periods.",
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
        Diet plan to treat Anemia
      </Typography>
      <img
        data-aos="fade-up"
        src="https://www.planetayurveda.com/wp-content/uploads/2020/04/Food-to-avoid-and-Consume-in-Anemia.jpg"
        className="ml-auto mr-auto w-2/3 lg:w-1/2 rounded-2xl"
        alt="blood cells"
      />
      <Typography
        data-aos="fade-up"
        variant="paragraph"
        className="text-xl text-justify mt-16 w-2/3 lg:w-1/2 ml-auto mr-auto"
      >
        A diet plan for iron deficiency anemia needs to include both heme and
        non-heme iron-rich foods, such as meat, poultry, seafood, beans, and
        green, leafy vegetables. It will also include foods that improve iron
        absorption and avoid those that may interfere with this process. Iron
        deficiency anemia occurs when your body does not have enough iron to
        form healthy red blood cells. Iron deficiency anemia has a number of
        causes, but is most commonly the result of inadequate dietary intake
        and/or blood loss. A person with iron deficiency anemia will typically
        receive oral iron supplementation or intravenous (IV) iron treatment.
        People with iron deficiency anemia are also encouraged to increase their
        dietary intake of iron by prioritizing iron-rich foods. Adding iron-rich
        foods to the diet can help treat anemia. A healthcare professional can
        advise about the kinds of foods to choose from and other ways to
        increase iron absorption. The best diet for a person with anemia
        includes plenty of foods rich in iron and other foods that help the body
        to absorb iron. A person should also be aware of foods that can inhibit
        iron absorption.
      </Typography>

      <Typography
        data-aos="fade-up"
        variant="h6"
        className="text-xl text-justify mt-16 w-2/3 lg:w-1/2 ml-auto mr-auto text-green-600"
      >
        Foods you can have :
      </Typography>

      <div className="flex flex-wrap justify-center gap-8 items-center pt-5 w-2/3 lg:w-1/2 ml-auto mr-auto">
        {Diet.map((cause, index) => (
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
        variant="h6"
        className="text-xl text-justify mt-16 w-2/3 lg:w-1/2 ml-auto mr-auto text-red-600"
      >
        Foods you need to avoid:
      </Typography>

      <div className="flex flex-wrap justify-center gap-8 items-center pt-5 w-2/3 lg:w-1/2 ml-auto mr-auto">
        {Diet1.map((cause, index) => (
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
        variant="h5"
        className="text-xl text-justify mt-16 w-2/3 lg:w-1/2 ml-auto mr-auto"
      >
        Tips for getting more iron in the diet :
      </Typography>

      <Typography
        variant="paragraph"
        data-aos="fade-up"
        className="text-xl text-justify mt-16 w-2/3 lg:w-1/2 ml-auto mr-auto"
      >
        Although adding foods rich in iron to your diet can help raise blood
        levels of iron, most people with iron deficiency need to take
        supplemental iron to achieve healthy iron status. Some people do not
        absorb iron well and may need to have IV iron treatments. A person’s
        doctor will advise on the best treatment for their specific needs.
        However, the following strategies can maximize a person’s iron intake:
      </Typography>

      <div className="block justify-center gap-4 items-center pt-5 w-2/3 lg:w-1/2 ml-auto mr-auto">
        {Points.map((point, index) => {
          return <Point key={index} point={point} isDark={false} />;
        })}
      </div>
    </div>
  );
}
