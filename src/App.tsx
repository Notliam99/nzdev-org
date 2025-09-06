import Hero from './hero'

function App() {

    return (
        <>
            <Hero height="h-dvh" footnote="Wellcome" />
            <div class="flex justify-center items-center mx-auto">
                <p class="m-[1.5rem] max-w-[800px] text-center font-medium leading-[1.5rem]">
                    We are a small tech company based in queenstown.
                    Just having a vibe, making some techy stuff.
                    Like this snazzy website cooked up in two days.
                </p>
            </div>
            <Hero height="h-[20dvw] min-[10rem]:h-[60dvh] @min-[10rem]:h-[60dvh]" footnote="Extremely Real 👻" />
            <h1 class="mt-[1rem] mr-[1rem] ml-[1rem] text-center font-bold leading-[1.5rem]">
                We Are Real
            </h1>
            <div class="flex justify-center items-center mx-auto">
                <p class="m-[1.5rem] text-center text-pretty font-medium leading-[1.5rem] max-w-[800px]">
                    Like you call up the govement they throeticaly would be like yo <i>"NZ DEV LIMMITED is a real commpany..."</i> theroreticaly.
                    We have some of the highest {"<blank>"} in the world.
                    One member that can count to nearly five or six with both hands.
                    The talent at NZ DEV LIMMITED is unlike anywhere else.
                </p>
            </div>
            <hr class="h-0 border-0 shadow-[0_0_10px_1px_black] relative after:content-['\00a0'] after:block" />
            <p class="m-[3rem] text-center font-medium leading-[1.5rem]">
                Contact Us At: <a
                    class="
                        text-[transparent]
                        transition-[text-shadow, font-weight]
                        delay-[150ms,_50ms] duration-500
                        ease-[cubic-bezier(0.88,_-1,_0.2,_1)]
                        text-shadow-[0_0_5px_#000]
                        hover:text-shadow-[0_0_1px_#000]
                        hover:font-medium max-[10rem]:font-light
                        min-[10rem]:text-shadow-[0_0_1.8px_#000]"
                    href="mailto:specil.people.contact@nzdev.org">
                    specil.people.contact@nzdev.org
                </a>
            </p>
        </>
    )
}

export default App
