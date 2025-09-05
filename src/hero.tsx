function hero() {
    return (
        <>
            <div class={"h-screen relitive flex align-middle items-center flex-col @container"}>
                <div class="flex items-center justify-center flex-col grow">
                    <p class="text-[19rem] font-[250] @sm:text-[6rem]">
                        NZ DEV
                    </p>
                <div class="flex items-center justify-center">
                    <p class="text-[10rem] @sm:text-[3.5rem] font-[300]">
                        Wellcome
                    </p>
                </div>
                </div>
                <div class={"g-white/30 backdrop-blur-sm @sm:backdrop-blur-xs absolute top-0 left-0 h-screen w-screen"}>
                </div>
            </div >
        </>
    )
}

export default hero;
