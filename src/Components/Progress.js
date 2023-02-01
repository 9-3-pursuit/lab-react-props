import './Progress.css'

function Progress(props) {


  let sum = 0
  props.donations.map((donation) => {
    sum+= donation.amount
    
  })
  
  
  return (<div>
    <h2>Raised ${sum} of ${props.target}</h2>  
    

  </div>
  )
}

export default Progress
