import { useTranslations } from "next-intl";

const NotDataFound = () => {
  const t = useTranslations("noDataFound");
  return (
    <section className="bg-card rounded p-8">
      <strong className="text-textPrimary text-center block">
        {t("title")}
      </strong>
    </section>
  );
};

export default NotDataFound;
