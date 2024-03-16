const Feedback = ({ feedbacks, total, positive }) => {
  return (
      <ul>
          <li>Good: {feedbacks.good }</li> 
          <li>Neutral: {feedbacks.neutral}</li>
          <li>Bad: {feedbacks.bad}</li>
          <li>Total: <b>{total}</b></li>
          <li>Positive: <b>{positive}</b>%</li>
    </ul>
  )
}

export default Feedback
