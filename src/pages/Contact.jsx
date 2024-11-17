import React, { useState, useEffect } from 'react';
import Title from '../components/Title';
import { assets } from '../assets/assets';
import NewsLetterBox from '../components/NewsLetterBox';
import aboutImg from '../assets/photo.png';
import abdul from '../assets/abdul.jpg';
import ishaan from '../assets/ishaan.jpg';
import yash from '../assets/yash.jpg';

const Contact = () => {
  // State for dynamic content
  const [blogPosts, setBlogPosts] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [teamMembers, setTeamMembers] = useState([]);

  useEffect(() => {
    // Simulating dynamic content fetch (API calls or static data)
    // Sample blog posts
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

    // Example: Fetching testimonials from an API or static data
    setTestimonials([
      { name: "Aman Singh", text: "Great customer service and amazing products!" },
      { name: "Priya Yadav", text: "Fast delivery and quality materials!" }
    ]);

    // Example: Fetching team members dynamically
    
  }, []);

  useEffect(() => {
    // Simulating dynamic content fetch (e.g., from an API or static data)
    setTeamMembers([
      { 
        name: 'Shivendra Tiwari', 
        role: 'CEO', 
        image: aboutImg,  // Online Profile Image URL
        // bio: 'Alice is the visionary behind Fancy Garments, ensuring we always deliver quality products to our customers.',
        linkedin: 'https://www.linkedin.com/in/shivendra-tiwari-63ab1524a/',
        twitter: 'https://twitter.com/alicejohnson'
      },
      { 
        name: 'Abdul Aziz Khan', 
        role: 'Marketing Head', 
        image: abdul,  // Online Profile Image URL
        // bio: 'Claire leads our design team with her bold vision, creating collections that inspire our loyal customers.',
        linkedin: 'https://www.linkedin.com/in/clairezhang',
        twitter: 'https://twitter.com/clairezhang'
      },
      { 
        name: 'Ishaan Khullar', 
        role: 'Lead Developer', 
        image: ishaan,  // Online Profile Image URL
        // bio: 'David is the tech wizard who ensures that our online presence is seamless, responsive, and user-friendly.',
        linkedin: 'https://www.linkedin.com/in/davidmistry',
        twitter: 'https://twitter.com/davidmistry'
      },
      { 
        name: 'Yash Thakur', 
        role: 'Marketing Head', 
        image: yash,  // Online Profile Image URL
        // bio: 'Claire leads our design team with her bold vision, creating collections that inspire our loyal customers.',
        linkedin: 'https://www.linkedin.com/in/clairezhang',
        twitter: 'https://twitter.com/clairezhang'
      },
    ]);
  }, []);

  

  return (
    <div>
      {/* Title Section */}
      <div className="text-center text-2xl pt-10 border-t">
        <Title text1={'CONTACT'} text2={'US'} />
      </div>

      {/* Contact Information Section */}
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
          {/* Explore Jobs Button (opens Naukri.com) */}
          <button
            className="border border-black px-8 py-4 text-sm hover:text-white hover:bg-black transition-all duration-500"
            onClick={() => window.open('https://www.naukri.com', '_blank')}
          >
            Explore Jobs
          </button>
        </div>
      </div>

      {/* Commitment Section */}
      <div className="text-center my-20 px-10">
        <h2 className="text-2xl font-bold mb-6">Our Commitment</h2>
        <p className="text-gray-500">
          At Fancy Garments, we strive to deliver the best quality products and a seamless shopping experience.
          If you have any concerns or feedback, don’t hesitate to reach out. Your satisfaction is our priority!
        </p>
      </div>

      {/* Dynamic Blog Posts Section */}
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

      {/* Dynamic Testimonials Section */}
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

      {/* Dynamic Team Members Section */}
     <div>
  {/* Title Section */}
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
            className="bg-white p-6 rounded-lg shadow-lg text-center relative group hover:shadow-xl transition duration-300 ease-in-out"
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

            {/* Hover Bio */}
            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-5 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out p-4 rounded-lg">
              <p className="text-sm">{member.bio}</p>
            </div>

            {/* Social Links */}
            <div className="mt-4 flex justify-center gap-4">
              <a
                href={member.linkedin} // This dynamically links to each member's LinkedIn
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 transition duration-300"
              >
                LinkedIn
              </a>
              <a
                href={member.twitter} // Similarly for Twitter
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-600 transition duration-300"
              >
                Twitter
              </a>
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
            className="text-gray-600 hover:text-blue-600 transition"
          >
            Facebook
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-400 transition"
          >
            Twitter
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-pink-500 transition"
          >
            Instagram
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-800 transition"
          >
            LinkedIn
          </a>
        </div>
      </div>

      {/* Google Map Section */}
      <div className="mb-20">
        <h2 className="text-center text-xl font-semibold mb-6">Visit Us</h2>
        <iframe
          className="w-full h-64 border"
          src="https://www.google.com/maps/embed?pb=...your_google_maps_embed_link..."
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* Newsletter Box */}
      <NewsLetterBox />
    </div>
  );
};

export default Contact;
