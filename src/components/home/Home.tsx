import "../../styles/home.scss";
import { BannerHome } from "./BannerHome";
import { InfoCard } from "./InfoCard";
import { Parceiros } from "./Parceiros";
import { Sellers } from "./Sellers";
import { Shelfs } from "./Shelf";

export function Home() {
  return (
    <>
      <BannerHome />
      <Sellers />
      <Parceiros />
      <Shelfs />
      <InfoCard />
    </>
  );
}
