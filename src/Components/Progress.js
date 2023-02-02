import './Progress.css'

const Progress = (props) => {


  let sum = 0
  props.donations.map((donation) => {
    sum+= donation.amount
    
  })
  
  
  return (<div>
    <h2>Raised <span className='pink'>${sum}</span> of <span className='pink'>${props.target}</span></h2>  
    

  </div>
  )
}

export default Progress
