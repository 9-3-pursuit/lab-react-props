function Progress(props) {
  let raised = 0;
  console.log(props.targetAmount)
  for (let i=0; i<props.donations.length; i++){
   raised += Number(props.donations[i].amount)
  }
 return (
  <section className="progress">
    <h2>
      Raised <span className="secondary">${raised}
      </span> of <span className="secondary">${props.targetAmount}</span>
    </h2>
  </section>
 )
}

export default Progress