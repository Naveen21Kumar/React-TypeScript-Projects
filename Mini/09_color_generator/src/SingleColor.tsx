import { toast } from "react-toastify";
const SingleColor = ({ color }) => {
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
    <article style={{ backgroundColor: `#${hex}` }} onClick={saveToClipboard}>
      <p>{weight}%</p>
      <p>#{hex}</p>
    </article>
  );
};

export default SingleColor;
