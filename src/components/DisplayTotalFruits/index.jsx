import { Box, Card, CardContent, Typography } from "@mui/material";

const DisplayTotalFruits = ({ fruits }) => {
  const entries = fruits
    .filter((item) => item.quantity > 0)
    .map((item) => item.quantity)
    .reduce((accumulator, currentValue) => {
      return accumulator + currentValue;
    }, 0);

  const exits = fruits
    .filter((item) => item.quantity < 0)
    .map((item) => item.quantity)
    .reduce((accumulator, currentValue) => {
      return accumulator + currentValue;
    }, 0);

  const profit = fruits
    .filter((item) => item.quantity < 0)
    .map((item) => item.quantity * item.price)
    .reduce((accumulator, currentValue) => {
      return accumulator + currentValue;
    }, 0);

  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Card
        sx={{
          maxWidth: 150,
          marginTop: 5,
          marginBottom: 3,
        }}
      >
        <CardContent>
          <Typography>Total de vendas: {exits * -1}</Typography>
        </CardContent>
      </Card>
      <Card
        sx={{ maxWidth: 150, marginLeft: 2, marginTop: 5, marginBottom: 3 }}
      >
        <CardContent>
          <Typography>Total de entradas: {entries}</Typography>
        </CardContent>
      </Card>
      <Card
        sx={{
          maxWidth: 150,
          marginLeft: 2,
          marginTop: 5,
          marginBottom: 3,
          backgroundColor: "#487dab",
          color: "grey",
        }}
      >
        <CardContent sx={{ paddingTop: 4 }}>
          <Typography>Lucro: R${profit * -1}</Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default DisplayTotalFruits;