
import PropTypes from "prop-types";

export default function CardValue({ title, children, icon }) {
  return (
    <div className="bg-white shadow-md rounded-xl p-6 w-full text-center">
      <div className="flex justify-center mb-3">
        <div className="text-[#ffb525] text-3xl">{icon}</div>
      </div>
      <h4 className="text-lg font-semibold mb-2">{title}</h4>
      <p className="text-sm text-gray-600">{children}</p>
    </div>
  );
}

CardValue.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  icon: PropTypes.element.isRequired,
};