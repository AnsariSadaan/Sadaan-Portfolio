import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

const items = [
    {
        id: 1,
        title: "React Social Network",
        img: "https://images.pexels.com/photos/4549414/pexels-photo-4549414.jpeg?auto=compress&cs=tinysrgb&w=600",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta magni porro nesciunt, quae ab rerum. Iste, consectetur sed? Maiores, odit.",
    },
    {
        id: 2,
        title: "Video Streaming App",
        img: "https://images.pexels.com/photos/16852624/pexels-photo-16852624/free-photo-of-man-using-youtube-app.jpeg?auto=compress&cs=tinysrgb&w=600",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta magni porro nesciunt, quae ab rerum. Iste, consectetur sed? Maiores, odit.",
    },
    {
        id: 3,
        title: "Just Eats",
        img: "https://images.pexels.com/photos/10790638/pexels-photo-10790638.jpeg?auto=compress&cs=tinysrgb&w=600",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta magni porro nesciunt, quae ab rerum. Iste, consectetur sed? Maiores, odit.",
    },
    {
        id: 4,
        title: "Typing Speed",
        img: "https://images.pexels.com/photos/7531991/pexels-photo-7531991.jpeg?auto=compress&cs=tinysrgb&w=600",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta magni porro nesciunt, quae ab rerum. Iste, consectetur sed? Maiores, odit.",
    },
]

const Single = ({ item }) => {

    const ref = useRef()

    const { scrollYProgress } = useScroll({
        target: ref,
    });

    const y = useTransform(scrollYProgress, [0, 1], [-300, 220])


    return (
        <section >
            <div className="container">
                <div className="wrapper">
                    <div className="imageContainer" ref={ref}>
                        <img src={item.img} alt="" />
                    </div>
                    <motion.div className="textContainer" style={{y}}>
                        <h2 >{item.title}</h2>
                        <p>{item.desc}</p>
                        <button>See Demo</button>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}


const Portfolio = () => {
    const ref = useRef();
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['end end', "start start"],
    });

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
    })

    return (
        <div className="portfolio" ref={ref}>
            <div className="progress">
                <h1>Featured Works</h1>
                <motion.div style={{ scaleX: scaleX }} className="progressBar"></motion.div>
            </div>
            {items.map((item) => (<Single item={item} key={item.id} />))}
        </div>

    )
}

export default Portfolio