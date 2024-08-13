import { useTranslations } from "next-intl";
import Link from "next/link";

const RootNotFound = () => {
  const t = useTranslations("common");
  return (
    <main className="grid place-items-center h-screen bg-primary text-textPrimary">
      <div className="text-center">
        <h2>Page Not Found!!!</h2>
        <Link className="text-blue-500 underline" href="/">
          {t("returnHome")}
        </Link>
      </div>
    </main>
  );
};

export default RootNotFound;
