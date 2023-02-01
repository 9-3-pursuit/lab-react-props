import "./Progress.css"

export default function Progress(props) {
  let sum = 0;
  props.donations.map((donation) => {
    return sum += donation.amount;
  });
  return (
  <div class="progress">
    <h2> Raised <span>${sum}</span> of <span>${props.target}</span></h2>
  </div>
  )
}
