export default function Menu({ ...props }) {
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
  return <i className={["menu", "fas fa-ellipsis-v", size].join(" ")}></i>;
}
