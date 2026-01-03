import React from 'react';
import FuzzyText from './FuzzyText';
import { Link } from 'react-router';

const ErrorMessage = ({ message = "Page Not Found" }) => {
    return (
        <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6 text-center select-none overflow-hidden relative">
            
            {/* Background Decor */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/30 rounded-full blur-[100px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-secondary/10 rounded-full blur-[100px]" />
            </div>

            <div className="relative z-10 flex flex-col items-center">
                <FuzzyText 
                    fontSize="clamp(8rem, 20vw, 15rem)" 
                    fontWeight={900} 
                    fontFamily="inherit" 
                    color="#000" 
                    enableHover={true}
                    baseIntensity={0.2} 
                    hoverIntensity={0.5}
                >
                    404
                </FuzzyText>
                
                <h2 className="text-2xl md:text-3xl font-bold text-[#A3E635] mt-4 mb-4 tracking-tight">
                    Oops! {message}
                </h2>
                
                <p className="text-gray-500 max-w-md mx-auto mb-8 text-lg">
                    We can't seem to find the page you're looking for!!! No Event Here Only Error.
                </p>

                <Link 
                    to="/" 
                    className="btn btn-primary rounded-full px-8 btn-lg text-primary-content font-bold hover:scale-105 transition-transform"
                >
                    Back to Home
                </Link>
            </div>
        </div>
    );
};

export default ErrorMessage;
