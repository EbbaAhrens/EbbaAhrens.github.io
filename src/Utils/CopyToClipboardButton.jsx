import { useState } from "react";
import { IconButton, Snackbar } from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

export const CopyToClipboardButton = ({ value }) => {
  const [open, setOpen] = useState(false);

  const handleClick = (e) => {
    setOpen(true);
    navigator.clipboard.writeText(value);
    e.stopPropagation();
  };

  return (
    <>
      <IconButton onClick={handleClick} color="primary">
        <ContentCopyIcon sx={{ fontSize: 15 }} />
      </IconButton>

      <span>
        <Snackbar
          message="Copied to clipboard"
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
          autoHideDuration={2000}
          onClose={() => setOpen(false)}
          open={open}
        />
      </span>
    </>
  );
};
