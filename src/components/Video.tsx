import ReactPlayer from "react-player";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../store";
import { next } from "../store/slices/player.slice";

export function Video() {
  const dispatch = useDispatch()

  const lesson = useAppSelector((state) => {
    const { currentModuleIndex, currentLessonIndex } = state.player

    const currentLesson = state.player.course.modules[currentModuleIndex].lessons[currentLessonIndex]
    return currentLesson
  })

  function handleNext() {
    dispatch(next('test'))
  }

  return (
    <div className="flex-1">
      <div className="w-full bg-zinc-950 aspect-video">
        <ReactPlayer 
          onEnded={handleNext}
          width="100%" 
          height="100%" 
          controls 
          url={`https://www.youtube.com/watch?v=${lesson.id}`}
        />
      </div>
    </div>
  )
}