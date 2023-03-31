import { useRouteError } from "react-router-dom";

import MainHeader from "../components/MainHeader";
import PageContent from "../components/PageContent";

function ErrorPage() {
  const error: any = useRouteError();

  let message = "Something went wrong!";

  if (error.status === 500) {
    message = error.data.message;
  }

  if (error.status === 404) {
    message = "Could not find resource or page.";
  }

  return (
    <>
      <MainHeader />
      <PageContent>
        <p>{message}</p>
      </PageContent>
    </>
  );
}

export default ErrorPage;
