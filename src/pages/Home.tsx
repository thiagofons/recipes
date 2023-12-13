import Popular from "../components/Popular";
import { motion } from "framer-motion";
import Picks from "../components/Picks";

const Home = () => {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Popular />
      
      <Picks type="vegetarian" />
      <Picks type="dessert" />
    </motion.div>
  );
};

export default Home;
