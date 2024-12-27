import { Card, CardBody, Typography } from "@material-tailwind/react";

export default function Cards({ title, imageUrl, isDark }) {
  // const [isBookmarked, setIsBookmarked] = useState(false);
  // const handleBookmarkClick = () => {
  //   setIsBookmarked(!isBookmarked);
  // };

  return (
    <Card
      className={
        isDark
          ? "w-full max-w-[20rem] flex shadow-lg bg-primaryColor flex"
          : "w-full max-w-[20rem] flex shadow-lg bg-backgroundColor flex"
      }
      data-aos="fade-up"
    >
      <CardBody>
        <img src={imageUrl} className="h-1/6" alt="Image-Check" />
        <div className="mb-3 mt-3 flex items-center justify-between">
          <Typography
            variant="h6"
            className={
              isDark
                ? "font-bold text-backgroundColor"
                : "font-bold text-primaryColor"
            }
          >
            {title}
          </Typography>
        </div>
      </CardBody>
    </Card>
  );
}
