import "./RecentDonations.css"
export default function Progress({ProgressChild,DefaultAmount}) {
  let sum = 0
  for(let i = 0; i < ProgressChild.length; i++)
   sum+= ProgressChild[i].amount

  return <h1>Raised <span className ="numberColor">${sum}</span> of <span className = "numberColour">${DefaultAmount}</span></h1>
}
