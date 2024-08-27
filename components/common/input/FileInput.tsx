import ImageUpload from "@/assets/images/image-upload.png";
import { fileToBase64 } from "@/lib/helper/common";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useWatch } from "react-hook-form";
import { IoCloseCircle } from "react-icons/io5";

const FileInput = ({
  register,
  name,
  resetField,
  accept = "",
  control,
  onClick,
}: {
  register: any;
  name: string;
  accept?: string;
  resetField?: any;
  control?: any;
  onClick?: any;
}) => {
  const value = useWatch({ control, name });
  const file = value ? value[0] : null;
  const [base64, setBase64] = useState<string>("");
  const fileUpload = useTranslations("userMeasurments");
  const { clickFile } = fileUpload.raw("measurmentForm");

  useEffect(() => {
    const getBase = async () => {
      const base: any = await fileToBase64(file);
      setBase64(base);
    };
    if (file) {
      getBase();
    }
  }, [file]);

  return (
    <label onClick={onClick} htmlFor={onClick ? "" : name}>
      <input
        className={cn(`hidden`)}
        id={name}
        name={name}
        {...register(name)}
        type={"file"}
        accept={accept}
      />
      <div className="attachment grid gap-2 xl:gap-4 place-items-center cursor-pointer rounded-[10px] w-full bg-card p-[40px_10px]">
        {onClick && base64 ? (
          <Image src={base64} width={200} height={200} alt="image-upload" />
        ) : (
          <Image src={ImageUpload} alt="image-upload" />
        )}
        <p className="text-center text-textPrimary text-[12px] sm:text-[16px] xl:text-[20px]">
          {clickFile}
        </p>
        {file?.name ? (
          <strong
            className="relative z-10 px-3 py-1 rounded-full border border-textSecondary text-textSecondary flex items-center gap-1 cursor-default text-sm"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setBase64("");
              resetField(name);
            }}
          >
            {file?.name}
            <button className="text-secondary" onClick={() => resetField(name)}>
              <IoCloseCircle />
            </button>
          </strong>
        ) : null}
      </div>
    </label>
  );
};

export default FileInput;
