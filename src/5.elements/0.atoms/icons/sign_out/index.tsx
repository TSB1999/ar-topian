import "./styles.css";

export default function SignOutIcon({ ...props }) {
  let size;
  switch (props.size) {
    case "small":
      size = "fa-1x";
      break;
    case "medium":
      size = "fa-2x";
      break;
    case "large":
      size = "fa-3x";
      break;
    default:
  }
  return (
    <i
      style={{ color: "#fff" }}
      className={["sign-out", "fas fa-sign-out-alt", size].join(" ")}
    ></i>
  );
}
