import "../../styles/home.scss";
import { BannerHome } from "./BannerHome/BannerHome";
import { InfoCard } from "./InfoCard/InfoCard";
import { Parceiros } from "./Parceiros/Parceiros";
import { Sellers } from "./SellersContainer/Sellers";
import { Shelfs } from "./Shelf/Shelf";

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
