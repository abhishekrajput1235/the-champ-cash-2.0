import React, { useState, useRef, useEffect } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const initialState: FormState = {
  name: '',
  email: '',
  subject: '',
  message: ''
};

const ContactForm: React.FC = () => {
  const [formState, setFormState] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name as keyof FormState]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = (): boolean => {
    const newErrors: Partial<FormState> = {};
    
    if (!formState.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formState.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formState.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    
    if (!formState.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validate()) {
      setIsSubmitting(true);
      
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormState(initialState);
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      }, 1500);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            sectionRef.current?.classList.add('opacity-100');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="contact" className="py-20 ">
      <div 
        ref={sectionRef}
        className="container mx-auto px-4 md:px-6 transition-opacity duration-1000 opacity-0"
      >
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-yellow-500 mb-4">
            Get in Touch
          </h2>
          <p className="text-xl text-white">
            Have questions or ready to start your next project? Contact us today.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="bg-gradient-to-br  to-black-800 rounded-xl shadow-xl p-8 text-white border-2 border-yellow-500">
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-white/10 p-3 rounded-full">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-medium text-lg">Email Us</h4>
                  <p className="text-blue-100">info@tcc20.io</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-white/10 p-3 rounded-full">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-medium text-lg">Call Us</h4>
                  <p className="text-blue-100">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-white/10 p-3 rounded-full">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-medium text-lg">Visit Us</h4>
                  <p className="text-blue-100">
                    123 Tech Boulevard<br />
                    San Francisco, CA 94107
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-12">
              <h4 className="font-medium text-lg mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
                  </svg>
                </a>
                <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                  </svg>
                </a>
                <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path>
                  </svg>
                </a>
                <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className=" rounded-xl shadow-xl p-8 border-2 border-yellow-500">
            {isSubmitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center">
                <div className="bg-green-100 p-4 rounded-full mb-4">
                  <svg className="w-12 h-12 text-green-500 mx-auto\" fill="none\" stroke="currentColor\" viewBox="0 0 24 24\" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round\" strokeLinejoin="round\" strokeWidth="2\" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
                <p className="text-gray-600 mb-6">Your message has been received. We'll be in touch shortly.</p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg transition-all duration-300 hover:bg-blue-700"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-white mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border ${
                        errors.name ? 'border-red-500' : 'border-yellow-500'
                      } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                      placeholder="John Doe"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white mb-1">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border ${
                        errors.email ? 'border-red-500' : 'border-yellow-500'
                      } focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent`}
                      placeholder="john@example.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-white mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formState.subject}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border ${
                        errors.subject ? 'border-red-500' : 'border-yellow-500'
                      } focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent`}
                      placeholder="How can we help you?"
                    />
                    {errors.subject && (
                      <p className="mt-1 text-sm text-red-500">{errors.subject}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-white mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      rows={5}
                      className={`w-full px-4 py-3 rounded-lg border ${
                        errors.message ? 'border-red-500' : 'border-gray-300'
                      } focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent`}
                      placeholder="Your message here..."
                    ></textarea>
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full py-3 px-6 rounded-lg bg-yellow-500 text-black font-medium transition-all duration-300 ${
                        isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-yellow-600'
                      } flex items-center justify-center`}
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white\" xmlns="http://www.w3.org/2000/svg\" fill="none\" viewBox="0 0 24 24">
                            <circle className="opacity-25\" cx="12\" cy="12\" r="10\" stroke="currentColor\" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message <Send className="ml-2 h-5 w-5" />
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;



// import React, { useState, useRef, useEffect } from 'react';
// import { Mail, Phone, MapPin, Send } from 'lucide-react';

// interface FormState {
//   name: string;
//   email: string;
//   subject: string;
//   message: string;
// }

// const initialState: FormState = {
//   name: '',
//   email: '',
//   subject: '',
//   message: ''
// };

// const ContactForm: React.FC = () => {
//   const [formState, setFormState] = useState<FormState>(initialState);
//   const [errors, setErrors] = useState<Partial<FormState>>({});
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [isSubmitted, setIsSubmitted] = useState(false);
//   const sectionRef = useRef<HTMLDivElement>(null);
//   const infoCardRef = useRef<HTMLDivElement>(null); // Ref for the info card
//   const formCardRef = useRef<HTMLDivElement>(null); // Ref for the form card

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
//   ) => {
//     const { name, value } = e.target;
//     setFormState((prev) => ({ ...prev, [name]: value }));

//     // Clear error when user starts typing
//     if (errors[name as keyof FormState]) {
//       setErrors((prev) => ({ ...prev, [name]: '' }));
//     }
//   };

//   const validate = (): boolean => {
//     const newErrors: Partial<FormState> = {};

//     if (!formState.name.trim()) {
//       newErrors.name = 'Name is required';
//     }

//     if (!formState.email.trim()) {
//       newErrors.email = 'Email is required';
//     } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
//       newErrors.email = 'Email is invalid';
//     }

//     if (!formState.subject.trim()) {
//       newErrors.subject = 'Subject is required';
//     }

//     if (!formState.message.trim()) {
//       newErrors.message = 'Message is required';
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();

//     if (validate()) {
//       setIsSubmitting(true);

//       // Simulate API call
//       setTimeout(() => {
//         setIsSubmitting(false);
//         setIsSubmitted(true);
//         setFormState(initialState);

//         // Reset success message after 5 seconds
//         setTimeout(() => {
//           setIsSubmitted(false);
//         }, 5000);
//       }, 1500);
//     }
//   };

//   // Intersection Observer for scroll-based animations
//   useEffect(() => {
//     const observerOptions = { threshold: 0.1 };

//     const callback = (entries: IntersectionObserverEntry[]) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add('animate-in');
//           observer.unobserve(entry.target); // Stop observing once animated
//         }
//       });
//     };

//     const observer = new IntersectionObserver(callback, observerOptions);

//     if (sectionRef.current) observer.observe(sectionRef.current);
//     if (infoCardRef.current) observer.observe(infoCardRef.current);
//     if (formCardRef.current) observer.observe(formCardRef.current);

//     return () => {
//       if (sectionRef.current) observer.unobserve(sectionRef.current);
//       if (infoCardRef.current) observer.unobserve(infoCardRef.current);
//       if (formCardRef.current) observer.unobserve(formCardRef.current);
//     };
//   }, []);

//   // Parallax effect for cards on mouse move
//   useEffect(() => {
//     const handleMouseMove = (e: MouseEvent) => {
//       const cards = [infoCardRef.current, formCardRef.current];
//       cards.forEach(card => {
//         if (card) {
//           const rect = card.getBoundingClientRect();
//           const centerX = rect.left + rect.width / 2;
//           const centerY = rect.top + rect.height / 2;

//           const mouseX = e.clientX;
//           const mouseY = e.clientY;

//           const offsetX = (mouseX - centerX) / (rect.width / 2); // -1 to 1 range
//           const offsetY = (mouseY - centerY) / (rect.height / 2); // -1 to 1 range

//           // Apply small rotation and translation based on mouse position
//           card.style.setProperty('--rotateX', `${-offsetY * 5}deg`); // Max 5 deg rotation
//           card.style.setProperty('--rotateY', `${offsetX * 5}deg`);
//           card.style.setProperty('--translateX', `${offsetX * 5}px`); // Max 5px translation
//           card.style.setProperty('--translateY', `${offsetY * 5}px`);
//         }
//       });
//     };

//     const handleMouseLeave = (e: MouseEvent) => {
//       const cards = [infoCardRef.current, formCardRef.current];
//       cards.forEach(card => {
//         if (card) {
//           card.style.setProperty('--rotateX', `0deg`);
//           card.style.setProperty('--rotateY', `0deg`);
//           card.style.setProperty('--translateX', `0px`);
//           card.style.setProperty('--translateY', `0px`);
//         }
//       });
//     };

//     const sectionElement = sectionRef.current;
//     if (sectionElement) {
//       sectionElement.addEventListener('mousemove', handleMouseMove);
//       sectionElement.addEventListener('mouseleave', handleMouseLeave);
//     }

//     return () => {
//       if (sectionElement) {
//         sectionElement.removeEventListener('mousemove', handleMouseMove);
//         sectionElement.removeEventListener('mouseleave', handleMouseLeave);
//       }
//     };
//   }, []);


//   return (
//     <section id="contact" className="relative py-24 bg-gray-950 text-white overflow-hidden"> {/* Removed background gradient and blobs */}
//       <style>
//         {`
//         /* General Fade-in and Slide-up for elements */
//         @keyframes fadeInSlideUp {
//           from {
//             opacity: 0;
//             transform: translateY(40px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         .animate-in {
//           animation: fadeInSlideUp 0.8s ease-out forwards;
//         }

//         /* RGB Text Gradient */
//         .rgb-text {
//           background: linear-gradient(90deg, #ff0000, #ff8c00, #ffff00, #00ff00, #0000ff, #4b0082, #ee82ee);
//           -webkit-background-clip: text;
//           -webkit-text-fill-color: transparent;
//         }

//         /* RGB Border Glow for cards (subtler) */
//         .card-rgb-glow {
//           position: relative;
//           z-index: 1; /* Ensure content is above pseudo-element */
//           overflow: hidden;
//           box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5); /* Initial shadow */
//         }

//         .card-rgb-glow::before {
//           content: '';
//           position: absolute;
//           top: -50%;
//           left: -50%;
//           width: 200%;
//           height: 200%;
//           background: conic-gradient(from 0deg, #ff0000, #ff8c00, #ffff00, #00ff00, #0000ff, #4b0082, #ee82ee, #ff0000);
//           transform: rotate(var(--angle, 0deg));
//           transform-origin: center;
//           animation: rotate-rgb 6s linear infinite;
//           z-index: -1;
//           filter: blur(20px); /* Soft blur for the glow */
//           opacity: 0.6; /* More subtle */
//           transition: opacity 0.3s ease;
//         }

//         .card-rgb-glow:hover::before {
//           opacity: 1; /* More intense on hover */
//         }

//         @keyframes rotate-rgb {
//           to {
//             transform: rotate(360deg);
//           }
//         }

//         /* Input field focus glow */
//         .input-focus-glow:focus {
//           box-shadow: 0 0 0 3px rgba(60, 150, 255, 0.4), 0 0 15px rgba(60, 150, 255, 0.6);
//           border-color: #3c96ff;
//           transition: all 0.3s ease;
//         }

//         /* Button hover effect */
//         .btn-glow-hover:hover {
//           box-shadow: 0 0 20px rgba(60, 150, 255, 0.7), 0 0 30px rgba(60, 150, 255, 0.5);
//           transform: translateY(-3px) scale(1.02);
//         }

//         /* 3D Parallax Effect for Cards */
//         .card-3d-parallax {
//           transform-style: preserve-3d;
//           perspective: 1000px;
//           transition: transform 0.2s ease-out, box-shadow 0.2s ease-out; /* Smoother transitions */
//           transform: rotateX(var(--rotateX, 0deg)) rotateY(var(--rotateY, 0deg)) translateX(var(--translateX, 0px)) translateY(var(--translateY, 0px));
//         }

//         .card-3d-parallax > div { /* Inner content for 3D depth */
//           transform: translateZ(30px); /* Pushes content forward */
//         }

//         /* Custom pulse animation for success checkmark */
//         @keyframes pulse-once {
//           0% { transform: scale(0.9); opacity: 0.7; }
//           50% { transform: scale(1.1); opacity: 1; }
//           100% { transform: scale(1); opacity: 1; }
//         }
//         .animate-pulse-once {
//           animation: pulse-once 0.6s ease-out forwards;
//         }
//         `}
//       </style>

//       <div
//         ref={sectionRef}
//         className="container mx-auto px-4 md:px-6 relative z-10"
//       >
//         <div className="text-center max-w-4xl mx-auto mb-20 animate-in">
//           <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight rgb-text">
//             Connect With Our Team
//           </h2>
//           <p className="text-xl text-gray-300 max-w-2xl mx-auto">
//             We're eager to hear from you. Whether you have a project idea, a question, or just want to say hello, we're here to help.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
//           {/* Contact Information Card */}
//           <div
//             ref={infoCardRef}
//             className="card-rgb-glow card-3d-parallax rounded-2xl bg-gray-800/80 backdrop-blur-sm p-10 transform translate-y-10 opacity-0"
//           >
//             <div className="inner-content">
//               <h3 className="text-3xl font-bold mb-8 text-blue-300">Our Details</h3>

//               <div className="space-y-8">
//                 <div className="flex items-center space-x-6">
//                   <div className="p-4 rounded-full bg-blue-600/30 shadow-lg border border-blue-500/50 hover:scale-110 transition-transform duration-300">
//                     <Mail className="w-7 h-7 text-blue-200" />
//                   </div>
//                   <div>
//                     <h4 className="font-semibold text-xl">Email Us</h4>
//                     <p className="text-gray-300 mt-1">info@tcc20.io</p>
//                   </div>
//                 </div>

//                 <div className="flex items-center space-x-6">
//                   <div className="p-4 rounded-full bg-blue-600/30 shadow-lg border border-blue-500/50 hover:scale-110 transition-transform duration-300">
//                     <Phone className="w-7 h-7 text-blue-200" />
//                   </div>
//                   <div>
//                     <h4 className="font-semibold text-xl">Call Us</h4>
//                     <p className="text-gray-300 mt-1">+1 (555) 123-4567</p>
//                   </div>
//                 </div>

//                 <div className="flex items-center space-x-6">
//                   <div className="p-4 rounded-full bg-blue-600/30 shadow-lg border border-blue-500/50 hover:scale-110 transition-transform duration-300">
//                     <MapPin className="w-7 h-7 text-blue-200" />
//                   </div>
//                   <div>
//                     <h4 className="font-semibold text-xl">Visit Us</h4>
//                     <p className="text-gray-300 mt-1">
//                       123 Tech Boulevard<br />
//                       San Francisco, CA 94107, USA
//                     </p>
//                   </div>
//                 </div>
//               </div>

//               <div className="mt-16">
//                 <h4 className="font-semibold text-xl mb-6 text-blue-300">Connect On Socials</h4>
//                 <div className="flex space-x-6">
//                   <a href="#" className="p-4 rounded-full bg-gray-700/50 hover:bg-gray-600/70 transition-colors duration-300 shadow-md hover:shadow-xl hover:scale-110 transition-transform duration-300" aria-label="Facebook">
//                     <svg className="w-6 h-6 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
//                       <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
//                     </svg>
//                   </a>
//                   <a href="#" className="p-4 rounded-full bg-gray-700/50 hover:bg-gray-600/70 transition-colors duration-300 shadow-md hover:shadow-xl hover:scale-110 transition-transform duration-300" aria-label="Twitter">
//                     <svg className="w-6 h-6 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
//                       <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
//                     </svg>
//                   </a>
//                   <a href="#" className="p-4 rounded-full bg-gray-700/50 hover:bg-gray-600/70 transition-colors duration-300 shadow-md hover:shadow-xl hover:scale-110 transition-transform duration-300" aria-label="Instagram">
//                     <svg className="w-6 h-6 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
//                       <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path>
//                     </svg>
//                   </a>
//                   <a href="#" className="p-4 rounded-full bg-gray-700/50 hover:bg-gray-600/70 transition-colors duration-300 shadow-md hover:shadow-xl hover:scale-110 transition-transform duration-300" aria-label="GitHub">
//                     <svg className="w-6 h-6 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
//                       <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
//                     </svg>
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Contact Form Card */}
//           <div
//             ref={formCardRef}
//             className="card-rgb-glow card-3d-parallax rounded-2xl bg-gray-800/80 backdrop-blur-sm p-10 transform translate-y-10 opacity-0"
//           >
//             <div className="inner-content">
//               {isSubmitted ? (
//                 <div className="h-full flex flex-col items-center justify-center text-center py-10">
//                   <div className="bg-green-600/40 p-6 rounded-full mb-6 animate-pulse-once">
//                     <svg className="w-16 h-16 text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
//                     </svg>
//                   </div>
//                   <h3 className="text-3xl font-bold text-white mb-4">Message Sent Successfully!</h3>
//                   <p className="text-gray-300 mb-8 max-w-sm">We appreciate you reaching out. Our team will get back to you as soon as possible.</p>
//                   <button
//                     onClick={() => setIsSubmitted(false)}
//                     className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg transition-all duration-300 hover:bg-blue-700 transform hover:scale-105 shadow-xl btn-glow-hover"
//                   >
//                     Send Another Message
//                   </button>
//                 </div>
//               ) : (
//                 <form onSubmit={handleSubmit}>
//                   <div className="grid grid-cols-1 gap-7">
//                     <div>
//                       <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
//                         Your Name
//                       </label>
//                       <input
//                         type="text"
//                         id="name"
//                         name="name"
//                         value={formState.name}
//                         onChange={handleChange}
//                         className={`w-full px-5 py-3 rounded-lg border bg-gray-700 text-white placeholder-gray-400 input-focus-glow ${
//                           errors.name ? 'border-red-500' : 'border-gray-600'
//                         }`}
//                         placeholder="John Doe"
//                       />
//                       {errors.name && (
//                         <p className="mt-2 text-sm text-red-400">{errors.name}</p>
//                       )}
//                     </div>

//                     <div>
//                       <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
//                         Your Email
//                       </label>
//                       <input
//                         type="email"
//                         id="email"
//                         name="email"
//                         value={formState.email}
//                         onChange={handleChange}
//                         className={`w-full px-5 py-3 rounded-lg border bg-gray-700 text-white placeholder-gray-400 input-focus-glow ${
//                           errors.email ? 'border-red-500' : 'border-gray-600'
//                         }`}
//                         placeholder="john@example.com"
//                       />
//                       {errors.email && (
//                         <p className="mt-2 text-sm text-red-400">{errors.email}</p>
//                       )}
//                     </div>

//                     <div>
//                       <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
//                         Subject
//                       </label>
//                       <input
//                         type="text"
//                         id="subject"
//                         name="subject"
//                         value={formState.subject}
//                         onChange={handleChange}
//                         className={`w-full px-5 py-3 rounded-lg border bg-gray-700 text-white placeholder-gray-400 input-focus-glow ${
//                           errors.subject ? 'border-red-500' : 'border-gray-600'
//                         }`}
//                         placeholder="How can we help you?"
//                       />
//                       {errors.subject && (
//                         <p className="mt-2 text-sm text-red-400">{errors.subject}</p>
//                       )}
//                     </div>

//                     <div>
//                       <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
//                         Message
//                       </label>
//                       <textarea
//                         id="message"
//                         name="message"
//                         value={formState.message}
//                         onChange={handleChange}
//                         rows={6}
//                         className={`w-full px-5 py-3 rounded-lg border bg-gray-700 text-white placeholder-gray-400 input-focus-glow ${
//                           errors.message ? 'border-red-500' : 'border-gray-600'
//                         }`}
//                         placeholder="Your detailed message here..."
//                       ></textarea>
//                       {errors.message && (
//                         <p className="mt-2 text-sm text-red-400">{errors.message}</p>
//                       )}
//                     </div>

//                     <div>
//                       <button
//                         type="submit"
//                         disabled={isSubmitting}
//                         className={`w-full py-4 px-6 rounded-lg bg-blue-600 text-white font-semibold text-lg transition-all duration-300 ${
//                           isSubmitting ? 'opacity-60 cursor-not-allowed' : 'hover:bg-blue-700 btn-glow-hover'
//                         } flex items-center justify-center`}
//                       >
//                         {isSubmitting ? (
//                           <>
//                             <svg className="animate-spin -ml-1 mr-3 h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                               <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                               <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                             </svg>
//                             Sending Message...
//                           </>
//                         ) : (
//                           <>
//                             Send Message <Send className="ml-3 h-5 w-5" />
//                           </>
//                         )}
//                       </button>
//                     </div>
//                   </div>
//                 </form>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ContactForm;