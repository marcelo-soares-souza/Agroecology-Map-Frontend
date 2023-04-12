import { Outlet } from "react-router-dom";

import MainHeader from "../components/MainHeader";
import PageContent from "../components/PageContent";

const RootLayout = () => {
  return (
    <>
      <MainHeader />
      <PageContent>
        <Outlet />
      </PageContent>
    </>
  );
};

export default RootLayout;
