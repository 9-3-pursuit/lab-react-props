import "./RecentDonations.css"

export default function RecentDonations({donations}) {
const recentDonations = donations.map((donation)=>{
  return <>
  <p className="donated">{donation.name} donated {donation.amount} </p>
  <p className = "caption">{donation.caption}</p>
  </>
})
  return (
    <div>
      <h1>
        Recent Donations
      </h1>
      {recentDonations}
      

    </div>
  )
}
