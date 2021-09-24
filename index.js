const axios = require("axios");
const createCsvWriter = require("csv-writer").createObjectCsvWriter;

axios.get("https://randomuser.me/api/?results=500").then((datos) => {
  const csvWriter = createCsvWriter({
    path: "out.csv",
    header: [
      { id: "first_name", title: "Name" },
      { id: "last_name", title: "Surname" },
      { id: "email", title: "Age" },
    ],
  });

  let randomUser = datos.data.results;
  let infoUsers = randomUser.map((e) => {
    const data = {
      first_name: e.name.first,
      last_name: e.name.last,
      email: e.email,
    };
    return data;
  });
  csvWriter.writeRecords(infoUsers).then(() => console.log("El archivo CSV fue creado exitosamente"));
});
