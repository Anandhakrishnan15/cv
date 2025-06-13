import {
  glassCardComponentCode,
  glassCardUsageExample,
} from "../GlassCardDocs/GlassCardCode";

// glassCardGuideData.js
const glassCardGuideData = {
  componentName: "Contact",
  title: "🧊 GlassCard Component Guide",
  dependencies: [
    {
      name: "framer-motion",
      description: "for 3D animation and spring transitions",
    },
    {
      name: "react-icons",
      description: "for toggle icons and UI",
    },
    {
      name: "tailwindcss",
      description: "utility-first styling (make sure Tailwind is configured)",
    },
  ],
  installCommand: "npm install framer-motion react-icons tailwindcss",
  overview:
    "The GlassCard component is a reusable animated 3D glass UI block built with Framer Motion. It supports both mouse and mobile tilt effects and is fully customizable through props.",
  preview: {
    title: "🧊 Glass Mode Card",
    description: "Responsive to hover and device motion. Fully customizable.",
    buttonText: "Test Tilt",
  },
  howToSetUp: [
    {
      stepType: 1,
      title: "Create the Component File",
      detail: "Navigate to your project directory and create a file at: `src/components/GlassCard/GlassCard.jsx`",
    },
    {
      stepType: 2,
      title: "Copy the Component Code",
      detail: 'Copy the entire GlassCard component code provided below in the "📄 Component Code" section. You can either:\n- Click the copy button on the top right of the code block, or\n- Select and copy the code manually.',
    },
    {
      stepType: 3,
      title: "Paste the Code",
      detail: "IPaste it inside your `GlassCard.jsx` file.",
    },
    {
      stepType: 4,
      title: "Customize as You Wish",
      detail: "The component has default props already set. You can:\n- Keep them as they are\n- Modify the values like title, color classes, and button text\n- Fully change the style with your own Tailwind CSS classes",
    },
    {
      stepType: 5,
      title: "You're Done!",
      detail: "Now your GlassCard component is ready. Use it anywhere in your project by importing it. Feel free to customize and make it your own! 🎨",
    },
  ],

  compnentFile: `src/components/GlassCard/GlassCard.jsx`,
  componentCode: glassCardComponentCode,
  usageCode: glassCardUsageExample,

  props: [
    {
      name: "title",
      type: "string",
      default: `"✨ 3D Glass Card + Mobile Motion"`,
      description: "The card heading text",
    },
    {
      name: "description",
      type: "string",
      default: `"All children scale and glow..."`,
      description: "Body text inside the card",
    },
    {
      name: "buttonText",
      type: "string",
      default: `"Try Tilting 📱"`,
      description: "The button label text",
    },
    {
      name: "textColor",
      type: "string",
      default: `"text-black"`,
      description: "Tailwind text color class",
    },
    {
      name: "buttonTextColor",
      type: "string",
      default: `"text-white"`,
      description: "Button text color class",
    },
    {
      name: "cardBg",
      type: "string",
      default: `"bg-white/10"`,
      description: "Card background Tailwind class",
    },
    {
      name: "borderColor",
      type: "string",
      default: `"border-white/20"`,
      description: "Card border color class",
    },
    {
      name: "buttonColor",
      type: "string",
      default: `"bg-white/20 hover:bg-white/30"`,
      description: "Button background Tailwind classes",
    },
    {
      name: "darkMode",
      type: "boolean",
      default: `true`,
      description: "Whether dark mode is active",
    },
  ],
};

export default glassCardGuideData;
