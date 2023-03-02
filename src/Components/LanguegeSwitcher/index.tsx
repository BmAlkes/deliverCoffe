import brasil from "../../assets/brazil-48.png";
import usa from "../../assets/usa-48.png";
import israel from "../../assets/israel-48.png";
import { useTranslation } from "react-i18next";
import "./styles.css";

const languageOptions = [
  { name: "Portugues", value: "ptBr", flag: brasil },
  { name: "English", value: "en", flag: usa },
  { name: "Hebrew", value: "he", flag: israel },
];

export const LanguageSwitcher = () => {
  const { t, i18n } = useTranslation();
  return (
    <div>
      {languageOptions.map((language) => (
        <button
          key={language.value}
          className="flags"
          onClick={() => {
            i18n.changeLanguage(language.value);
          }}
        >
          <img src={language.flag} alt={language.name} />
        </button>
      ))}
    </div>
  );
};
