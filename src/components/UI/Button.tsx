// CSS Interface
import { CSSProperties, MouseEventHandler } from "react";

// Icons
import { HiChevronLeft, HiChevronRight, HiPlusSm } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { FiMail } from "react-icons/fi";

type ButtonProps = {
  onClick?: MouseEventHandler;
  color: "1" | "2";
  fill: "normal" | "outline";
  children: React.ReactNode;
  icon?: ButtonIconTypes;
  disabled?: boolean;
};

export const Button = ({
  children,
  onClick,
  color = "1",
  fill = "normal",
  icon,
  disabled = false
}: ButtonProps) => {
  if (!icon)
    return (
      <button
        className={`btn-${color}-${fill}`}
        style={{ position: "relative" }}
        onClick={onClick}
        disabled={disabled}
      >
        {children}
      </button>
    );

  return (
    <button
      className={`btn-${color}-${fill}`}
      style={{ position: "relative" }}
      onClick={onClick}
      disabled={disabled}
    >
      {icon === "<" ? <Icon type="<" /> : null}
      {children}
      {icon !== "<" ? <Icon type={icon} /> : null}
    </button>
  );
};

type ButtonIconTypes = ">" | "<" | "+" | "x" | "contact";

const Icon = ({ type }: { type: ButtonIconTypes }) => {
  const absLeft: CSSProperties = { position: "absolute", left: "10%" };
  const absRight: CSSProperties = { position: "absolute", right: "10%" };

  switch (type) {
    case ">":
      return <HiChevronRight style={absRight} />;
    case "<":
      return <HiChevronLeft style={absLeft} />;
    case "+":
      return <HiPlusSm style={absRight} />;
    case "x":
      return <IoClose style={absRight} />;
    case "contact":
      return <FiMail style={absRight} />;
    default:
      return null;
  }
};
