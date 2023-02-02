import "./Progress.css"

export default function Progress({ donations, target }) {
  const calculateTotal = (donations) => {
    return donations.reduce((total, donation) => {
        return total + donation.amount
    }, 0)
  }

  const donationsTotal = calculateTotal(donations);

  return(
    <div className="progressDiv">
      <h2>Raised <span>${donationsTotal}</span> of <span>${target}</span></h2>
    </div>
  )
}
