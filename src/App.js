import "./App.css";
import WissenSvg from "./assets/WissenSvg.tsx";
import InputLabel from "./component/UI/InputLabel.tsx";
import StylesFont from "./component/UI/StylesFont.tsx";
import PlainFont from "./component/UI/PlainFont.tsx";

function App() {
  /**
 * 
const [data, setData] = useState({
    name: "",
    email: "",
    age: null
  });

const handleChange = (e) => {
  // console.log("e", e.target.value);
  setData({ ...data, [e.target.name]: e.target.value });
};
*/

  return (
    <div className="App">
      <div>
        <div>
          <div>
            <WissenSvg />
            <p className="py-4 text-sm">Hello there, Sign in to continue</p>

            <div>
              <form className="flex flex-col w-80 ">
                <div className="flex flex-col py-2">
                  <InputLabel label="Email" />
                  <input
                    className="border-zinc-300 border rounded h-10 px-4 outline-none text-blue-700 text-base"
                    type="email"
                    name="email"
                    id="email"
                    autoFocus
                  />
                </div>
                <div className="flex flex-col py-2">
                  <InputLabel label="Password" />
                  <input
                    className="border-zinc-300 border rounded h-10 px-4 outline-none text-blue-700 text-base"
                    type="password"
                    name="password"
                    id="password"
                  />
                  <div className="flex py-7 items-start">
                    <input
                      type="checkbox"
                      className="border-slate-400	 w-12 h-5 accent-blue-800"
                    />
                    <div className="text-sm pl-2 relative bottom-1">
                      <PlainFont text="By creating or logging into an account, you " />
                      <PlainFont text="are agreeing with our" />
                      <StylesFont text=" Terms & Conditions " />
                      <PlainFont text="and " />
                      <StylesFont text=" Privacy Policys." />
                    </div>
                  </div>
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
