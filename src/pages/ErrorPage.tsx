import { useRouteError } from "react-router-dom";

import MainHeader from "../components/MainHeader";
import PageContent from "../components/PageContent";
import Modal from "../components/UI/Modal";
import Translator from "../components/i18n/Translator";

function ErrorPage() {
  const error: any = useRouteError();

  let message = "error.something_went_wrong";

  if (error.status === 500) {
    message = error.data.message;
  }

  if (error.status === 404) {
    message = "error.could_not_find_resource_or_page";
  }

  return (
    <>
      <MainHeader />
      <Modal>
        <PageContent>
          <p>
            <Translator path={message} />
          </p>
        </PageContent>
      </Modal>
    </>
  );
}

export default ErrorPage;
