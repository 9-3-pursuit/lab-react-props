import './RecentDonations.css'

function RecentDonations(props) {
 
  console.log(props.donations)

  return (
    
    <div className='recent_donations'>
    <h2>Recent Donations</h2>

      <ul>
        {props.donations.map((donation) => {
          return <li><span>{donation.name} donated  ${donation.amount}</span> {donation.caption}</li>
        })}

 
      </ul>
      
      </div>
      )
     
}

export default RecentDonations;