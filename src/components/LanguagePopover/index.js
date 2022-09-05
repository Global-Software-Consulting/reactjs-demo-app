import React, { useRef, useState } from "react";
import { alpha } from "@mui/material/styles";
import {
  Box,
  MenuItem,
  ListItemIcon,
  ListItemText,
  IconButton,
} from "@mui/material";
import PropTypes from "prop-types";
import MenuPopover from "../MenuPopover";
import en from "../../assets/icons/ic_flag_en.svg";
import fr from "../../assets/icons/ic_flag_fr.svg";

const LANGS = [
  {
    value: "en",
    label: "English",
    icon: en,
  },
  {
    value: "fr",
    label: "French",
    icon: fr,
  },
];
export default function LanguagePopover({ handleLanguageChange }) {
  const anchorRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(LANGS[0]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (lang) => {
    handleLanguageChange(lang.value);
    setSelectedLanguage(lang);
    handleClose();
  };
  return (
    <>
      <IconButton
        ref={anchorRef}
        onClick={handleOpen}
        sx={{
          padding: 0,
          width: 44,
          height: 44,
          ...(open && {
            bgcolor: (theme) =>
              alpha(
                theme.palette.primary.main,
                theme.palette.action.focusOpacity
              ),
          }),
        }}
      >
        <img src={selectedLanguage.icon} alt={selectedLanguage.label} />
      </IconButton>

      <MenuPopover
        open={open}
        onClose={handleClose}
        anchorEl={anchorRef.current}
      >
        <Box sx={{ py: 1 }}>
          {LANGS.map((option) => (
            <MenuItem
              key={option.value}
              selected={option.value === selectedLanguage.value}
              onClick={() => handleChange(option)}
              sx={{ py: 1, px: 2.5 }}
            >
              <ListItemIcon>
                <Box component="img" alt={option.label} src={option.icon} />
              </ListItemIcon>
              <ListItemText primaryTypographyProps={{ variant: "body2" }}>
                {option.label}
              </ListItemText>
            </MenuItem>
          ))}
        </Box>
      </MenuPopover>
    </>
  );
}

LanguagePopover.propTypes = {
  handleLanguageChange: PropTypes.func,
};
