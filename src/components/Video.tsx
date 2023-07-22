import ReactPlayer from "react-player";
import { useDispatch } from "react-redux";
import { next, useCurrentLesson } from "../store/slices/player.slice";

export function Video() {
  const dispatch = useDispatch()

  const { currentLesson } = useCurrentLesson()

  function handleNext() {
    dispatch(next())
  }

  if (!currentLesson) {
    return null
  }

  return (
    <div className="flex-1">
      <div className="w-full bg-zinc-950 aspect-video">
        <ReactPlayer 
          onEnded={handleNext}
          width="100%" 
          height="100%"
          playing
          controls 
          url={`https://www.youtube.com/watch?v=${currentLesson.id}`}
        />
      </div>
    </div>
  )
}