import iconstar from "./assets/icon-star.svg"

export function App () {
  return (
    <div>
        <div>
          <img scr={iconstar} alt = "icon star"/>
      </div>

      <h1>How did we do?</h1>

      <p>Please let us know how we did with your support request. 
        All feedback is appreciated to help us improve our offering!</p>

        <div>
          <input type="button" value={1}/>
          <input type="button" value={2}/>
          <input type="button" value={3}/>
          <input type="button" value={4}/>
          <input type="button" value={5}/>
        </div>

        <button>SUBMIT</button>
    </div>
  );
}