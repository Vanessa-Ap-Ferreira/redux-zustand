import { Loader } from "lucide-react";
import ReactPlayer from "react-player";
import { useAppDispatch, useAppSelector } from "../store";
import { next, useCurrentLesson } from "../store/slices/player.slice";

export function Video() {
  const dispatch = useAppDispatch()
  const isCourseLoading = useAppSelector(state => state.player.isLoading)

  const { currentLesson } = useCurrentLesson()

  function handleNext() {
    dispatch(next())
  }

  return (
    <div className="w-full bg-zinc-950 aspect-video">
      { isCourseLoading ? (
        <div className="flex h-full items-center justify-center">
          <Loader className="w-6 h-6 text-zinc-400 animate-spin" />
        </div>
      ) : (
        <ReactPlayer 
        onEnded={handleNext}
        width="100%" 
        height="100%"
        playing
        controls 
        url={`https://www.youtube.com/watch?v=${currentLesson?.id}`}
        />
      )}
      
    </div>
  )
}