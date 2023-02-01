
function Progress({ donations, targetAmount }) {
  console.log(donations, targetAmount)
  let newSum = 0
  for (let i = 0; i < donations.length; i++) {
    newSum += donations[i].amount
  }
  return (
    <section className="progress">
      <h2>
        Raised <span className="secondary">${newSum}</span> of
        <span className="secondary">${targetAmount}</span>
      </h2>
    </section>
  )

}
export default Progress