# 🧊 GlassCard Component Guide

## 📦 Dependencies
To use this component, install the following packages:
```bash
npm install framer-motion react-icons
```

Make sure Tailwind CSS is properly set up in your project. [Tailwind Setup Docs](https://tailwindcss.com/docs/installation)

---

## 🔍 Overview
The `GlassCard` component is a reusable animated 3D glass UI card using **Framer Motion**. It reacts to both **mouse hover** and **mobile device tilt** (via the DeviceOrientation API).

It can be customized via props and includes smooth 3D animation, theming support, and optional interaction effects.

---

## 🛠 Props
| Prop Name         | Type     | Default                           | Description |
|------------------|----------|-----------------------------------|-------------|
| `title`          | string   | "✨ 3D Glass Card + Mobile Motion" | The card heading text |
| `description`    | string   | "All children scale and glow..."  | Body text inside the card |
| `buttonText`     | string   | "Try Tilting 📱"                  | The button label text |
| `textColor`      | string   | `"text-black"`                    | Tailwind text color class |
| `buttonTextColor`| string   | `"text-white"`                    | Button text color class |
| `cardBg`         | string   | `"bg-white/10"`                   | Card background Tailwind class |
| `borderColor`    | string   | `"border-white/20"`              | Card border color class |
| `buttonColor`    | string   | `"bg-white/20 hover:bg-white/30"`| Button background Tailwind classes |
| `darkMode`       | boolean  | `true`                            | Whether dark mode is active |

---

## ⚙️ Usage Example

### 📄 Code
```jsx
import GlassCard from "./components/GlassCard";

<GlassCard
  title="Custom Glass UI"
  description="An interactive glass morphism card."
  buttonText="Hover or Tilt!"
  textColor="text-white"
  buttonTextColor="text-white"
  cardBg="bg-black/20"
  borderColor="border-white/30"
  buttonColor="bg-blue-500 hover:bg-blue-600"
  darkMode={true}
/>
```

<button className="bg-white/10 hover:bg-white/20 px-3 py-1 rounded text-xs text-white mt-2">📋 Copy</button>

---

## 🎨 Live Preview with Theme Toggle
Click the toggle below to preview the `GlassCard` in dark or light mode.
```jsx
// Use a state like:
const [darkMode, setDarkMode] = useState(true);

<GlassCard darkMode={darkMode} />
<button onClick={() => setDarkMode(!darkMode)}>
  Toggle Theme
</button>
```

---

## 🖼 Demo Section (Optional)
You can insert screenshots or preview GIFs of the card behavior here:
- 🖱 Mouse hover effect
- 📱 Mobile tilt interaction
- 💡 Dark/light theme switch

---

## 🧩 Tabs to Add in Future
- ✅ Features & Props
- 🎨 Theme & Layouts
- 🧪 Motion Debugging
- 🧱 Integration Guide
- 📸 Demo Gallery
- 🗃 FAQ & Tips

---

Need help expanding this or deploying the component to production? Just ask! 🚀


