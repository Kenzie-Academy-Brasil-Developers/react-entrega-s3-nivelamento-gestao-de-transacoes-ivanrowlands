import { Box, Card, CardContent, Typography } from "@mui/material";

const DisplayAll = ({ fruits }) => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Card
        sx={{
          maxWidth: 400,
          marginTop: 3,
        }}
      >
        <CardContent>
          {fruits.map((item, key) => {
            return (
              <Typography key={key}>
                {" "}
                Nome: {item.name}, Qtd: {item.quantity}, Valor: R$
                {item.price}
              </Typography>
            );
          })}
        </CardContent>
      </Card>
    </Box>
  );
};

export default DisplayAll;