import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Button,
  Avatar,
} from "@mui/material";
import { setBannerData } from "./utils/bannerSlice";
import { useSelector } from "react-redux";
import { RootState } from "./utils/store";

interface EditBannerImgProps {
  open: boolean;
  handleClose: () => void;
  index: number;
}

const EditBannerImg: React.FC<EditBannerImgProps> = ({
  open,
  handleClose,

  index,
}) => {
  const dispatch = useDispatch();
  const bannerData = useSelector((state: RootState) => state.banner);
  const [title, setTitle] = useState(bannerData.title);
  const [description, setDescription] = useState(bannerData.description);
  const [cta, setCta] = useState(bannerData.cta);
  const [selectedImage, setSelectedImage] = useState(bannerData.images[index]);

  const handleSave = () => {
    const updatedImages = [...bannerData.images];
    updatedImages[index] = selectedImage;

    dispatch(setBannerData({ title, description, cta, images: updatedImages }));
    handleClose();
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Edit Banner</DialogTitle>
      <DialogContent>
        <TextField
          margin="dense"
          label="Title"
          type="text"
          fullWidth
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextField
          margin="dense"
          label="Description"
          type="text"
          fullWidth
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <TextField
          margin="dense"
          label="Call to Action"
          type="text"
          fullWidth
          value={cta}
          onChange={(e) => setCta(e.target.value)}
        />
        <div className="flex">
          {bannerData.isLoadedWithData &&
            bannerData.images.map((image: string, idx: number) => (
              <Avatar
                key={idx}
                src={image}
                alt={`Banner Image ${idx + 1}`}
                sx={{ width: 56, height: 56, mt: 2 }}
                style={{
                  margin: "4px",
                  cursor: "pointer",
                  border: selectedImage === image ? "2px solid blue" : "none",
                }}
                onClick={() => setSelectedImage(image)}
              />
            ))}
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleSave} color="primary">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditBannerImg;
