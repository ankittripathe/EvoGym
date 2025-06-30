import { SelectedPage, ClassType } from '@/utils/types';
import image1 from '@/assets/image1.png';
import image2 from '@/assets/image2.png';
import image3 from '@/assets/image3.png';
import image4 from '@/assets/image4.png';
import image5 from '@/assets/image5.png';
import image6 from '@/assets/image6.png';
import { motion } from "framer-motion";
import HText from "@/utils/HText";
import Class from "./Class";

const classes: Array<ClassType> = [
  {
    name: "Weight Training Classes",
    description: "Build strength and muscle with our dynamic weight training sessions, guided by expert trainers to ensure proper form and progress.",
    image: image1,
  },
  {
    name: "Yoga Classes",
    description: "Enhance flexibility, reduce stress, and improve mental clarity with our relaxing yoga sessions for all levels.",
    image: image2,
  },
  {
    name: "Ab Core Classes",
    description: "Strengthen your core and sculpt your abs with targeted exercises designed to improve stability and posture.",
    image: image3,
  },
  {
    name: "Adventure Classes",
    image: image4,
  },
  {
    name: "Fitness Classes",
    description: "Join our diverse fitness classes to boost endurance, burn fat, and achieve your overall health and fitness goals.",
    image: image5,
  },
  {
    name: "Zumba Classes",
    description:
      "Shake, groove, and burn calories in our high-energy Zumba classes. Enjoy a fun, dance-based workout set to infectious music that keeps you moving and motivated.",
    image: image6,
  },
]

type Props = {
  setSelectedPage: (page: SelectedPage) => void
}

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section id="ourclasses" className="w-full bg-primary-100 pt-24 pb-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <HText>OUR CLASSES</HText>
            <p className="py-5">
              Ready to level up your fitness? Explore a wide variety of dynamic classes tailored to suit every fitness level and goal. From high-intensity interval training and strength-building circuits to yoga and dance cardio, EVO GYM has something for everyone. Check out our schedule and find your perfect fit!
            </p>
          </div>
        </motion.div>

        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {classes.map((item: ClassType, index) => (
              <Class
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  )
}

export default OurClasses