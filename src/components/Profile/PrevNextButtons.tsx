import { Button } from "../UI/Button";

export const PrevNextButtons = ({
  nextPageHandler,
  previousPageHandler,
  isFinal = false
}: {
  nextPageHandler: () => void;
  previousPageHandler?: () => void;
  isFinal?: boolean;
}) => {
  if (isFinal)
    return (
      <div className="contain-center" style={{ alignSelf: "stretch" }}>
        <Button icon=">" color="2" fill="normal" onClick={nextPageHandler}>
          Submit
        </Button>
      </div>
    );

  if (!previousPageHandler)
    return (
      <div className="contain-center" style={{ alignSelf: "stretch" }}>
        <Button icon=">" color="1" fill="normal" onClick={nextPageHandler}>
          Next
        </Button>
      </div>
    );

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

      {nextPageHandler && (
        <Button icon={">"} color="1" fill="normal" onClick={nextPageHandler}>
          Next
        </Button>
      )}
    </div>
  );
};
