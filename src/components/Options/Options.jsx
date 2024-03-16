import css from '../Options/Options.module.css'

const Options = ({updateFeedback, totalFeedback, resetFeedback}) => {
  return (
    <div className={css.optionsBox}>
      <button className={css.optionsBtns} onClick={() => updateFeedback("good")}>Good</button> 
          <button className={css.optionsBtns} onClick={() => updateFeedback("neutral")}>Neutral</button>
          <button className={css.optionsBtns} onClick={() => updateFeedback("bad")}>Bad</button>
          {totalFeedback !== 0 && <button className={css.optionsBtns} onClick={resetFeedback}>Reset</button>}
    </div>
  )
}

export default Options
