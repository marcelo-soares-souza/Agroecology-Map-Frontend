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
          Back
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
          Submit
        </Button>
      ) : (
        <Button
          icon=">"
          color="1"
          fill="normal"
          onClick={nextPageHandler}
          disabled={disableNext}
        >
          Next
        </Button>
      )}
    </div>
  );
};

export default PrevNextButtons;
