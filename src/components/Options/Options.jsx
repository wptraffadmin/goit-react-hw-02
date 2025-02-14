import PropTypes from "prop-types";

const Options = ({ onLeaveFeedback, onReset, total }) => {
  return (
    <div>
      <button onClick={() => onLeaveFeedback("good")}>Good</button>
      <button onClick={() => onLeaveFeedback("neutral")}>Neutral</button>
      <button onClick={() => onLeaveFeedback("bad")}>Bad</button>
      {total > 0 && <button onClick={onReset}>Reset</button>}
    </div>
  );
};

Options.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,
  total: PropTypes.number.isRequired,
};

export default Options;
