import { useTranslations } from "next-intl";

const RootError = ({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => {
  const t = useTranslations("common");
  return (
    <main className="grid place-content-center h-screen bg-primary text-textPrimary">
      <div className="text-center">
        <h2>{error?.message ?? "Error Found"}</h2>
        <button className="text-blue-500 underline" onClick={() => reset()}>
          {t("tryAgain")}
        </button>
      </div>
    </main>
  );
};

export default RootError;
