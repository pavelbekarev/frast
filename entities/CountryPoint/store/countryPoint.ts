export const useCountryPointStore = defineStore("countryPointStore", () => {
  const selectedPointId = ref<number | null>(null);
  const hoveredPointId = ref<number | null>(null);

  const handleClick = (id: number) => {
    selectedPointId.value = id === selectedPointId!.value ? null : id;
  };

  const handleMouseEnter = (id: number) => {
    hoveredPointId.value = id;
  };

  const handleMouseLeave = () => {
    hoveredPointId.value = null;
  };

  return {
    selectedPointId,
    hoveredPointId,
    handleClick,
    handleMouseEnter,
    handleMouseLeave,
  };
});
