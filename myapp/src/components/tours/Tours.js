function Tours(props) {
  // console.log(props)
  return (
    <>
      {props.data.map((ele) => {
        return (
          <>
            <div>Name : {ele.name} </div>
            <br>
            </br>
            <img src={ele.image} alt=' ' />
            <br></br>
            <>
            
            ___________________________________________________________________________
            
            </>
            <br></br>
            
          </>
        );
      })}
    </>
  );
}

export default Tours;
