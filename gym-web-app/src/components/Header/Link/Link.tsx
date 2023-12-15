import AnchorLink from "react-anchor-link-smooth-scroll";
import "./Link.css";
import { SelectedPage } from "../../../shared/types";

type Props = {
  page: string;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Link = ({ page, selectedPage, setSelectedPage }: Props) => {
  const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage;

  return (
    <AnchorLink
      className={`${
        selectedPage === lowerCasePage ? "selected-page" : "list-element"
      }`}
      href={lowerCasePage}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  );
};

export default Link;
