import LeftContact from "./LeftContact";
import RightContact from "./RightContact";

export default function Example() {
  return (
    <div className="relative isolate bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
        <LeftContact />
        <RightContact />
      </div>
    </div>
  );
}
