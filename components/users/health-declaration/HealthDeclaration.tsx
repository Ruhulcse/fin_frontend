import { authOptions } from "@/lib/auth-options";
import { getServerSession } from "next-auth";
import HealthDeclarationForm from "./HealthDeclarationForm";

const HealthDeclaration = async () => {
  const session = await getServerSession(authOptions());
  return (
    <section className="health-declaration grid gap-2 xl:gap-4">
      <p className="text-textPrimary text-[12px] sm:text-[16px] xl:text-[20px] text-right">
        We are committed to providing a safe and healthy workplace for all
        employees. Please complete the health declaration form below.
      </p>
      <HealthDeclarationForm user={session?.user} />
    </section>
  );
};

export default HealthDeclaration;
