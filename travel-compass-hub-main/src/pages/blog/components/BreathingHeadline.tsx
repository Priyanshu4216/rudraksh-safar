import { motion } from 'framer-motion';

const BreathingHeadline = ({ children, className = "", id }: { children: React.ReactNode, className?: string, id?: string }) => {
    return (
        <motion.h1
            id={id}
            className={`font-serif font-bold text-foreground ${className}`}
            initial={{ opacity: 0.9, y: 0 }}
            animate={{
                opacity: [0.9, 1, 0.9],
                y: [0, -2, 0]
            }}
            transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
            }}
        >
            {children}
        </motion.h1>
    );
};

export default BreathingHeadline;
