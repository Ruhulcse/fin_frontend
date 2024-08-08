import pdfImage from "@/assets/images/pdf.png";
import Image from "next/image";

const Agreement = ({
  agreement,
  title = "",
  update,
}: {
  agreement: any;
  title: string;
  update: string;
}) => {
  return (
    <div className="agreement">
      <h4>{title}</h4>
      <div className="agreement-pdf">
        <Image src={agreement?.img ?? pdfImage} alt="pdf" />

        <strong>{agreement?.name ?? "N/A"}</strong>
        <span>{`${update} ${agreement?.date ?? "N/A"}`}</span>
      </div>
    </div>
  );
};

export default Agreement;
