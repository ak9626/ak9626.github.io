import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Award, Sparkles } from 'lucide-react';

const education = [
  {
    degree: 'Master of Science',
    field: 'Management of Technology',
    institution: 'New York University',
    years: '2022-2024'
  },
  {
    degree: 'Bachelor of Technology',
    field: 'Computer and Communication Engineering',
    institution: 'Manipal Institute of Technology',
    years: '2014-2018'
  }
];

export function Education() {
  return (
    <section id="education" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 flex items-center gap-4">
            <GraduationCap className="text-purple-400" size={40} />
            Education
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, rotateY: 2 }}
                className="relative group perspective-1000"
              >
                {/* Scroll Shadow */}
                <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-amber-800 rounded-lg blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-300"></div>
                
                {/* Certificate/Diploma Scroll */}
                <div className="relative bg-gradient-to-br from-amber-50 via-yellow-50 to-amber-100 rounded-lg p-4 sm:p-6 md:p-8 border-2 sm:border-4 border-amber-700 shadow-2xl overflow-hidden">
                  {/* Parchment Texture Overlay */}
                  <div className="absolute inset-0 opacity-5" style={{
                    backgroundImage: 'url("data:image/svg+xml,%3Csvg width="100" height="100" xmlns="http://www.w3.org/2000/svg"%3E%3Cfilter id="noise"%3E%3CfeTurbulence baseFrequency="0.9" numOctaves="4" /%3E%3C/filter%3E%3Crect width="100" height="100" filter="url(%23noise)" opacity="0.4"/%3E%3C/svg%3E")',
                  }}></div>

                  {/* Decorative Corner Elements */}
                  <div className="absolute top-2 left-2 sm:top-4 sm:left-4 w-8 h-8 sm:w-12 sm:h-12 border-l-2 border-t-2 sm:border-l-4 sm:border-t-4 border-amber-700 opacity-50"></div>
                  <div className="absolute top-2 right-2 sm:top-4 sm:right-4 w-8 h-8 sm:w-12 sm:h-12 border-r-2 border-t-2 sm:border-r-4 sm:border-t-4 border-amber-700 opacity-50"></div>
                  <div className="absolute bottom-2 left-2 sm:bottom-4 sm:left-4 w-8 h-8 sm:w-12 sm:h-12 border-l-2 border-b-2 sm:border-l-4 sm:border-b-4 border-amber-700 opacity-50"></div>
                  <div className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4 w-8 h-8 sm:w-12 sm:h-12 border-r-2 border-b-2 sm:border-r-4 sm:border-b-4 border-amber-700 opacity-50"></div>

                  {/* Ornamental Top Border */}
                  <div className="absolute top-0 left-0 right-0 h-1 sm:h-2 bg-gradient-to-r from-transparent via-amber-700 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 h-1 sm:h-2 bg-gradient-to-r from-transparent via-amber-700 to-transparent"></div>

                  {/* Sparkle Decorations */}
                  <Sparkles className="absolute top-4 sm:top-6 left-1/2 -translate-x-1/2 text-amber-600 opacity-30" size={20} />
                  
                  {/* Content */}
                  <div className="relative z-10 text-center space-y-3 sm:space-y-4">
                    {/* Header with Icon */}
                    <div className="flex justify-center mb-3 sm:mb-4">
                      <div className="relative">
                        <div className="absolute inset-0 bg-amber-600 rounded-full blur-md opacity-50"></div>
                        <div className="relative bg-gradient-to-br from-amber-600 to-amber-800 rounded-full p-3 sm:p-4 shadow-lg">
                          <GraduationCap className="text-amber-50" size={24} />
                        </div>
                      </div>
                    </div>

                    {/* Decorative Line */}
                    <div className="flex items-center justify-center gap-2 mb-3 sm:mb-4">
                      <div className="w-8 sm:w-12 h-0.5 bg-gradient-to-r from-transparent to-amber-700"></div>
                      <Award className="text-amber-700" size={14} />
                      <div className="w-8 sm:w-12 h-0.5 bg-gradient-to-l from-transparent to-amber-700"></div>
                    </div>

                    {/* Certificate Text */}
                    <div className="space-y-2 sm:space-y-3">
                      <h4 className="text-amber-800 font-bold text-lg sm:text-xl md:text-2xl tracking-wide" style={{ fontFamily: 'Georgia, serif' }}>
                        {edu.degree}
                      </h4>
                      <div className="h-px bg-gradient-to-r from-transparent via-amber-600 to-transparent"></div>
                      <h3 className="text-amber-900 text-base sm:text-lg md:text-xl font-semibold px-2 sm:px-4" style={{ fontFamily: 'Georgia, serif' }}>
                        {edu.field}
                      </h3>
                      <div className="pt-1 sm:pt-2">
                        <p className="text-amber-800 text-sm sm:text-base md:text-lg font-medium" style={{ fontFamily: 'Georgia, serif' }}>
                          {edu.institution}
                        </p>
                        <p className="text-amber-700 text-xs sm:text-sm mt-1 sm:mt-2 font-semibold tracking-wider">
                          {edu.years}
                        </p>
                      </div>
                    </div>

                    {/* Decorative Line */}
                    <div className="flex items-center justify-center gap-2 mt-4 sm:mt-6">
                      <div className="w-8 sm:w-12 h-0.5 bg-gradient-to-r from-transparent to-amber-700"></div>
                      <Award className="text-amber-700" size={14} />
                      <div className="w-8 sm:w-12 h-0.5 bg-gradient-to-l from-transparent to-amber-700"></div>
                    </div>

                    {/* Seal/Stamp */}
                    <div className="flex justify-center mt-4 sm:mt-6">
                      <div className="relative">
                        <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border-2 sm:border-4 border-amber-700 flex items-center justify-center bg-gradient-to-br from-amber-600 to-amber-800 shadow-lg">
                          <Award className="text-amber-50" size={24} />
                        </div>
                        {/* Ribbon */}
                        <div className="absolute -bottom-1 sm:-bottom-2 left-1/2 -translate-x-1/2 w-0.5 sm:w-1 h-4 sm:h-6 bg-gradient-to-b from-amber-700 to-amber-800"></div>
                        <div className="absolute -bottom-3 sm:-bottom-4 left-1/2 -translate-x-1/2 w-4 sm:w-6 h-3 sm:h-4 flex gap-1">
                          <div className="w-2 sm:w-3 h-3 sm:h-4 bg-amber-700 clip-ribbon-left transform rotate-6"></div>
                          <div className="w-2 sm:w-3 h-3 sm:h-4 bg-amber-800 clip-ribbon-right transform -rotate-6"></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Scrolled Edge Effect - Left */}
                  <div className="absolute left-0 top-0 bottom-0 w-2 sm:w-3 bg-gradient-to-r from-amber-800 to-transparent opacity-40"></div>
                  {/* Scrolled Edge Effect - Right */}
                  <div className="absolute right-0 top-0 bottom-0 w-2 sm:w-3 bg-gradient-to-l from-amber-800 to-transparent opacity-40"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}