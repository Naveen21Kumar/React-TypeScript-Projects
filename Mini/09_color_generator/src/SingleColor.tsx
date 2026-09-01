import { toast } from "react-toastify";
import type Values from "values.js";

const SingleColor = ({ color, index }: { color: Values; index: number }) => {
  const { hex, weight } = color;
  const saveToClipboard = async () => {
    if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(`#${hex}`);
        toast.success("Color copied to clipboard");
      } catch (error) {
        toast.error("Failed to copy color to clipboard");
      }
    } else {
      toast.error("Clipboard access not avialable");
    }
  };

  return (
    <article
      style={{ backgroundColor: `#${hex}` }}
      onClick={saveToClipboard}
      className={index > 10 ? "color color-light" : "color"}
    >
      <p className="percentage-value">{weight}%</p>
      <p className="color-value">#{hex}</p>
    </article>
  );
};

export default SingleColor;
