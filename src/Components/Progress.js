
function Progress(props) {
  // console.log(donations, targetAmount)
  let newSum = 0
  for (let i = 0; i < props.length; i++) {
    newSum += props[i].amount
  }
  return (
    <section className="progress">
      <h2>
        Raised <span className="secondary">$335</span> of
        <span className="secondary">${props.targetAmount}</span>
      </h2>
    </section>
  )

}
export default Progress