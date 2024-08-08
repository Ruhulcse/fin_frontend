import { generateDataFromServer } from "@/lib/helper/server-fetch";
import Link from "next/link";
import BasicCard from "../common/BasicCard";
import AdminSearch from "./AdminSearch";
import { getTranslations } from "next-intl/server";

const AdminDashboard = async () => {
  const { data: users = [] } = await generateDataFromServer("users");
  const t = await getTranslations("admin");
  const dashboard = t.raw("dashboard");
  return (
    <section className="grid gap-4 xl:gap-8">
      <AdminSearch users={users} />
      <Link
        href="/admin/trainee"
        className="home-card grid place-items-center !py-[40px] xl:!py-[60px]"
      >
        <strong className="text-4xl">
          {users?.filter((user: any) => user.status === "active")?.length}
        </strong>
        <p className="text-textSecondary text-[12px] sm:text-[16px] xl:text-[20px]">
          {dashboard.activeUsers}
        </p>
      </Link>
      <div className="quick-links grid gap-2 xl:gap-4">
        <BasicCard link="/admin/exercise/manage">
          <span>{dashboard.manageEx}</span>
        </BasicCard>
        <BasicCard link="/admin/nutrition-guides/manage">
          <span>{dashboard.mngNuGuide}</span>
        </BasicCard>
        <BasicCard link="/admin/approve-email">
          <span>{dashboard.apvEmailAdd}</span>
        </BasicCard>
      </div>
    </section>
  );
};

export default AdminDashboard;
