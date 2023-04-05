import { useRouteError } from "react-router-dom";

import MainHeader from "../components/MainHeader";
import PageContent from "../components/PageContent";
import Modal from "../components/UI/Modal";

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
      <Modal>
        <PageContent>
          <p>{message}</p>
        </PageContent>
      </Modal>
    </>
  );
}

export default ErrorPage;
