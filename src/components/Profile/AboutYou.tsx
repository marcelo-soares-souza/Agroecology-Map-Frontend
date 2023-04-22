import classes from "../../pages/Profile.module.css";

const AboutYou = (props: any) => {
  const nextPageHandler = () => {
    props.nextPage("RequiredProfileInformation");
  };

  return (
    <>
      <div className={classes.container}>
        <div>
          <h1 className={classes.title}>About You</h1>
          <p className="light-text">
            Every detail counts for you to be found by future clients or
            partners, enthusiasts and researchers!
          </p>
        </div>
        <div>
          <h3>Short Bio</h3>
          <p className={"input-description light-text " + classes.mbSm}>
            {
              "What's your experience? What do you do? Tell the community about yourself..."
            }
          </p>
          <input type="text" className={classes.textArea} placeholder="" />
        </div>

        <div className="contain-center" style={{ alignSelf: "stretch" }}>
          <button
            className={classes.btnNext + " btn-highlight-1"}
            onClick={nextPageHandler}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default AboutYou;
