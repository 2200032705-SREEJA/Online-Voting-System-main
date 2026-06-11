import './CSS/team.css';
import { useEffect, React, useRef } from 'react';
import ScrollReveal from "scrollreveal";
import { SocialIcon } from 'react-social-icons';

const Team = () => {
    const revealRefBottom = useRef(null);
    const revealRefLeft = useRef(null);
    const revealRefTop = useRef(null);

    useEffect(() => {
        ScrollReveal().reveal(revealRefBottom.current, {
            duration: 1000,
            delay: 200,
            distance: '50px',
            origin: 'bottom',
            easing: 'ease',
            reset: true,
        });
    }, []);

    useEffect(() => {
        ScrollReveal().reveal(revealRefLeft.current, {
            duration: 1000,
            delay: 200,
            distance: '50px',
            origin: 'left',
            easing: 'ease',
            reset: true,
        });
    }, []);

    useEffect(() => {
        ScrollReveal().reveal(revealRefTop.current, {
            duration: 1000,
            delay: 200,
            distance: '50px',
            origin: 'top',
            easing: 'ease',
            reset: true,
        });
    }, []);

    return (
        <div className="Team">
            <h2 ref={revealRefTop}>Developer</h2>

            <div className='Team-Content'>
                <div className='Team-Content-Card' ref={revealRefLeft}>
                    <h3>Sreeja Penumudi | <span>Full Stack Developer</span></h3>

                    <p>
                        Computer Science and Engineering student with experience
                        in Full Stack Development, Java, MERN Stack, and modern
                        web technologies. Developed projects including an Online
                        Voting System and Learning Outcomes Tracker. Passionate
                        about building scalable applications and continuously
                        improving software development skills.
                    </p>

                    <SocialIcon
                        className='SocialIcon'
                        style={{ height: "30px", width: "30px" }}
                        href="https://github.com/2200032705-SREEJA"
                        target="_blank"
                        url="www.github.com"
                    />
                </div>
            </div>
        </div>
    );
};

export default Team;