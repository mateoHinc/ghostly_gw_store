import { ref, onMounted } from "vue";

export function useTheme() {
  const theme = ref("dark");
  const apply = () => document.body.setAttribute("data-theme", theme.value);

  const toggleTheme = () => {
    theme.value = theme.value === "dark" ? "light" : "dark";
    localStorage.setItem("theme", theme.value);
    apply();
  };

  onMounted(() => {
    const saved = localStorage.getItem("theme");
    if (saved) theme.value = saved;
    apply();
  });

  return { theme, toggleTheme };
}
