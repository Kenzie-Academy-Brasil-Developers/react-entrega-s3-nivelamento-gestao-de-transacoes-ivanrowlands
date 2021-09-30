import { useState } from "react";
import { Box, TextField, Button } from "@mui/material";

const DisplayRegistration = ({ fruits, setFruits }) => {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");

  const handleClick = () => {
    if (name !== "" && quantity !== 0 && price !== 0 && price > 0) {
      setFruits([...fruits, { name, quantity, price }]);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <TextField
        variant="outlined"
        margin="dense"
        size="small"
        type="text"
        placeholder="Fruta"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <TextField
        variant="outlined"
        margin="dense"
        size="small"
        type="number"
        placeholder="Quantidade"
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      />
      <TextField
        variant="outlined"
        margin="dense"
        size="small"
        type="number"
        placeholder="Preço"
        value={price}
        onChange={(e) => setPrice(Number(e.target.value))}
      />
      <Button variant="contained" onClick={handleClick} >
        Adicionar Fruta
      </Button>
    </Box>
  );
};
export default DisplayRegistration;