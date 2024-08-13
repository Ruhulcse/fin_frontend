import { authOptions } from "@/lib/auth-options";
import { getServerSession } from "next-auth";
import HealthDeclarationForm from "./HealthDeclarationForm";
import { useTranslations } from "next-intl";

const HealthDeclaration = async () => {
  const session = await getServerSession(authOptions());
  const t = useTranslations("healthDeclaration");
  return (
    <section className="health-declaration grid gap-2 xl:gap-4">
      <p className="text-textPrimary text-[12px] sm:text-[16px] xl:text-[20px] text-right">
        {t("title")}
      </p>
      <HealthDeclarationForm user={session?.user} />
    </section>
  );
};

export default HealthDeclaration;
