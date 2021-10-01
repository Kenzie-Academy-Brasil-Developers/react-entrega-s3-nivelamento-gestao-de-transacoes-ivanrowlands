import { useState } from "react";
import { Button, Box, Card, Typography, CardContent } from "@mui/material";
const DisplayChanges = ({ fruits }) => {
  const [show, setShow] = useState(true);

  const changeType = (value) => {
    setShow(value);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        marginTop: 2,
      }}
    >
      <Card sx={{ color: "white" }}>
        {show && (
          <CardContent sx={{ backgroundColor: "#487daba3" }}>
            <h2>Entradas: </h2>
            {fruits.map((item, key) => {
              return (
                item.quantity > 0 && (
                  <Typography key={key}>
                    Nome: {item.name}, Qtd: {item.quantity}, Valor: R$
                    {item.price}
                  </Typography>
                )
              );
            })}
          </CardContent>
        )}
        {!show && (
          <CardContent sx={{ backgroundColor: "#c74646" }}>
            <h2>Saídas: </h2>
            {fruits.map((item, key) => {
              return (
                item.quantity < 0 && (
                  <Typography key={key}>
                    Nome: {item.name}, Qtd: {item.quantity}, Valor: R$
                    {item.price}
                  </Typography>
                )
              );
            })}
          </CardContent>
        )}
      </Card>
      {show ? (
        <Button
          sx={{ marginTop: 2 }}
          variant="outlined"
          color="error"
          onClick={() => changeType(false)}
        >
          MOSTRAR SAÍDAS
        </Button>
      ) : (
        <Button
          sx={{ marginTop: 2 }}
          variant="outlined"
          color="success"
          onClick={() => changeType(true)}
        >
          MOSTRAR ENTRADAS
        </Button>
      )}
    </Box>
  );
};

export default DisplayChanges;