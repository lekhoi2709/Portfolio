import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";

export default function Switch({
  checked,
  setChecked,
}: {
  checked: boolean;
  setChecked: (checked: boolean) => void;
}) {
  return (
    <form className="flex space-x-4 antialiased items-center">
      <label
        htmlFor="checkbox"
        className={twMerge(
          "h-8 px-1 flex items-center border border-transparent shadow-[inset_0px_0px_12px_rgba(0,0,0,0.25)] rounded-full w-[64px] relative cursor-pointer transition duration-200",
          checked ? "bg-blue-500" : "bg-slate-700 border-slate-500"
        )}
      >
        <motion.div
          initial={{
            width: "24px",
            x: checked ? 0 : 32,
          }}
          animate={{
            height: ["24px", "12px", "24px"],
            width: ["24px", "32px", "24px", "24px"],
            x: checked ? 32 : 0,
          }}
          transition={{
            duration: 0.3,
            delay: 0.1,
          }}
          key={String(checked)}
          className={twMerge(
            "h-[24px] block rounded-full bg-white shadow-md z-10 p-1"
          )}
        >
          {checked ? (
            <Moon size={16} className="text-blue-500" />
          ) : (
            <Sun size={16} className="text-slate-500" />
          )}
        </motion.div>
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
          className="hidden"
          id="checkbox"
        />
      </label>
    </form>
  );
}
