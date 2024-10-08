"use client";
import { useGenderWiseVideoMutation } from "@/store/features/user/api";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import BasicButton from "../../common/BasicButton";
import Player from "../../common/Player";
import { useTranslations } from "next-intl";
const GetIntro = ({ gender }: { gender: string }) => {
  const [video, setVideo] = useState("");
  const router = useRouter();
  const [getVideo, { isLoading }] = useGenderWiseVideoMutation();
  useEffect(() => {
    if (gender) {
      getVideo({ gender: gender }).then((res) => {
        setVideo(res.data.data);
      });
    } else if (!gender) {
      router.push("/");
    }
  }, [gender, getVideo, router]);
  const t = useTranslations("agreement");
  return (
    <section className="container h-full grid grid-rows-[1fr_auto] gap-4 p-4 xl:gap-8 xl:p-8">
      <Player src={video ?? ""} />
      <Link href="/health-declaration">
        <BasicButton
          disabled={isLoading}
          type="submit"
          extraClasses="flex items-center justify-center gap-1 !m-0 !w-full"
        >
          {t("userDetails")}
        </BasicButton>
      </Link>
    </section>
  );
};

export default GetIntro;
