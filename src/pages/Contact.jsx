import React, { useState, useEffect } from 'react';
import Title from '../components/Title';
import { assets } from '../assets/assets';
import NewsLetterBox from '../components/NewsLetterBox';
import aboutImg from '../assets/photo.png';
import abdul from '../assets/abdul.jpg';
import ishaan from '../assets/ishaan.jpg';
import yash from '../assets/yash.jpg';
import '@fortawesome/fontawesome-free/css/all.min.css';


const Contact = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [teamMembers, setTeamMembers] = useState([]);

  useEffect(() => {
    const samplePosts = [
      {
        id: 1,
        title: "5 Tips to Improve Your Wardrobe",
        excerpt: "Learn some simple ways to upgrade your wardrobe this season. From classic pieces to trendy additions, we have it all.",
        link: "/blog/5-tips-to-improve-your-wardrobe"
      },
      {
        id: 2,
        title: "The Best Fabrics for Summer Wear",
        excerpt: "Summer is here, and it’s time to make sure your clothing is light, breathable, and comfortable. Discover the best fabrics for the hot months.",
        link: "/blog/best-fabrics-for-summer-wear"
      },
      {
        id: 3,
        title: "How to Style Denim for Every Occasion",
        excerpt: "Denim is a timeless fabric, but knowing how to style it can be tricky. Here are our top tips for rocking denim at any event.",
        link: "/blog/how-to-style-denim"
      }
    ];

    // Setting the blog posts to state
    setBlogPosts(samplePosts);


    setTestimonials([
      { name: "Aman Singh", text: "Great customer service and amazing products!" },
      { name: "Priya Yadav", text: "Fast delivery and quality materials!" }
    ]);



  }, []);

  useEffect(() => {
    setTeamMembers([
      {
        name: 'Shivendra Tiwari',
        role: 'CEO',
        image: aboutImg, 

      },
      {
        name: 'Abdul Aziz Khan',
        role: 'Marketing Head',
        image: abdul,

      },
      {
        name: 'Ishaan Khullar',
        role: 'Lead Developer',
        image: ishaan,

      },
      {
        name: 'Yash Thakur',
        role: 'Marketing Head',
        image: yash,  

      },
    ]);
  }, []);



  return (
    <div>
      {/* Title Section */}
      <div className="text-center text-2xl pt-10 border-t">
        <Title text1={'CONTACT'} text2={'US'} />
      </div>

      <div className="my-10 flex flex-row justify-center gap-10 mb-28">
        <img className="max-w-[480px]" src={assets.contact_img} alt="Contact Us" />
        <div className="flex flex-col justify-center items-start gap-6">
          <p className="font-semibold text-xl text-gray-600">Our Store</p>
          <p className="text-gray-500">
            The Souled Store, <br /> Civil Line, Prayagraj, 211001
          </p>
          <p className="text-gray-500">
            Tel: +918318407559 <br /> Email: Anupampatel21661@gmail.com
          </p>
          <p className="font-semibold text-xl text-gray-600">Customer Service</p>
          <p className="text-gray-500">
            For order inquiries, returns, or general assistance, contact us at: <br />
            support@fancygarments.com
          </p>
          <p className="font-semibold text-xl text-gray-600">Careers at Fancy Garments</p>
          <p className="text-gray-500">Learn more about our teams and job openings.</p>
          {/*  (opens Naukri.com) */}
          <button
            className="border border-black px-8 py-4 text-sm hover:text-white hover:bg-black transition-all duration-500"
            onClick={() => window.open('https://www.naukri.com', '_blank')}
          >
            Explore Jobs
          </button>
        </div>
      </div>


      <div className="text-center my-20 px-10">
        <h2 className="text-2xl font-bold mb-6">Our Commitment</h2>
        <p className="text-gray-500">
          At Fancy Garments, we strive to deliver the best quality products and a seamless shopping experience.
          If you have any concerns or feedback, don’t hesitate to reach out. Your satisfaction is our priority!
        </p>
      </div>

      <div className="my-20 px-10">
        <h2 className="text-2xl font-bold mb-6">Recent Blog Posts</h2>
        <div className="flex flex-col gap-6">
          {blogPosts.length === 0 ? (
            <p>No recent blog posts available.</p>
          ) : (
            blogPosts.map((post) => (
              <div key={post.id} className="border-b py-4">
                <h3 className="text-xl font-semibold">{post.title}</h3>
                <p className="text-gray-500">{post.excerpt}</p>
                <a href={post.link} className="text-blue-500">Read more</a>
              </div>
            ))
          )}
        </div>
      </div>

      <div className="my-20 px-10">
        <h2 className="text-2xl font-bold mb-6">Customer Testimonials</h2>
        <div className="flex flex-col gap-6">
          {testimonials.length === 0 ? (
            <p>No testimonials available.</p>
          ) : (
            testimonials.map((testimonial, index) => (
              <div key={index} className="border p-6 rounded-md shadow-md">
                <p className="italic text-gray-600">"{testimonial.text}"</p>
                <p className="font-semibold text-gray-800">- {testimonial.name}</p>
              </div>
            ))
          )}
        </div>
      </div>

      <div>
        <div className="text-center text-2xl pt-10 border-t">
          <h1 className="font-bold">Meet Our Team</h1>
          <p className="text-lg text-gray-600">The talented people who make it all happen</p>
        </div>
        {/* Team Members Section */}
        <div className="my-20 px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {teamMembers.length === 0 ? (
              <p>No team members available.</p>
            ) : (
              teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition duration-300 ease-in-out"
                >
                  {/* Profile image */}
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-gray-200">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Team Member Info */}
                  <h3 className="font-semibold text-xl text-gray-800">{member.name}</h3>
                  <p className="text-gray-500 mb-4">{member.role}</p>

                  
                  <div className="mt-4 flex justify-center gap-4">
              
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 transition duration-300 text-2xl"
                      >
                        <i className="fab fa-linkedin"></i>
                      </a>
                    )}

                    {member.twitter && (
                      <a
                        href={member.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-600 transition duration-300 text-2xl"
                      >
                        <i className="fab fa-twitter"></i>
                      </a>
                    )}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>


      </div>


      {/* Social Media Links Section */}
      <div className="flex flex-col items-center gap-4 mb-20">
        <h2 className="text-xl font-semibold">Follow Us</h2>
        <div className="flex gap-6">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-600 transition text-2xl"
          >
            <i className="fab fa-facebook"></i>
          </a>


          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-pink-600 transition text-2xl"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-400 transition text-2xl"
          >
            <i className="fab fa-twitter"></i>
          </a>
        </div>
      </div>

      {/* Google Map Section */}
      <div className="mb-20">
        <h2 className="text-center text-xl font-semibold mb-6">Visit Our Store </h2>

        {/* Embedded Google Map */}
        <iframe
          className="w-full h-64 border"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3648.4730538555084!2d81.8298583!3d25.4537554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399acb007fbdc119%3A0xd41b2e400305f20a!2sThe%20Souled%20Store%2C%20Prayagraj!5e0!3m2!1sen!2sin!4v1691234567890!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>

        {/* Open in Google Maps Link */}
        <div className="text-center mt-4">
          <a
            href="https://www.google.com/maps/place/The+Souled+Store,+Prayagraj/@25.4537889,81.8327133,17.29z/data=!4m14!1m7!3m6!1s0x399acb007fbdc119:0xd41b2e400305f20a!2sThe+Souled+Store,+Prayagraj!8m2!3d25.4537555!4d81.8347292!16s%2Fg%2F11vk78l6ry!3m5!1s0x399acb007fbdc119:0xd41b2e400305f20a!8m2!3d25.4537555!4d81.8347292!16s%2Fg%2F11vk78l6ry?entry=ttu&g_ep=EgoyMDI0MTExMy4xIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 transition duration-300 underline"
          >
            Open in Google Maps
          </a>
        </div>
      </div>



      {/* Newsletter Box */}
      <NewsLetterBox />
    </div>
  );
};

export default Contact;
