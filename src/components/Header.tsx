import { useCurrentLesson } from "../store/slices/player.slice"

export function Header() {
  const { currentModule, currentLesson } = useCurrentLesson()

  if (!currentModule || !currentLesson) {
    return null
  }

  return (
    <div className="flex flex-col gap-x-1">
      <h1 className="text-2xl font-bold">{currentModule.title}</h1>
      <span className="text-sm text-zinc-400">Módulo: "{currentLesson.title}"</span>
    </div>
  )
}