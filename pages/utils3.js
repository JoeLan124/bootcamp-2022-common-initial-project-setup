import { useRef } from "react";

const Home = () => {
  const textRef = useRef();

  const enteredtext = "";
  return (
    <form onSubmit={console.log("test")}>
      <div className="m-8 p-4 border-2 border-black rounded-xl shadow-md">
        <textarea
          className="m-8 p-4 border-.5 border-black rounded-xl shadow-md bg-blue-300 resize-none"
          name=""
          id=""
          cols="30"
          rows="10"
          ref={textRef}
        />

        <button
          type="submit"
          className="m-8 p-4 border-2 border-black bg-blue-300 rounded-xl shadow-md"
        ></button>
      </div>
    </form>
  );
};

export default Home;
