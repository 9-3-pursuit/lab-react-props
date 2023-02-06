export default function Progress({donations, target}) {
let soFar = 0;
donations.forEach((donation) => {
  soFar += donation.amount
})
  //value based on donations.
  return (
    <section className="progress">
  <h2>
    Raised <span className="secondary">${soFar}</span> of
    <span className="secondary"> $1000</span>
  </h2>
</section>
  )
}
