import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useState, useEffect } from 'react';
import { GET_THEMES, SAVE_THEME } from '../../Constants/apiEndPoints';
import makeRequest from '../../Utils/makeRequest';
import './Footer.css';

function Footer() {
  const [preferredThemeId, setPreferredThemeId] = useState(null);
  const [themes, setThemes] = useState([]);

  useEffect(() => {
    makeRequest(GET_THEMES)
      .then((response) => {
        setThemes(response.themes);
        setPreferredThemeId(response.preferredThemeId);
      })
      .catch((err) => {
        console.error(err.message);
      });
  }, []);

  function handleThemeChange(themeId) {
    makeRequest(SAVE_THEME, {
      data: {
        preferredThemeId: themeId,
      },
    })
      .then((response) => {
        setPreferredThemeId(themeId);
      })
      .catch((err) => {
        console.error(err.message);
      });
  }

  return (
    <footer>
      <span
        data-testid="themes
      "
      >
        THEMES
      </span>

      {themes.map((theme) => {
        return (
          <div
            key={uuidv4()}
            className="theme-icon"
            style={{
              backgroundColor: theme.colorHexCode,
              ...(theme.id === preferredThemeId && {
                border: '4px solid white',
              }),
            }}
            onClick={() => handleThemeChange(theme.id)}
            data-testid="theme-icon"
          ></div>
        );
      })}
    </footer>
  );
}

export default Footer;
