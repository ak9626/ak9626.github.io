import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Code2, Wifi, Battery, Search } from 'lucide-react';

const skills = [
  { name: 'Java', icon: 'https://img.icons8.com/color/48/000000/java-coffee-cup-logo--v1.png' },
  { name: 'Kotlin', icon: 'https://img.icons8.com/color/48/000000/kotlin.png' },
  { name: 'TypeScript', icon: 'https://img.icons8.com/?size=48&id=uJM6fQYqDaZK&format=png&color=000000' },
  { name: 'JavaScript', icon: 'https://img.icons8.com/color/48/000000/javascript--v1.png' },
  { name: 'Python', icon: 'https://img.icons8.com/color/48/000000/python--v1.png' },
  { name: 'Node.js', icon: 'https://img.icons8.com/color/48/000000/nodejs.png' },
  { name: 'React', icon: 'https://img.icons8.com/color/48/000000/react-native.png' },
  { name: 'Angular', icon: 'https://img.icons8.com/?size=48&id=j9DnICNnlhGk&format=png&color=000000' },
  { name: 'Spring Boot', icon: 'https://img.icons8.com/?size=48&id=90519&format=png&color=000000' },
  { name: 'Spring MVC', icon: 'https://img.icons8.com/?size=48&id=90519&format=png&color=22A642' },
  { name: 'MongoDB', icon: 'https://img.icons8.com/color/48/000000/mongodb.png' },
  { name: 'MySQL', icon: 'https://img.icons8.com/color/48/000000/mysql-logo.png' },
  { name: 'SQL Server', icon: 'https://img.icons8.com/color/48/000000/microsoft-sql-server.png' },
  { name: 'AWS', icon: 'https://img.icons8.com/color/48/000000/amazon-web-services.png' },
  { name: 'AWS Lambda', icon: 'https://img.icons8.com/?size=48&id=33039&format=png&color=000000' },
  { name: 'Git', icon: 'https://img.icons8.com/color/48/000000/git.png' },
  { name: 'GitHub', icon: 'https://img.icons8.com/glyph-neue/48/ffffff/github.png' },
  { name: 'Jenkins', icon: 'https://img.icons8.com/color/48/000000/jenkins.png' },
  { name: 'Jira', icon: 'https://img.icons8.com/color/48/000000/jira.png' },
  { name: 'HTML5', icon: 'https://img.icons8.com/color/48/000000/html-5--v1.png' },
  { name: 'CSS3', icon: 'https://img.icons8.com/color/48/000000/css3.png' },
  { name: 'Android', icon: 'https://img.icons8.com/color/48/000000/android-os.png' },
  { name: 'Power BI', icon: 'https://img.icons8.com/color/48/000000/power-bi.png' },
  { name: 'Power Apps', icon: 'https://img.icons8.com/?size=48&id=L2cWyCdu9LWq&format=png&color=000000' },
  { name: 'Power Automate', icon: 'https://img.icons8.com/?size=48&id=VOnEKbhIXNSS&format=png&color=000000' },
  { name: 'Excel', icon: 'https://img.icons8.com/color/48/000000/ms-excel.png' },
  { name: 'Machine Learning', icon: 'https://img.icons8.com/color/48/000000/artificial-intelligence.png' },
  { name: 'Data Analysis', icon: 'https://img.icons8.com/?size=48&id=55251&format=png&color=000000' },
  { name: 'ETL', icon: 'https://img.icons8.com/color/48/000000/data-configuration.png' },
  { name: 'DevOps', icon: 'https://img.icons8.com/?size=48&id=3628&format=png&color=000000' },
  { name: 'CI/CD', icon: 'https://img.icons8.com/?size=48&id=vk5HKlQlkcOR&format=png&color=000000' },
  { name: 'RESTful APIs', icon: 'https://img.icons8.com/?size=48&id=21888&format=png&color=5A834A' },
  { name: 'Agile', icon: 'https://img.icons8.com/?size=48&id=aPFPvI9iSUKn&format=png&color=000000' },
  { name: 'SDLC', icon: 'https://img.icons8.com/?size=48&id=iFag1p40O89x&format=png&color=A82A2A' },
  { name: 'TDD', icon: 'https://img.icons8.com/?size=48&id=40886&format=png&color=4E86B3' },
  { name: 'Unit Testing', icon: 'https://img.icons8.com/color/48/000000/test-tube.png' },
  { name: 'Code Review', icon: 'https://img.icons8.com/color/48/000000/code.png' },
  { name: 'Product Management', icon: 'https://img.icons8.com/color/48/000000/product.png' },
  { name: 'Project Management', icon: 'https://img.icons8.com/color/48/000000/project-management.png' },
  { name: 'Leadership', icon: 'https://img.icons8.com/color/48/000000/leadership.png' },
  { name: 'Time Management', icon: 'https://img.icons8.com/?size=48&id=58853&format=png&color=D5C138' },
  { name: 'Organization', icon: 'https://img.icons8.com/?size=48&id=PV2NAkRVK2rH&format=png&color=000000' },
  { name: 'Adaptability', icon: 'https://img.icons8.com/?size=48&id=SO25c7WqMWBh&format=png&color=000000' }
];

