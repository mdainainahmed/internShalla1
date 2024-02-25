/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

function Inuput({ type = "text", height, width, bdrColor="white", placeHolder, borderRadius="10px", bgColor="", props }) {
  return (
    <input
      type={type}
      style={{
        border: `${bdrColor}`,
        width: `${width}`,
        height: `${height}`,
        borderRadius: `${borderRadius}`,
        padding: "5px",
        backgroundColor: `${bgColor}`
      }}
      placeholder={placeHolder}
      {...props}
    />
  );
}

export default Inuput;
