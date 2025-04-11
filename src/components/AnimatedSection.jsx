import { motion } from 'framer-motion';
import {useAnimateOnView} from '../hooks';

const AnimatedSection = ({ id, children }) => {
  const hasAnimated = useAnimateOnView(id);

  return (
    <div id={id} >
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={hasAnimated ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
        
      >
        {children}
      </motion.div>
    </div>
  );
};

export default AnimatedSection;
