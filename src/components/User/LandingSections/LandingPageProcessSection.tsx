
import { PiArrowBendDoubleUpRightDuotone } from "react-icons/pi";
import { PiArrowBendDoubleUpLeftDuotone } from "react-icons/pi";

const LandingPageProcessSection = () => {
    return (
        <div className="lg:mt-[7.3%] mt-10">
            <div className="text-center">
                <h2 className="font-Montserrat font-[650] lg:text-[2rem] text-[1.6rem]">
                    Effortless Booking Process
                </h2>
                <h6 className="font-Montserrat font-[600] my-2 mb-5">
                    Here's How We Work
                </h6>
            </div>

            {/* Process & video Section */}
            <div className="lg:mx-32 md:mx-10 mx-5 my-5  lg:flex justify-center">
                {/* Left side Booking Process */}
                <div className="lg:w-[45%]">
                    {/* 1 */}
                    <div className="flex">
                        <div>
                            <div className="flex place-items-center justify-center h-24 w-24 rounded-[38%] bg-[#CA5888]">
                                <img className="object-contain w-[80%] h-[80%]"  src="/public/image/booking/booking.png" alt="icon" />
                            </div>
                        </div>
                        <div className=" lg:mx-5 mx-2 md:w-[50%] my-auto">
                            <h2 className="font-Montserrat font-[600] lg:text-[1.2rem] text-[1rem]">
                                Booking Service
                            </h2>
                            <p className="font-Montserrat text-[10px]">
                                Browse through our range of services, select the one that suits
                                your needs, and when you're ready, simply tap 'Book Now'. Plus,
                                enjoy the convenience of paying just 25% upfront
                            </p>
                        </div>
                        <div className="flex items-end pl-4 -mb-2">
                            <PiArrowBendDoubleUpRightDuotone
                                size={55}
                                color="#AC4A4A"
                                className="rotate-90"
                            />
                        </div>
                    </div>

                    {/* section 2 */}
                    <div className="flex justify-end my-12">
                        <div className="flex items-end lg:pr-10 pr-2 ">
                            <PiArrowBendDoubleUpLeftDuotone size={55} color="#AC4A4A" className="-rotate-90" />
                        </div>
                        <div>
                            <div className="flex place-items-center justify-center h-24 w-24 rounded-[38%] bg-[#2C2D19]">
                                <img className="object-contain w-[80%] h-[80%]" src="/public/image/booking/confirmation.png" alt=""/>
                            </div>
                        </div>
                        <div className=" lg:mx-5 mx-2 md:w-[50%] my-auto">
                            <h2 className="font-Montserrat font-[600] lg:text-[1.2rem] text-[1rem]">
                                Confirmation
                            </h2>
                            <p className="font-Montserrat text-[10px] ">
                                After you've booked, our dedicated workers will promptly review
                                your request and confirm its success. Rest assured, your service
                                is in good hands.
                            </p>
                        </div>
                    </div>

                    {/*  section - 3 */}

                    <div className="flex my-8">
                        <div>
                            <div className="flex place-items-center justify-center h-24 w-24 rounded-[38%] bg-[#C8CC99]">
                                <img className="object-contain w-[80%] h-[80%]" src="/public/image/booking/worker.png" alt="" />
                            </div>
                        </div>
                        <div className=" lg:mx-5 mx-2 md:w-[50%] my-auto">
                            <h2 className="font-Montserrat font-[600] text-[1.2rem]">
                                Workers at your doorstep
                            </h2>
                            <p className="font-Montserrat text-[10px] ">
                                Our workers arrive at your doorstep and verify their presence
                                using an OTP. They efficiently solve your issues, ensuring a
                                seamless experience.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Right side section */}
                <div className="lg:w-[45%] flex items-center justify-center">
                    <div className="w-[24rem] h-[24rem] rounded-2xl ">
                        <video
                            src="/public/video/sampleVideo.mp4"
                            className="w-full h-full rounded-2xl"
                            autoPlay
                            muted
                            loop
                            controls={false}
                            style={{ objectFit: "cover" }}
                        >
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LandingPageProcessSection;
