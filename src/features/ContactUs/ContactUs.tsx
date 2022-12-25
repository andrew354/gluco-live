import ContactUsForm from './ContactUsForm';

const ContactUs = () => {
  return (
    <section className="mx-auto mt-10" id="contact-us">
      <h2 className="text-center text-3xl font-semibold md:text-5xl lg:text-5xl">Contact Us</h2>
      <p className="my-10 mx-auto w-[300px] text-center md:w-[600px] lg:w-[660px]">
        We appreciate valuable feedback from our customers to improve ourselves day by day. Contact us to
        arrange a meeting with one of our experts or to request a demo. If you would like to share your
        experience with diabetes, please fill out the form.
      </p>
      <ContactUsForm />
    </section>
  );
};

export default ContactUs;
