import React from "react";

const ThemePicker = () => {
  return (
    <select data-choose-theme className="select select-accent">
      <option value="garden">Default</option>
      <option value="corporate">Corporate</option>
      <option value="dracula">Dracula</option>
      <option value="emerald">Emerald</option>
      <option value="retro">Retro</option>
    </select>
  );
};

export default ThemePicker;
