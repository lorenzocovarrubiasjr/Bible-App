import "./IconButton.css";

const IconButton = ({ icon, title, uri }) => {
  return (
    <div className="icon-container">
      {icon}
      {title}
    </div>
  );
};

export default IconButton;
