import s from "./Options.module.css";

const Options = ({ updateFeedback, resetFeedback, totalFeedback }) => {
  return (
    <div className={s.wrapBtn}>
      <button onClick={() => updateFeedback("good")} className={s.button}>
        Good
      </button>
      <button onClick={() => updateFeedback("neutral")} className={s.button}>
        Neutral
      </button>
      <button onClick={() => updateFeedback("bad")} className={s.button}>
        Bad
      </button>
      {totalFeedback > 0 && (
        <button onClick={resetFeedback} className={s.button}>
          Reset
        </button>
      )}
    </div>
  );
};

export default Options;
