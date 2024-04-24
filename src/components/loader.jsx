import { RiseLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="fixed inset-0 w-full h-screen bg-[rgb(0,0,0,0.35)] z-[1000] top-0 backdrop-blur">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 z-100">
        <RiseLoader color="#E38800" size={22} />
      </div>
    </div>
  );
};

export default Loader;
