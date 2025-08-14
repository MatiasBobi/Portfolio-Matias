const EducationCard = ({
  imagesrc,
  imagealt,
  title,
  description,
}: {
  imagesrc: string;
  imagealt: string;
  title: string;
  description: string;
}) => {
  return (
    <article className="md:flex-1 mt-8">
      <div className="max-w-md mx-auto rounded-lg shadow-lg overflow-hidden md:max-w-2xl">
        <div className="md:flex md:flex-col">
          <div className="md:flex-shrink-0 mt-8 md:mx-auto h-56">
            <img
              className="h-48 w-full object-contain md:h-full md:w-48"
              src={imagesrc}
              alt={imagealt}
            />
          </div>
          <div className="p-6 flex flex-col justify-center items-center">
            <h3 className="text-[#FDD500] text-xl font-bold ">{title}</h3>
            <p className="text-[#f5f5f5] mt-2 text-center">{description}</p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default EducationCard;
