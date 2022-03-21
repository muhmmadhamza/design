export default function Forgetpassword(){
    return(
      <div className="wrapper">
      <div className="container-1">
   
      
        <div className="col-right-2">
          <div className="login-form">
         
     
            <form>
            <h1 className="forget">Forget password</h1>
              <p>
                <input type="text" placeholder="Enter  your email" required />
              </p>
              <p>
                <input className="btn" type="Submit" defaultValue="Send code" />
              </p>
            </form>
          </div>
        </div>
      </div>
  
    </div>
  
  
    );
  }