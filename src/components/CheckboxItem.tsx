import classes from "./CheckboxItem.module.css";

interface CheckboxItemProps {
  label?: string;
  children?: React.ReactNode;
  checked?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

export const CheckboxItem = (props: CheckboxItemProps) => {
  return (
    <label className={classes.container + " text-light input-description"}>
      <input
        type="checkbox"
        checked={props.checked}
        onChange={props.onChange}
      />
      {props.label || props.children}
    </label>
  );
};
