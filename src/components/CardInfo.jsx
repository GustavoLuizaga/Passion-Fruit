import PropTypes from 'prop-types';

export default function CardInfo({ title, children, icon }) {
  return (
    <div className="bg-white shadow-md rounded-2xl p-6 max-w-md w-full">
      <div className="flex flex-col items-center text-center">
        <div className="text-[#ffb525] text-2xl mb-2">{icon}</div>
        <h3 className="font-bold text-lg mb-4">{title}</h3>
        <div className="text-sm text-gray-600">{children}</div>
      </div>
    </div>
  );
}

CardInfo.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  icon: PropTypes.element.isRequired
};