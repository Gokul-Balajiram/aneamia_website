import { Card, CardBody, Typography } from "@material-tailwind/react";

export default function Point({ point, isDark }) {
  return (
    <Card
      className={
        !isDark
          ? "w-full shadow-lg bg-primaryColor mb-2"
          : "w-full shadow-lg bg-backgroundColor  mb-2"
      }
      data-aos="fade-up"
    >
      <CardBody>
        <div className="mb-3 flex items-center justify-between">
          <Typography
            variant="paragraph"
            className={
              !isDark
                ? "font-extralight text-backgroundColor"
                : "font-extralight text-primaryColor"
            }
          >
            {point}
          </Typography>
        </div>
      </CardBody>
    </Card>
  );
}
