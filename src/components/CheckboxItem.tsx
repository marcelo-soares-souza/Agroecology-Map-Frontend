import classes from "./CheckboxItem.module.css";

interface CheckboxItemProps {
  label?: string;
  children?: React.ReactNode;
}

export const CheckboxItem = (props: CheckboxItemProps) => {
  return (
    <label className={classes.container + " light-text input-description"}>
      <input type="checkbox" />
      {props.label || props.children}
    </label>
  );
};
