import collOne from "@/assets/images/coll-one.png"
import CollectionCard from "./components/collection-card";

export default function App() {
 

  return (
    <div>
      <CollectionCard image={collOne} text="dresses" bottom={10}  />
    </div>
  );
}
