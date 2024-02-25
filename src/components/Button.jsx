
/* eslint-disable react/prop-types */
function Button({
  type = "button",
  color = "#FFFFFF",
  bgColor = "#1B88F4",
  text,
  width,
  height,
  bdRadius
}) {
  return (
    <div>
      <button
        type={type}
        style={{
          color: `${color}`,
          backgroundColor: `${bgColor}`,
          width: `${width}`,
          height: `${height}`,
          borderRadius: `${bdRadius}`,
          border: `${bgColor}`,
        }}
      >
        {text}
      </button>
    </div>
  );
}

export default Button;
