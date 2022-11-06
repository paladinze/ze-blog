import {DarkModeButton} from "../common/dark-mode-button";

export default function Intro() {
    return (
        <section className="relative flex-col flex items-center mt-16 dark:text-white">
          <div className="absolute right-0 -top-14">
            <DarkModeButton />
          </div>
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight">
                ZE.
            </h1>
            <h2 className="mb-8 text-1xl md:text-2xl font-bold tracking-tighter leading-tight">
                Thoughts, Stories and Dreams
            </h2>
        </section>
    )
}
