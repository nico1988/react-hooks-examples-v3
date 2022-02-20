import { useReducer } from "react";

// fancy logic to make sure the number is between 0 and 255
const limitRGB = (num) => (num < 0 ? 0 : num > 255 ? 255 : num);

const step = 50;

const reducer = (state, action) => {
  console.log("state:::", state);
  console.log("action:::", action);
  switch (action.type) {
    case "INCREMENT_R":
      return Object.assign({}, state, { r: limitRGB(state.r + step) });
    case "DECREMENT_R":
      return Object.assign({}, state, { r: limitRGB(state.r - step) });
    case "INCREMENT_G":
      return Object.assign({}, state, { g: limitRGB(state.g + step) });
    case "DECREMENT_G":
      return Object.assign({}, state, { g: limitRGB(state.g - step) });
    case "INCREMENT_B":
      return Object.assign({}, state, { b: limitRGB(state.b + step) });
    case "DECREMENT_B":
      return Object.assign({}, state, { b: limitRGB(state.b - step) });
    default:
      return state;
  }
};

const initialState = { count: 0 };

function reducerCounter(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducerCounter, initialState);
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
    </>
  );
}

function RGBControl() {
  const [{ r, g, b }, dispatch] = useReducer(reducer, { r: 0, g: 0, b: 0 });
  return (
    <>
      {`r:${r} - g:${g} - b:${b}`}
      <h1 style={{ color: `rgb(${r}, ${g}, ${b})` }}>useReducer Example</h1>
      <div>
        <span>r</span>
        <button onClick={() => dispatch({ type: "INCREMENT_R" })}>➕</button>
        <button onClick={() => dispatch({ type: "DECREMENT_R" })}>➖</button>
      </div>
      <div>
        <span>g</span>
        <button onClick={() => dispatch({ type: "INCREMENT_G" })}>➕</button>
        <button onClick={() => dispatch({ type: "DECREMENT_G" })}>➖</button>
      </div>
      <div>
        <span>b</span>
        <button onClick={() => dispatch({ type: "INCREMENT_B" })}>➕</button>
        <button onClick={() => dispatch({ type: "DECREMENT_B" })}>➖</button>
      </div>
    </>
  );
}

const ReducerComponent = () => {
  return (
    <div>
      <RGBControl />
      <Counter />
    </div>
  );
};

export default ReducerComponent;
