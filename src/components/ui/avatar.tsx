import Image from "next/image";
import { DATA } from "@/lib/constants";

export const Avatar = () => {
  return (
    <Image
      src={DATA.avatarUrl}
      alt={DATA.fullName}
      width={200}
      height={200}
      className="avatar"
    />
  );
};
