export default function Progress({donationsProgress, goal}) {
  console.log(donationsProgress)
  console.log(goal)

const calculateTotal = (donationsProgress) => {
  let total = 0;
  donationsProgress.forEach(donation => {
    total += donation.amount;
  })
  return total
}
const actualTotal = calculateTotal(donationsProgress)

return (
  <div>
    <h1> Raised <span>${actualTotal}</span> of <span>${goal}</span></h1>
  </div>
  
)
}

