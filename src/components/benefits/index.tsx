import HText from '@/utils/HText'
import { BenefitType, SelectedPage } from '@/utils/types'
import {
  AcademicCapIcon,
  HomeModernIcon,
  UserGroupIcon
} from '@heroicons/react/24/solid';
import { motion } from 'framer-motion'
import Benefit from './Benefit';
import ActionButton from '@/utils/ActionButton';
import BenefitsPageGraphic from '@/assets/BenefitsPageGraphic.png';

const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "State of the Art Facilities",
    description:
      "Experience top-notch equipment and innovative workout spaces designed to elevate your fitness journey.",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "100's of Diverse Classes",
    description:
      "Choose from a wide range of classes tailored to every fitness level, from high-intensity training to relaxing yoga.",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Expert and Pro Trainers",
    description:
      "Get guided by certified professionals dedicated to helping you reach your goals and unlock your true potential.",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

type Props = {
  setSelectedPage: (page: SelectedPage) => void
}

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        {/* HEADER */}
        <motion.div
          className="md:my-5 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText> MORE THAN JUST GYM. </HText>
          <p className="my-5 text-sm">
            We provide world class fitness equipment, trainers and classes to get you to your ultimate fitness goals with ease. We provide true care into each and every member.
          </p>
        </motion.div>

        {/* BENEFITS */}
        <motion.div
          className="mt-5 items-center justify-between gap-8 md:flex"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {benefits.map((benfit: BenefitType) => (
            <Benefit
              key={benfit.title}
              icon={benfit.icon}
              title={benfit.title}
              description={benfit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>

        {/* GRAPHICS AND DESCRIPTION WITH ACTION BUTTON */}
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          {/* GRAPHICS */}
          <img
            className="mx-auto"
            alt="benefits-page-graphic"
            src={BenefitsPageGraphic}
          />

          {/* DESCRIPTION */}
          <div className="mt-16 md:mt-0">
            {/* TITLE */}
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <HText>
                    MILLIONS OF HAPPY MEMBERS GETTING {" "}
                    <span className="text-primary-500">FIT</span>
                  </HText>
                </motion.div>
              </div>
            </div>

            {/* DESCRIPTION */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="my-5">
                Join the global fitness movement at EVO GYM and become part of something extraordinary! With members from all walks of life, we pride ourselves on creating a welcoming and inclusive community that celebrates progress and supports individual goals. Our success stories range from beginners taking their first steps toward fitness to seasoned athletes pushing their limits. At EVO GYM, you're never alone on your journey—our community and trainers are here to uplift and motivate you every step of the way.
              </p>
              <p className="mb-5">
              With flexible membership plans tailored to suit diverse needs, EVO GYM makes it easy to commit to your fitness journey. From group challenges that spark camaraderie to personal achievements that inspire, every moment at EVO is a step toward a healthier, happier you. Be part of the millions who have transformed their lives with us. Join EVO GYM today and start your success story!
              </p>
            </motion.div>

            {/* BUTTON */}
            <div className="relative mt-16">
              <motion.div
                className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, x: 50 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                <ActionButton setSelectedPage={setSelectedPage}>
                  Join Now
                </ActionButton>
              </motion.div>
            </div>
          </div>
        </div>

      </motion.div>

    </section>
  )
}

export default Benefits;