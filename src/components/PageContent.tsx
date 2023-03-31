import classes from "./PageContent.module.css";

function PageContent({ children }: { children: any }) {
  return <div className={classes.content}>{children}</div>;
}

export default PageContent;
