"use client";

import { useLikes } from "../context/LikesContext";
import RenderLikes from "./RenderLikes";
import RenderNoLikes from "./RenderNoLikes";

export default function LikesPage() {
  const { likes } = useLikes();

  return (
    <div className="max-w-7xl py-20 mx-auto flex justify-center flex-col items-center">
      {likes.length === 0 ? <RenderNoLikes /> : <RenderLikes likes={likes} />}
    </div>
  );
}
