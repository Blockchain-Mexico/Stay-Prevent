/* eslint-disable react/display-name */
import { motion } from "framer-motion";

export default function withTransition<T>(Component: React.ComponentType<any>) {
    return (props: any) => (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
        >
            <Component {...props} />
        </motion.div>
    );
}
