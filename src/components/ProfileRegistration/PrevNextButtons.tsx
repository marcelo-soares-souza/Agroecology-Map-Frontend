import Translator from "../i18n/Translator";
import Button from "../UI/Button";

const PrevNextButtons = ({
  nextPageHandler,
  previousPageHandler,
  isFinal = false,
  disableNext = false
}: {
  nextPageHandler: () => void;
  previousPageHandler?: () => void;
  isFinal?: boolean;
  disableNext?: boolean;
}) => {
  return (
    <div
      className="contain-center"
      style={{
        alignSelf: "stretch",
        justifyContent: "flex-start",
        gap: "1rem"
      }}
    >
      {previousPageHandler && (
        <Button icon="<" color="1" fill="outline" onClick={previousPageHandler}>
          <Translator path="profileRegistration.prevNextButtons.previous" />
        </Button>
      )}
      {isFinal ? (
        <Button
          icon=">"
          color="2"
          fill="normal"
          onClick={nextPageHandler}
          disabled={disableNext}
        >
          <Translator path="profileRegistration.prevNextButtons.final" />
        </Button>
      ) : (
        <Button
          icon=">"
          color="1"
          fill="normal"
          onClick={nextPageHandler}
          disabled={disableNext}
        >
          <Translator path="profileRegistration.prevNextButtons.next" />
        </Button>
      )}
    </div>
  );
};

export default PrevNextButtons;
