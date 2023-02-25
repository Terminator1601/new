import React from "react";
// import './about.css';

function AboutEvent(){
    return (
        <div class="about-event">
        <h2>
            <span>About</span>
        </h2>
        <div class="d-flex flex-wrap justify-content-around">
            <div class="left d-flex flex-column align-items-around justify-content-around">
                <p class="text-light  text-center p-3">

                    Horem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit
                    interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia
                    nostra, per inceptos himenaeos.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius facilis voluptatibus consequuntur
                    voluptas nobis. Nulla vel illo aperiam quaerat doloremque distinctio inventore nihil cupiditate
                    esse quibusdam quae ipsam, sapiente delectus.
                    <br />
                    <br />
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque blanditiis magnam assumenda
                    officia aspernatur cumque quis dolor? Fuga possimus ducimus repellendus ratione eaque nam
                    accusantium quam perferendis dicta. Vel, nihil.
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam provident consequatur cum quia
                    ipsum hic nemo reiciendis, reprehenderit beatae voluptatibus repellat inventore enim
                    necessitatibus quibusdam repellendus magnam aliquam soluta? Sapiente!

                </p>
                {/* <!-- <div class="btn">
                        <button><div class="reg">Register Now <i class="fa fa-arrow-right" aria-hidden="true" style="background: transparent;"></i></div></button>
                        <button class="join">Join Community</button>
                    </div> --> */}

            </div>
            <div class="right p-3">
                <div class="box rotate-img">
                    <img src="images/shark.png" width="400px" height="400px" />
                    {/* <!-- <div class="blur-box shark-code-blast">Shark + Code = Blast</div>
                    <div class="blur-box real-world-problems">Solve Real World Problems</div> --> */}
                </div>
            </div>

        </div>


    </div>
    )
}

export default AboutEvent;