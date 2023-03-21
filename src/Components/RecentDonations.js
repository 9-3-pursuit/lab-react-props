export default function RecentDonations(props) {
  return (
    <section>
    <h2>Recent Donations</h2>
    <ul>
      {props.donationGiven.map((donated)=> {
        return(
          <li key={donated.id}><span>{donated.name} donated ${donated.amount}</span>{donated.caption}</li>
        )
      })
      }
    </ul>
    </section>
  )
}
