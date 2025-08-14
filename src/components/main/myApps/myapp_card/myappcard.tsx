const MyAppCard = ({
  img_link,
  alt_img,
  title,
  description,
  link_repo,
  link_app,
}: {
  img_link?: string;
  alt_img?: string;
  title: string;
  description: string;
  link_repo?: string;
  link_app?: string;
}) => {
  return (
    <div className="flex flex-col shadow-[0_0_0_2px_rgba(255,255,255,0.1)] rounded-lg overflow-hidden w-[90%] md:w-[40%] md:h-128">
      <div className="h-[50%]">
        <img
          src={img_link}
          alt={alt_img}
          className="w-full h-full object-cover md:object-contain"
        />
      </div>
      <div className="flex flex-col h-[50%] p-4 justify-between">
        <div>
          <span className="text-2xl font-bold text-[#FDD500]">{title}</span>
          <p className="text-lg text-gray-300 mt-4 mb-4 line-clamp-4">
            {description}
          </p>
        </div>

        <div className="flex gap-2">
          {link_app && (
            <a
              href={link_app}
              className="text-[#f5f5f5] hover:underline px-4 py-2 bg-[#11308C] font-bold rounded"
            >
              Probar APP
            </a>
          )}
          {link_repo && (
            <a
              href={link_repo}
              className="text-[#f5f5f5] hover:underline px-4 py-2 bg-[#11308C] font-bold rounded"
            >
              Repositorio
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyAppCard;
