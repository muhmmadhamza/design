import { Link } from "react-router-dom";
function Login() {
    return (

      <div className="wrapper">
        <div className="container-fluid">
          <div className="col-left">
         
        
            <div >
         
            <p className="socialvid">SoicalVid</p>
            <h2 className="login-text">
                Nice to see
                <br/> you again.
            </h2>
            
              <p className="trends">
                  All-in-one Technology To
                  Research The Trending Market
                  
                   Pulse, Create Stunning videos,
                   and Get Trafic on demand!
                 
              </p>
            
            </div>
          </div>
          <div className="col-right">
            <div className="login-form">
              <h2 className="login-colour">Log in</h2>
              <form>
                <p>
                  <input type="text" placeholder="Username" required />
                </p>
                <p>
                  <input type="password" placeholder="Password" required />
                </p>
                <p>
                  <input className="btn" type="Login In" defaultValue="Login In" />
                </p>
                <p>
                  <Link to={'/Forgetpassword'}> Forget password?</Link>
              
                </p>
              </form>
            </div>
          </div>
        </div>
      
      </div>
    );
  }
export default Login;