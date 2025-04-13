
import PropTypes from 'prop-types';

export default function CardInfo({ title, children, icon }) {
  return (
    <div className="bg-white shadow-md rounded-2xl p-6 max-w-md w-full">
      <div className="flex items-center mb-4">
        <div className="text-[#ffb525] text-2xl mr-2">{icon}</div>
        <h3 className="font-bold text-lg">{title}</h3>
      </div>
      <div className="text-sm text-gray-600">{children}</div>
    </div>
  );
}

CardInfo.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  icon: PropTypes.element.isRequired
};