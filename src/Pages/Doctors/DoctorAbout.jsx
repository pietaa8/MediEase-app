const DoctorAbout = ({ doctor = {} }) => {
  return (
    <div>
      <div>
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2">
          About of{" "}
          <span className="text-irisBlueColor font-bold text-[24px] leading-9">
            {doctor?.name || "Doctor"}
          </span>
        </h3>
        <p className="text_para">
          <strong>{doctor?.name || "Dr. Faris"}</strong> is a highly skilled
          neurologist with extensive experience in diagnosing and treating a
          wide range of neurological disorders. Specializing in conditions such
          as migraines, epilepsy, stroke, and neurodegenerative diseases,{" "}
          <strong>{doctor?.name || "Dr. Faris"}</strong> is dedicated to
          providing personalized care to each patient with a focus on
          cutting-edge techniques and compassionate support. They aim to improve
          the quality of life for individuals facing complex neurological
          challenges. <strong>{doctor?.name || "Dr. Faris"}</strong> is also
          committed to staying at the forefront of medical advancements through
          continuous research and education.
        </p>
      </div>

      <div className="mt-12">
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold">
          Education
        </h3>

        <ul className="pt-4 md:p-5">
          <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
            <div>
              <span className="text-irisBlueColor text-[15px] leading-6 font-semibold">
                {doctor?.name || "Doctor"}
              </span>
              <p className="text-[16px] leading-6 font-medium text-textColor">
                {doctor?.education || "Education details not available"}
              </p>
            </div>
            <p className="text-[14px] leading-5 font-medium text-textColor">
              {doctor?.hospital || "Hospital details not available"}
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DoctorAbout;