export function Skills() {
  const [selectedIcon, setSelectedIcon] = useState<number | null>(null);
  const [currentTime, setCurrentTime] = useState(new Date());

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', { 
      hour: 'numeric', 
      minute: '2-digit',
      hour12: true 
    });
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', { 
      weekday: 'short',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <section id="skills" className="py-20 px-6 bg-black/20">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 flex items-center gap-4">
            <Code2 className="text-purple-400" size={40} />
            Skills & Abilities
          </h2>

          {/* Mac Desktop */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-700">
            {/* Menu Bar */}
            <div className="bg-gray-800/95 backdrop-blur-md px-4 py-2 flex items-center justify-between border-b border-gray-700">
              <div className="flex items-center gap-4">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 cursor-pointer"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600 cursor-pointer"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-600 cursor-pointer"></div>
                </div>
                <div className="flex items-center gap-4 text-white text-sm">
                  <span className="font-semibold">🍎</span>
                  <span className="font-semibold">Finder</span>
                  <span className="text-gray-400">File</span>
                  <span className="text-gray-400">Edit</span>
                  <span className="text-gray-400">View</span>
                </div>
              </div>
              <div className="flex items-center gap-4 text-white text-sm">
                <Search size={16} className="text-gray-400" />
                <Wifi size={16} />
                <Battery size={16} />
                <span className="text-xs">{formatDate(currentTime)}</span>
                <span className="font-medium">{formatTime(currentTime)}</span>
              </div>
            </div>

            {/* Desktop Area */}
            <div 
              className="relative bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 min-h-[600px] p-8"
              onClick={() => setSelectedIcon(null)}
            >
              {/* Wallpaper overlay pattern */}
              <div className="absolute inset-0 opacity-10" style={{
                backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                backgroundSize: '40px 40px'
              }}></div>

              {/* Desktop Icons Grid */}
              <div className="relative grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-7 gap-4 mb-20">
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.03, duration: 0.3 }}
                    viewport={{ once: true }}
                    className="relative"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedIcon(index);
                    }}
                  >
                    <motion.div
                      className={`flex flex-col items-center gap-2 p-3 rounded-lg cursor-pointer transition-all duration-200 ${
                        selectedIcon === index 
                          ? 'bg-blue-500/40 backdrop-blur-sm' 
                          : 'hover:bg-white/10'
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {/* Icon */}
                      <div className={`w-16 h-16 flex items-center justify-center rounded-xl transition-all duration-200 ${
                        selectedIcon === index ? 'bg-white/20' : 'bg-white/10'
                      }`}>
                        <img 
                          src={skill.icon} 
                          alt={skill.name} 
                          className="w-12 h-12 object-contain"
                          draggable={false}
                        />
                      </div>
                      {/* Label */}
                      <span className={`text-xs text-center max-w-full px-1 py-0.5 rounded transition-all duration-200 ${
                        selectedIcon === index 
                          ? 'bg-blue-600 text-white font-medium' 
                          : 'text-white bg-black/30'
                      }`}>
                        {skill.name}
                      </span>
                    </motion.div>
                  </motion.div>
                ))}
              </div>

              {/* Trash Icon */}
              <div className="absolute bottom-24 right-8">
                <motion.div
                  className="flex flex-col items-center gap-2 p-3 rounded-lg cursor-pointer hover:bg-white/10 transition-all duration-200"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="w-16 h-16 flex items-center justify-center bg-white/10 rounded-xl">
                    <span className="text-4xl">🗑️</span>
                  </div>
                  <span className="text-xs text-white bg-black/30 px-1 py-0.5 rounded">
                    Trash
                  </span>
                </motion.div>
              </div>
            </div>

            {/* Dock */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2">
              <motion.div 
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
                className="bg-white/10 backdrop-blur-xl rounded-2xl px-4 py-3 border border-white/20 shadow-2xl"
              >
                <div className="flex items-end gap-2">
                  {/* Dock Icons */}
                  {['📁', '💼', '🎨', '⚙️', '📊', '🌐', '📝'].map((icon, index) => (
                    <motion.div
                      key={index}
                      className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center text-2xl cursor-pointer hover:bg-white/30 transition-all"
                      whileHover={{ 
                        scale: 1.3, 
                        y: -10,
                        transition: { type: "spring", stiffness: 400, damping: 10 }
                      }}
                      whileTap={{ scale: 0.9 }}
                    >
                      {icon}
                    </motion.div>
                  ))}
                  
                  {/* Divider */}
                  <div className="w-0.5 h-12 bg-white/30 mx-1"></div>
                  
                  {/* Trash in dock */}
                  <motion.div
                    className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center text-2xl cursor-pointer hover:bg-white/30 transition-all"
                    whileHover={{ 
                      scale: 1.3, 
                      y: -10,
                      transition: { type: "spring", stiffness: 400, damping: 10 }
                    }}
                    whileTap={{ scale: 0.9 }}
                  >
                    🗑️
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>

          <p className="text-center text-gray-400 mt-6 text-sm">
            Click on any skill icon to select it, just like a Mac desktop! 💻
          </p>
        </motion.div>
      </div>
    </section>
  );
}