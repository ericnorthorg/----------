module.exports = function(eleventyConfig) {
  // 1. Копируем папки админки и ассетов
  eleventyConfig.addPassthroughCopy("src/admin");
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/style.css"); // На всякий случай

  // 2. Учим движок красиво форматировать дату (ЧТОБЫ БЛОГ ЗАРАБОТАЛ)
  eleventyConfig.addFilter("date", function(dateVal) {
    if (!dateVal) return "";
    const date = new Date(dateVal);
    return date.toLocaleDateString("ru-RU", {
      year: "numeric",
      month: "long",
      day: "numeric"
    });
  });

  // 3. Настройки папок
  return {
    dir: {
      input: "src",    // Откуда брать
      output: "public" // Куда класть
    }
  };
};