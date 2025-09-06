interface hero_props {
    footnote: string
    // must be a tailwind class
    height: string
}

function hero(props: hero_props) {
    return (
        <>
            <div class={props.height.replace("@", "") + " relitive flex align-middle items-center flex-col @container"}>
                <div class="flex items-center justify-center flex-col grow">
                    <p class="text-[19rem] font-[250] @min-[10rem]:text-[6rem]">
                        NZ DEV
                    </p>
                    <div class="flex items-center justify-center">
                        <p class="text-[10rem] @min-[10rem]:text-[3.5rem] font-[300] text-center m-[1rem]">
                            {props.footnote}
                        </p>
                    </div>
                </div>
                <div
                    class={props.height + " g-white/30 backdrop-blur-xs absolute inset w-[100dvw]"}
                    style="
                        -webkit-mask-image: linear-gradient(to bottom,
                            transparent 0%,
                            white 40px,
                            white calc(100% - 40px),
                            transparent 100%
                        );
                        mask-image: linear-gradient(to bottom,
                            transparent 0%,
                            white 40px,
                            white calc(100% - 40px),
                            transparent 100%
                        );
                    "
                >
                </div>
            </div >
        </>
    )
}

export default hero;
