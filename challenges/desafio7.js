db.produtos
  .find({
    $and: [
      { vendidos: { $not: { $eq: 36 } } }, { tags: { $exists: false } },
    ],
  }, { _id: 0, nome: 1, vendidos: 1 });
