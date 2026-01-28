import modiWeek from "@/assets/images/week-one.png";
import ModiWeek from "./components/modi-week";
import { useState } from "react";

export default function App() {
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    setLiked((prev) => !prev);
  };
  return (
    <div>
      <ModiWeek
        image={modiWeek}
        day="tuesday"
        liked={liked}
        toggleLike={handleLike}
      />
    </div>
  );
}
