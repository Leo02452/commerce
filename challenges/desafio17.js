const totalProdutos = db.produtos.countDocuments({});

db.resumoProdutos.insertOne({ franquia: "McDonalds", totalProdutos });

db.resumoProdutos.find({}, { _id: 0 });