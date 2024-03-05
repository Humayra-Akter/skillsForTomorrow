import React from "react";
import img1 from "../../images/1.jpg";
import img2 from "../../images/2.jpg";
import img3 from "../../images/3.jpg";
import img4 from "../../images/4.jpg";
import img5 from "../../images/5.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  AOS.init();
  return (
    <div className=" py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl text-center text-primary font-bold mb-8">
          About Us
        </h1>
        {/* Large text section */}
        <div className="text-lg text-justify mx-28 mb-8">
          <p>
            In Bangladesh, the journey to education is fraught with obstacles
            for many children, particularly those from marginalized backgrounds.
            The National Curriculum and Textbook Board (NCTB), tasked with
            providing education to all, often falls short in addressing the
            diverse needs of students. This inadequacy is especially pronounced
            in vocational education, where a one-size-fits-all approach
            perpetuates cycles of poverty and limits opportunities for upward
            mobility. Compounding these challenges are the efforts of
            non-governmental organizations (NGOs), which primarily focus on
            short-term interventions. While these interventions may offer
            temporary relief, they often fail to bring about sustainable,
            long-lasting change in the lives of children. This is particularly
            concerning in a country where societal taboos and norms add another
            layer of complexity, especially for children growing up in brothels
            or on the streets. These norms further marginalize them and make it
            increasingly challenging for girls to lead decent lives.
          </p>
        </div>
        <div className="text-lg text-justify mx-28 mb-8">
          <p>
            Collaboration with NGOs is another crucial aspect of the hub-based
            schooling system. By leveraging the expertise and resources of
            existing organizations, the initiative can amplify its impact and
            reach more marginalized children. This collaborative approach
            ensures that no child is left behind and that support is provided
            where it is most needed. In conclusion, the hub-based schooling
            system represents a beacon of hope for marginalized children in
            Bangladesh. By addressing the educational challenges and social
            barriers they face, this initiative seeks to empower them with the
            tools and opportunities they need to build a better future. Through
            a combination of innovative pedagogy, community engagement, and
            sustainable funding, the hub-based schooling system strives to break
            the cycle of disadvantage and unlock the potential of every child,
            regardless of their background or circumstances.
          </p>
        </div>
        {/* Image and text rows */}
        <div className="grid grid-cols-1 mx-16 p-10 gap-8">
          {/* First row */}
          <div
            data-aos="fade-right"
            className="grid bg-pink-200 h-80 p-10 lg:grid-cols-2 gap-10 items-center"
          >
            <div className="rounded-lg overflow-hidden items-center justify-center flex sm:mb-0">
              <img src={img1} alt="Image 1" className="h-auto w-96" />
            </div>
            <div className="text-justify items-center justify-center ">
              <p>
                The confluence of inadequate educational systems, short-term NGO
                interventions, and entrenched social taboos creates significant
                barriers for children, particularly girls, in accessing
                opportunities and leading fulfilling lives. However, amidst
                these challenges lies an opportunity for innovative solutions
                that can uplift and empower marginalized children across
                Bangladesh. One such solution is the establishment of a
                hub-based schooling system. This initiative targets more than 2
                lakh marginalized children in Bangladesh, with a focus on those
                between 5-9 and 9-14 years old. These are the formative years
                where children are most vulnerable to the adverse effects of
                poverty, societal norms, and inadequate education.
              </p>
            </div>
          </div>
          {/* Second row */}
          <div
            data-aos="fade-left"
            className="grid bg-green-200 p-10 h-80 lg:grid-cols-2 gap-10 items-center"
          >
            <div className="text-justify">
              <p>
                The hub-based schooling system aims to break the cycle of
                disadvantage by providing skill-based education tailored to the
                needs of marginalized children. By establishing centralized
                educational hubs in strategic locations, this approach ensures
                that resources and expertise are effectively allocated to reach
                those who need it the most. These hubs not only offer basic
                primary education but also equip children with essential skills
                for a better future. In practical terms, each hub accommodates a
                project serving 35 students. The educational content is
                delivered through a combination of video lessons, animation
                graphics, and embedded AI on a dedicated website. This
                multimedia approach not only enhances engagement but also caters
                to different learning styles and abilities.
              </p>
            </div>
            <div className="rounded-lg items-center justify-center flex overflow-hidden">
              <img src={img2} alt="Image 2" className="w-96 h-auto" />
            </div>
          </div>
          {/* Third row */}
          <div
            data-aos="fade-right"
            className="grid bg-amber-200 p-10 h-80 lg:grid-cols-2 gap-10 items-center"
          >
            <div className="rounded-lg  items-center justify-center flex overflow-hidden mb-4 sm:mb-0">
              <img src={img3} alt="Image 3" className="w-96 h-auto" />
            </div>
            <div className="text-justify">
              <p>
                To ensure the smooth functioning of each hub, a team of
                instructors comprising Bangladesh university students and local
                volunteers is recruited. These instructors play a pivotal role
                in delivering lessons, providing support, and fostering a
                conducive learning environment. Moreover, the involvement of
                local volunteers, mainly college students, strengthens community
                engagement and ownership of the initiative. The curriculum of
                the hub-based schooling system is divided into two modules: one
                for children aged 5-9 and another for those aged 9-14. Each
                module combines basic primary education with skill-based
                learning, with a focus on marketable skills that can enhance the
                children's future prospects. Additionally, a performance tracker
                is implemented to identify each child's strengths and areas for
                improvement, enabling personalized learning and support.
              </p>
            </div>
          </div>
          {/* Fourth row */}
          <div
            data-aos="fade-left"
            className="grid bg-fuchsia-200 p-10 h-80 lg:grid-cols-2 gap-10 items-center"
          >
            <div className="text-justify">
              <p>
                In terms of funding, the initiative adopts a multi-pronged
                approach. Seed money is collected through fundraising efforts,
                with collaborations sought from the government and corporate
                sectors. Additionally, the hub-based schooling system generates
                revenue by selling skill-based courses through its website,
                leveraging this as a unique selling proposition (USP) to sustain
                its operations. Looking ahead, the vision for the hub-based
                schooling system extends beyond the pilot phase. The goal is to
                establish 21 hubs across the nation within the next three years,
                reaching 10,000 children with the support of over 100
                instructors. This ambitious expansion plan reflects the
                commitment to scale up and replicate the success of the
                initiative nationwide.
              </p>
            </div>
            <div className="rounded-lg items-center justify-center flex overflow-hidden">
              <img src={img4} alt="Image 4" className="w-96 h-auto" />
            </div>
          </div>
          {/* Fifth row */}
          <div
            data-aos="fade-right"
            className="grid bg-sky-200 p-10 h-80 lg:grid-cols-2 gap-10 items-center"
          >
            <div className="rounded-lg  items-center justify-center flex overflow-hidden mb-4 sm:mb-0">
              <img src={img5} alt="Image 5" className="w-96 h-auto" />
            </div>
            <div className="text-justify">
              <p>
                In addition to providing education, the hub-based schooling
                system incorporates various support mechanisms to address the
                holistic needs of marginalized children. This includes offering
                meals, snacks, and other forms of nourishment to ensure their
                physical well-being. Furthermore, special provisions are made to
                provide free education for children from brothels, recognizing
                their unique challenges and vulnerabilities. The initiative also
                emphasizes the importance of co-curricular activities and
                community building. Children are encouraged to participate in
                activities such as math Olympiads and debates, with the aim of
                nurturing their talents and building their confidence.
                Additionally, the establishment of an online community allows
                children to showcase their achievements, fostering a sense of
                pride and belonging.
              </p>
            </div>
          </div>
        </div>
        {/* Form section */}
        <div className="m-20">
          <h2 className="text-3xl text-accent text-center font-bold mb-7">
            Contact Us
          </h2>
          <div className="flex flex-col gap-12 bg-gradient-to-r from-primary to-secondary p-10 sm:flex-row items-center">
            <div className="rounded-lg overflow-hidden mb-4 sm:mb-0">
              <img src={img1} alt="Contact Image" className="w-full h-auto" />
            </div>
            <div className="w-full sm:w-3/4">
              <form>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-lg mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full rounded-md py-2 px-4 bg-gray-100"
                    placeholder="Your email address"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="question" className="block text-lg mb-2">
                    Your Question
                  </label>
                  <textarea
                    id="question"
                    name="question"
                    rows="4"
                    className="w-full rounded-md py-2 px-4 bg-gray-100"
                    placeholder="Enter your question here"
                  ></textarea>
                </div>
                <div className="flex items-center justify-end">
                  <button
                    type="submit"
                    className="bg-primary w-40 font-bold text-white py-2 px-4 uppercase rounded-md hover:bg-secondary hover:text-black transition duration-300"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
