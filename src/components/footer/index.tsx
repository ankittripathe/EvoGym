import Logo from "@/assets/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary-100 pt-3 pb-12 md:py-12">
      <div className="mx-auto w-5/6 gap-24 md:flex ">
        <div className="mt-8 basis-2/3 md:mt-0">
          <img alt="logo" src={Logo} />
          <p className="my-5 md:pr-52">
            We're committed to help you reach your fitness goals with expert guidance, top-tier facilities, and a supportive community.
          </p>
          <p>© Evogym All Rights Reserved.</p>
        </div>

        <div className="mt-8 basis-1/4 md:mt-0 justify-end">
          <h4 className="font-bold">Contact Us</h4>
          <p className="mt-5">75 The Crescent London SW10 8DY, United Kingdom</p>
          <p>+44 7972971918 </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;