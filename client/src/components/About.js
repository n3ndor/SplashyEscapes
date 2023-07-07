import React from 'react'
import '../App.css'
import jumpVideo from '../media/jump.mp4'
import holdVideo from '../media/hold.mp4'
import chillVideo from '../media/chill.mp4'

const About = ({ isDarkMode }) => {
    return (
        <div className={`page ${isDarkMode ? 'dark' : ''}`}>
            <div className="grid-container ">
                <div className="grid-item full-width " style={{ padding: 0 }}>
                    <video src={jumpVideo} autoPlay loop muted />
                </div>
                <div className="grid-item full-width">
                    <h2 className='bg-red-500'>Let's Jump In !</h2>
                </div>
                <div className="grid-item full-width">
                    <p>Welcome to our website, where fun awaits you every day, every time! We are dedicated to creating a vibrant and enjoyable environment for all our visitors. Whether you're seeking a thrilling adventure or simply want to relax and unwind, we have something special in store for you. Get ready to embark on an unforgettable journey filled with laughter, excitement, and cherished memories. Come on in and let the fun begin!</p>
                </div>
                <div className="grid-item two-thirds-right">
                    <video src={holdVideo} autoPlay loop muted />
                </div>
                <div className="grid-item text-third-right">
                    <p>Our swimming pools are the epitome of grandeur and cleanliness. With their vast expanse and crystal-clear waters, they offer an inviting oasis for both leisurely swims and exhilarating aquatic activities. Dive into the refreshing depths and feel the worries of the world melt away. Whether you're an experienced swimmer or a beginner, our pools cater to all skill levels. Immerse yourself in the serene ambience and relish the sheer joy of swimming in our magnificent pools.</p>
                </div>
                <div className="grid-item full-width">
                    <p>At our establishment, everyone is welcome, regardless of age or background. We believe in providing a diverse range of activities to ensure that each person finds what they are looking for. From the tiniest tots to the young at heart, our facilities cater to all age groups. Join our fast swimming courses for those aspiring to compete, participate in our acrobatic water routines designed especially for women, or bring your little ones to our delightful baby swim and play hours. And for those seeking relaxation, our cocktail hours provide the perfect opportunity to unwind and sip refreshing beverages.</p>
                </div>
                <div className="grid-item text-third-left">
                    <p>After a long day at work, we understand the importance of finding solace and tranquility. That's why we offer a separate pool area where you can unwind and rejuvenate. This space is designed to provide a peaceful environment, allowing you to relax and let go of the stresses of the day. Indulge in a soothing swim, sip on your favorite beverage, and revel in the calm atmosphere. Rest assured that this area is dedicated to serenity, ensuring a peaceful experience without any disturbances or noise.</p>
                </div>
                <div className="grid-item two-thirds-left">
                    <video src={chillVideo} autoPlay loop muted />
                </div>
                <div className="grid-item full-width ">
                    <p>Your safety and satisfaction are our top priorities. We adhere to the highest security standards, ensuring that you can enjoy your time with complete peace of mind. Our park provides ample parking spaces, ensuring convenience for all our visitors. We are also constantly investing in new activities and amenities to enhance your experience. Stay tuned for exciting additions such as a luxurious sauna, an expansive water world, and even thrilling scuba diving opportunities. We are committed to providing you with an exceptional and ever-evolving destination for enjoyment and relaxation.</p>
                </div>
            </div>
        </div >
    )
}

export default About;
