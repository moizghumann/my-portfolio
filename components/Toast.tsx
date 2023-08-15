import React, { useState } from 'react'

interface ToastProp {
    onclick: (state: boolean) => void
    toastState: boolean;
    counter: number;
}

const Toast = ({ onclick, toastState, counter }: ToastProp) => {
    const [show, setShow] = useState(false)
    const handleClick = () => {
        setShow(toastState);
        onclick(!toastState);
    }
    return (
        <div className={`absolute bottom-0 right-5 transform ${show ? 'translate-y-0' : '-translate-y-full'}  ease-in-out duration-300`}>

            <div
                className={`bg-[#EFFCBC] border-[3px] border-[#667A10] rounded-xl p-4 pr-6`}
                role="alert">
                <div className=" flex flex-row justify-between items-center">
                    <div className="flex-shrink-0">
                        {counter === 1 ? `👽` :
                            counter === 2 ? `🦻🏿` :
                                counter === 3 ? `👀` :
                                    counter === 4 ? `💥` :
                                        `🌊`}
                    </div>
                    <div className="mx-3">
                        <div className="text-lg text-[#293106] font-medium leading-tight">
                            {counter === 1 ? `I'm all ears` :
                                counter === 2 ? `Alright! you got my attention` :
                                    counter === 3 ? `You want me to go Super Saiyan?` :
                                        counter === 4 ? `Heyy it tickles!` :
                                            `Well have fun while you're at it. Poked ${counter} times!`}
                        </div>
                    </div>
                    <div className="pl-3 ml-auto">
                        <div className="-mx-1.5 -my-1.5">
                            <button onClick={handleClick} type="button" className="inline-flex bg-[#D8F758] rounded-md p-2 text-[#667A10] hover:bg-[#D0F536] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-teal-50 focus:ring-[#667A10]" >

                                <svg className="h-3 w-3" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path d="M0.92524 0.687069C1.126 0.486219 1.39823 0.373377 1.68209 0.373377C1.96597 0.373377 2.2382 0.486219 2.43894 0.687069L8.10514 6.35813L13.7714 0.687069C13.8701 0.584748 13.9882 0.503105 14.1188 0.446962C14.2494 0.39082 14.3899 0.361248 14.5321 0.360026C14.6742 0.358783 14.8151 0.38589 14.9468 0.439762C15.0782 0.493633 15.1977 0.573197 15.2983 0.673783C15.3987 0.774389 15.4784 0.894026 15.5321 1.02568C15.5859 1.15736 15.6131 1.29845 15.6118 1.44071C15.6105 1.58297 15.5809 1.72357 15.5248 1.85428C15.4688 1.98499 15.3872 2.10324 15.2851 2.20206L9.61883 7.87312L15.2851 13.5441C15.4801 13.7462 15.588 14.0168 15.5854 14.2977C15.5831 14.5787 15.4705 14.8474 15.272 15.046C15.0735 15.2449 14.805 15.3574 14.5244 15.3599C14.2437 15.3623 13.9733 15.2543 13.7714 15.0591L8.10514 9.38812L2.43894 15.0591C2.23704 15.2543 1.96663 15.3623 1.68594 15.3599C1.40526 15.3574 1.13677 15.2449 0.938279 15.046C0.739807 14.8474 0.627232 14.5787 0.624791 14.2977C0.62235 14.0168 0.730236 13.7462 0.92524 13.5441L6.59144 7.87312L0.92524 2.20206C0.724562 2.00115 0.611816 1.72867 0.611816 1.44457C0.611816 1.16047 0.724562 0.887983 0.92524 0.687069Z" fill="currentColor" />
                                </svg>
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Toast