import "./App.css";
import WissenSvg from "./assets/WissenSvg.tsx";

function App() {
  return (
    <div className="App">
      <div>
        <div>
          <div>
            <WissenSvg />
            <p className="py-4">Hello there, Sign in to continue</p>

            <div>
              <form>
                <div>
                  <label>Email</label>
                  <input type="text" />
                  <div></div>
                </div>
                <div>
                  <label>Password</label>
                  <input />
                  <div></div>
                </div>
                <button>Login</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
