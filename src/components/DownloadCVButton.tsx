import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface DownloadCVButtonProps {
  variant?: "default" | "outline" | "ghost";
  size?: "sm" | "lg" | "default";
  className?: string;
  showIcon?: boolean;
  children?: React.ReactNode;
}

const DownloadCVButton = ({ 
  variant = "outline", 
  size = "default", 
  className = "", 
  showIcon = true,
  children = "Télécharger CV"
}: DownloadCVButtonProps) => {
  const handleDownload = () => {
    // Analytics ou tracking si nécessaire
    console.log("CV téléchargé");
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Button 
        variant={variant} 
        size={size} 
        className={className} 
        asChild
      >
        <a 
          href="/CV_Odette_Lokossou.pdf" 
          download="CV_Odette_Lokossou.pdf"
          onClick={handleDownload}
        >
          {showIcon && <Download className="w-4 h-4 mr-2" />}
          {children}
        </a>
      </Button>
    </motion.div>
  );
};

export default DownloadCVButton;