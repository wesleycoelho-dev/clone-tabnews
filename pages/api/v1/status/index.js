function status(request, response) {
  response.status(200).json({ chave: "Os trem funcionando no 12 abençoado" });
}

export default status;
